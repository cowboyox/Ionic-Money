import { zkevm } from "@ionicprotocol/chains";
import { assetSymbols, underlying } from "@ionicprotocol/types";
import { ethers } from "ethers";

import {
  ChainDeployConfig,
  deployAlgebraPriceOracle,
  deployBalancerRateProviderPriceOracle,
  deployPythPriceOracle
} from "../helpers";
import { BalancerRateProviderAsset, ConcentratedLiquidityOracleConfig, PythAsset } from "../helpers/types";

const assets = zkevm.assets;

export const deployConfig: ChainDeployConfig = {
  wtoken: zkevm.chainAddresses.W_TOKEN,
  nativeTokenUsdChainlinkFeed: "",
  nativeTokenName: "Ethereum",
  nativeTokenSymbol: "ETH",
  stableToken: zkevm.chainAddresses.STABLE_TOKEN,
  wBTCToken: zkevm.chainAddresses.W_BTC_TOKEN,
  blocksPerYear: zkevm.specificParams.blocksPerYear.toNumber(),
  uniswap: {
    hardcoded: [],
    uniswapData: [],
    pairInitHashCode: ethers.utils.hexlify("0x1f475d88284b09799561ca05d87dc757c1ff4a9f48983cdb84d1dd6e209d3ae2"),
    uniswapV2RouterAddress: "0xbdFa4a05372a10172EeEB75075c85FCbff521625",
    uniswapV2FactoryAddress: "",
    uniswapV3FactoryAddress: "0x865412B6cDf424bE36088fE3DeC2A072a26Cc494",
    uniswapOracleLpTokens: [],
    uniswapOracleInitialDeployTokens: [],
    flashSwapFee: 30
  },
  cgId: zkevm.specificParams.cgId
};

const pythAssets: PythAsset[] = [
  {
    underlying: underlying(assets, assetSymbols.USDC),
    feed: "0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a"
  }
];

const algebraOracleTokens: Array<ConcentratedLiquidityOracleConfig> = [
  {
    assetAddress: underlying(assets, assetSymbols.WBTC),
    poolAddress: "0xFC4A3A7dc6b62bd2EA595b106392f5E006083b83",
    twapWindow: ethers.BigNumber.from(30 * 60),
    baseToken: underlying(assets, assetSymbols.WETH)
  },
  {
    assetAddress: underlying(assets, assetSymbols.DAI),
    poolAddress: "0x68cc0516162b423930cD8448A2a00310E841E7f5",
    twapWindow: ethers.BigNumber.from(30 * 60),
    baseToken: underlying(assets, assetSymbols.USDC)
  },
  {
    assetAddress: underlying(assets, assetSymbols.WMATIC),
    poolAddress: "0xB73AbFb5a2C89f4038baA476Ff3A7942A021c196",
    twapWindow: ethers.BigNumber.from(30 * 60),
    baseToken: underlying(assets, assetSymbols.WETH)
  },
  {
    assetAddress: underlying(assets, assetSymbols.USDT),
    poolAddress: "0x9591b8A30c3a52256ea93E98dA49EE43Afa136A8",
    twapWindow: ethers.BigNumber.from(30 * 60),
    baseToken: underlying(assets, assetSymbols.USDC)
  },
  {
    assetAddress: underlying(assets, assetSymbols.FRAX),
    poolAddress: "0xC4aD89d0A07081871f3007079f816B0757D2638E",
    twapWindow: ethers.BigNumber.from(30 * 60),
    baseToken: underlying(assets, assetSymbols.USDC)
  }
];

const balancerRateProviderAssets: BalancerRateProviderAsset[] = [
  {
    tokenAddress: underlying(assets, assetSymbols.rETH),
    baseToken: underlying(assets, assetSymbols.WETH),
    rateProviderAddress: "0x60b39BEC6AF8206d1E6E8DFC63ceA214A506D6c3"
  },
  {
    tokenAddress: underlying(assets, assetSymbols.wstETH),
    baseToken: underlying(assets, assetSymbols.WETH),
    rateProviderAddress: "0x00346D2Fd4B2Dc3468fA38B857409BC99f832ef8"
  }
];

export const deploy = async ({ run, ethers, getNamedAccounts, deployments }): Promise<void> => {
  const { deployer } = await getNamedAccounts();
  await deployPythPriceOracle({
    run,
    ethers,
    getNamedAccounts,
    deployments,
    deployConfig,
    pythAssets,
    pythAddress: "0xC5E56d6b40F3e3B5fbfa266bCd35C37426537c65",
    nativeTokenUsdFeed: "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
    usdToken: underlying(assets, assetSymbols.USDC)
  });
  //// deploy algebra price oracle
  await deployAlgebraPriceOracle({
    run,
    ethers,
    getNamedAccounts,
    deployments,
    deployConfig,
    concentratedLiquidityOracleTokens: algebraOracleTokens
  });
  /// Balancer LP Price Oracle
  await deployBalancerRateProviderPriceOracle({
    run,
    ethers,
    getNamedAccounts,
    deployments,
    deployConfig,
    balancerRateProviderAssets
  });
};
