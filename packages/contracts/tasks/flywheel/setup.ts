import { Deployment, DeployResult } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Address, zeroAddress } from "viem";
import { upgradeMarketToSupportFlywheel } from "./upgrade";
import { prepareAndLogTransaction } from "../../chainDeploy/helpers/logging";
import { base } from "viem/chains";

export const setupRewards = async (
  type: "supply" | "borrow",
  market: Address,
  rewardTokenName: string,
  rewardToken: Address,
  epochDuration: number,
  deployer: Address,
  viem: HardhatRuntimeEnvironment["viem"],
  deployments: HardhatRuntimeEnvironment["deployments"]
) => {
  const publicClient = await viem.getPublicClient();
  await upgradeMarketToSupportFlywheel(market, viem, deployer, deployments);

  let booster: DeployResult | undefined;
  let contractName = "IonicFlywheel";
  if (type === "borrow") {
    contractName = "IonicFlywheelBorrow";
    booster = await deployments.deploy(`IonicFlywheelBorrowBooster_${rewardTokenName}`, {
      from: deployer,
      log: true,
      waitConfirmations: 1
    });
    console.log(
      `Deployed booster: ${booster.address} - ${booster.newlyDeployed ? "NEW: " : "reused: "} ${booster.transactionHash}`
    );
  }

  const flywheelName = `${contractName}${type === "borrow" ? "_Borrow" : ""}_${rewardTokenName}${publicClient.chain.id === base.id ? "_v3" : ""}`;
  const _flywheel = await deployments.deploy(flywheelName, {
    contract: contractName,
    from: deployer,
    log: true,
    proxy: {
      proxyContract: "OpenZeppelinTransparentProxy",
      execute: {
        init: {
          methodName: "initialize",
          args: [rewardToken, zeroAddress, type === "borrow" ? booster!.address : zeroAddress, deployer]
        }
      }
    },
    waitConfirmations: 1
  });
  console.log(
    `Deployed flywheel ${flywheelName}: ${_flywheel.address} - ${_flywheel.newlyDeployed ? "NEW: " : "reused: "} ${_flywheel.transactionHash}`
  );

  const flywheelRewardsName = `IonicFlywheelDynamicRewards_${type === "borrow" ? "Borrow_" : ""}${rewardTokenName}${publicClient.chain.id === base.id ? "_v3" : ""}`;
  const flywheelRewards = await deployments.deploy(flywheelRewardsName, {
    contract: "IonicFlywheelDynamicRewards",
    from: deployer,
    log: true,
    args: [
      _flywheel.address, // flywheel
      epochDuration // epoch duration
    ],
    waitConfirmations: 1
  });
  console.log(
    `Deployed flywheel rewards ${flywheelRewardsName}: ${flywheelRewards.address} - ${flywheelRewards.newlyDeployed ? "NEW: " : "reused: "} ${flywheelRewards.transactionHash}`
  );

  const flywheel = await viem.getContractAt(
    `${contractName}`,
    (await deployments.get(flywheelName)).address as Address
  );

  const setFlywheelRewards = await flywheel.read.flywheelRewards();
  console.log("setFlywheelRewards: ", setFlywheelRewards);
  if ((setFlywheelRewards as Address).toLowerCase() !== flywheelRewards.address.toLowerCase()) {
    const txFlywheel = await flywheel.write.setFlywheelRewards([flywheelRewards.address as Address]);
    await publicClient.waitForTransactionReceipt({ hash: txFlywheel });
    console.log(`Set rewards (${flywheelRewards.address}) to flywheel (${flywheel.address})`);
  } else {
    console.log(`Rewards (${flywheelRewards.address}) already set to flywheel (${flywheel.address})`);
  }

  // Adding strategies to flywheel
  const allFlywheelStrategies = (await flywheel.read.getAllStrategies()) as Address[];
  if (!allFlywheelStrategies.map((s) => s.toLowerCase()).includes(market.toLowerCase())) {
    console.log(`Adding strategy ${market} to flywheel ${flywheel.address}`);
    const addTx = await flywheel.write.addStrategyForRewards([market]);
    await publicClient.waitForTransactionReceipt({ hash: addTx });
    console.log(`Added strategy (${market}) to flywheel (${flywheel.address})`);
  } else console.log(`Strategy (${market}) was already added to flywheel (${flywheel.address})`);

  // Adding flywheel to comptroller
  const cErc20 = await viem.getContractAt("ICErc20", market);
  const _comptroller = await cErc20.read.comptroller();
  const comptroller = await viem.getContractAt("IonicComptroller", _comptroller);
  const rewardsDistributors = (await comptroller.read.getRewardsDistributors()) as Address[];
  const feeDistributor = await viem.getContractAt(
    "FeeDistributor",
    (await deployments.get("FeeDistributor")).address as Address
  );
  const owner = await feeDistributor.read.owner();
  const _market = await viem.getContractAt("CErc20RewardsDelegate", market);
  const fwRewards = await flywheel.read.flywheelRewards();
  if (!rewardsDistributors.map((s) => s.toLowerCase()).includes(flywheel.address.toLowerCase())) {
    if (owner.toLowerCase() !== deployer.toLowerCase()) {
      await prepareAndLogTransaction({
        contractInstance: comptroller,
        functionName: "_addRewardsDistributor",
        args: [flywheel.address],
        inputs: [{ internalType: "address", name: "distributor", type: "address" }],
        description: `Add flywheel ${flywheel.address} to pool ${_comptroller}`
      });

      await prepareAndLogTransaction({
        contractInstance: _market,
        functionName: "approve",
        args: [rewardToken, fwRewards],
        inputs: [
          { internalType: "address", name: "_token", type: "address" },
          { internalType: "address", name: "_spender", type: "address" }
        ],
        description: `Approve flywheel ${flywheel.address} to pull reward tokens from market ${market}`
      });
    } else {
      const addTx = await comptroller.write._addRewardsDistributor([flywheel.address]);
      await publicClient.waitForTransactionReceipt({ hash: addTx });
      console.log({ addTx });
      console.log(`Added flywheel (${flywheel.address}) to pool (${_comptroller})`);

      // Approving token spending for fwRewards contract
      const tx = await _market.write.approve([rewardToken as Address, fwRewards as Address]);
      console.log(`mining tx ${tx}`);
      await publicClient.waitForTransactionReceipt({ hash: tx });
      console.log(`approved flywheel ${flywheel.address} to pull reward tokens from market ${market}`);
    }
  } else {
    console.log(`Flywheel ${flywheel.address} already added to pool ${_comptroller}`);
  }
};
