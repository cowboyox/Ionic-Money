import { task } from "hardhat/config";
import { Address } from "viem";
import { mode } from "@ionicprotocol/chains";
import { resetLiquidationStrategies, setOptimalSwapPath } from "../../liquidation";
import { assetSymbols } from "@ionicprotocol/types";

task("mode:liquidation:whitelist-redemption-strategies", "Whitelist redemption strategies").setAction(
  async (_, { viem, getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts();
    const publicClient = await viem.getPublicClient();
    const aerodromeV2Liquidator = await deployments.get("AerodromeV2Liquidator");
    const kimLiquidator = await deployments.get("AlgebraSwapLiquidator");
    const velodromeV2Liquidator = await deployments.get("VelodromeV2Liquidator");
    const ionicLiquidator = await viem.getContractAt(
      "IonicUniV3Liquidator",
      (await deployments.get("IonicUniV3Liquidator")).address as Address
    );
    const liquidators = [
      aerodromeV2Liquidator.address as Address,
      kimLiquidator.address as Address,
      velodromeV2Liquidator.address as Address
    ];
    for (const liquidator of liquidators) {
      const isWhitelisted = await ionicLiquidator.read.redemptionStrategiesWhitelist([liquidator]);
      if (!isWhitelisted) {
        const tx = await ionicLiquidator.write._whitelistRedemptionStrategies([[liquidator], [true]]);
        await publicClient.waitForTransactionReceipt({ hash: tx });
        console.log(`Whitelisted ${liquidator} at ${tx}`);
      } else {
        console.log(`${liquidator} already whitelisted`);
      }
    }
  }
);

task("mode:liquidation:set-redemption-strategies", "Set redemption strategy").setAction(
  async (_, { viem, getNamedAccounts, deployments }) => {
    const { deployer } = await getNamedAccounts();
    const modeToken = mode.assets.find((asset) => asset.symbol === assetSymbols.MODE);
    const usdtToken = mode.assets.find((asset) => asset.symbol === assetSymbols.USDT);
    const wethToken = mode.assets.find((asset) => asset.symbol === assetSymbols.WETH);
    const stoneToken = mode.assets.find((asset) => asset.symbol === assetSymbols.STONE);
    const mbtcToken = mode.assets.find((asset) => asset.symbol === assetSymbols.mBTC);
    const weethToken = mode.assets.find((asset) => asset.symbol === assetSymbols.weETH);
    const ezethToken = mode.assets.find((asset) => asset.symbol === assetSymbols.ezETH);
    const usdcToken = mode.assets.find((asset) => asset.symbol === assetSymbols.USDC);
    const rsETHToken = mode.assets.find((asset) => asset.symbol === assetSymbols.wrsETH);
    const weEthOld = "0x028227c4dd1e5419d11Bb6fa6e661920c519D4F5";
    if (
      !modeToken ||
      !usdtToken ||
      !stoneToken ||
      !mbtcToken ||
      !weethToken ||
      !wethToken ||
      !ezethToken ||
      !usdcToken ||
      !rsETHToken
    ) {
      throw new Error("Tokens not found");
    }
    const kimLiquidator = await deployments.get("AlgebraSwapLiquidator");
    const velodromeV2Liquidator = await deployments.get("VelodromeV2Liquidator");
    await resetLiquidationStrategies(viem, deployments, deployer as Address, [
      {
        inputToken: modeToken.underlying,
        outputToken: wethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: wethToken.underlying,
        outputToken: modeToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: usdtToken.underlying,
        outputToken: wethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: wethToken.underlying,
        outputToken: usdtToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: usdcToken.underlying,
        outputToken: wethToken.underlying,
        strategy: velodromeV2Liquidator.address as Address
      },
      {
        inputToken: wethToken.underlying,
        outputToken: usdcToken.underlying,
        strategy: velodromeV2Liquidator.address as Address
      },
      {
        inputToken: stoneToken.underlying,
        outputToken: wethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: wethToken.underlying,
        outputToken: stoneToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: mbtcToken.underlying,
        outputToken: wethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: wethToken.underlying,
        outputToken: mbtcToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: weethToken.underlying,
        outputToken: wethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: wethToken.underlying,
        outputToken: weethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: weEthOld,
        outputToken: wethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: ezethToken.underlying,
        outputToken: wethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: wethToken.underlying,
        outputToken: ezethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: usdcToken.underlying,
        outputToken: usdtToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: usdtToken.underlying,
        outputToken: usdcToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: rsETHToken.underlying,
        outputToken: wethToken.underlying,
        strategy: kimLiquidator.address as Address
      },
      {
        inputToken: wethToken.underlying,
        outputToken: rsETHToken.underlying,
        strategy: kimLiquidator.address as Address
      }
    ]);

    await setOptimalSwapPath(viem, deployments, deployer as Address, {
      inputToken: modeToken.underlying,
      outputToken: usdtToken.underlying,
      optimalPath: [wethToken.underlying, usdtToken.underlying]
    });

    await setOptimalSwapPath(viem, deployments, deployer as Address, {
      inputToken: ezethToken.underlying,
      outputToken: usdtToken.underlying,
      optimalPath: [wethToken.underlying, usdtToken.underlying]
    });

    await setOptimalSwapPath(viem, deployments, deployer as Address, {
      inputToken: ezethToken.underlying,
      outputToken: usdcToken.underlying,
      optimalPath: [wethToken.underlying, usdcToken.underlying]
    });

    await setOptimalSwapPath(viem, deployments, deployer as Address, {
      inputToken: rsETHToken.underlying,
      outputToken: stoneToken.underlying,
      optimalPath: [wethToken.underlying, stoneToken.underlying]
    });
  }
);
