import { BytesLike, Contract, ethers } from "ethers";

import { RedemptionStrategyContract } from "../../enums";
import { MidasBase } from "../../MidasSdk";

import { chainDeployConfig } from "../../../chainDeploy";

export type StrategiesAndDatas = {
  strategies: string[];
  datas: BytesLike[];
};

export type StrategyAndData = {
  strategyAddress: string;
  strategyData: BytesLike;
  outputToken: string;
};

export const getStrategiesAndDatas = async (
  fuse: MidasBase,
  inputToken: string,
  expectedOutputToken: string | null
): Promise<StrategiesAndDatas> => {
  const strategies: string[] = [];
  const datas: BytesLike[] = [];
  const tokenPath: string[] = [];

  if (expectedOutputToken) {
    let tokenToRedeem = inputToken;
    while (tokenToRedeem != expectedOutputToken && tokenToRedeem in fuse.redemptionStrategies) {
      const { strategyAddress, strategyData, outputToken } = (await getStrategyAndData(
        fuse,
        tokenToRedeem
      )) as StrategyAndData;

      if (tokenPath.find((p) => p == outputToken)) break;

      tokenPath.push(outputToken);
      strategies.push(strategyAddress);
      datas.push(strategyData);

      tokenToRedeem = outputToken;
    }
  }

  return {
    strategies,
    datas,
  };
};

const pickPreferredToken = (fuse: MidasBase, tokens: string[]): string => {
  const deployConfig = chainDeployConfig[fuse.chainId].config;

  if (tokens.find(t => t == deployConfig.wtoken)) {
    return deployConfig.wtoken;
  } else if (tokens.find(t => t == deployConfig.stableToken)) {
    return deployConfig.stableToken;
  } else if (tokens.find(t => t == deployConfig.wBTCToken)) {
    return deployConfig.wBTCToken;
  } else {
    return tokens[0];
  }
}

const getStrategyAndData = async (fuse: MidasBase, token: string): Promise<StrategyAndData> => {
  const [redemptionStrategy, outputToken] = fuse.redemptionStrategies[token];
  const redemptionStrategyContract = new Contract(
    fuse.chainDeployment[redemptionStrategy].address,
    fuse.chainDeployment[redemptionStrategy].abi,
    fuse.provider
  );

  switch (redemptionStrategy) {
    case RedemptionStrategyContract.CurveLpTokenLiquidatorNoRegistry:
      const curveLpOracleAddress = await redemptionStrategyContract.callStatic.oracle();
      const curveLpOracle = new Contract(
        curveLpOracleAddress,
        fuse.chainDeployment.CurveLpTokenPriceOracleNoRegistry.abi,
        fuse.provider
      );
      const tokens = await curveLpOracle.callStatic.underlyingTokens(token);
      const preferredOutputToken = pickPreferredToken(fuse, tokens);
      return {
        strategyAddress: redemptionStrategyContract.address,
        strategyData: new ethers.utils.AbiCoder().encode(["uint256", "address"], [0, preferredOutputToken]),
        outputToken: preferredOutputToken,
      };

    case RedemptionStrategyContract.XBombLiquidator: {
      return { strategyAddress: redemptionStrategyContract.address, strategyData: [], outputToken: outputToken };
    }
    case RedemptionStrategyContract.UniswapLpTokenLiquidator: {
      return {
        strategyAddress: redemptionStrategyContract.address,
        strategyData: new ethers.utils.AbiCoder().encode(
          ["address", "address[]", "address[]"],
          [fuse.chainSpecificAddresses.UNISWAP_V2_ROUTER, [], []] // TODO swapTokenPaths
        ),
        outputToken: outputToken,
      };
    }
    case RedemptionStrategyContract.JarvisSynthereumLiquidator: {
      return { strategyAddress: redemptionStrategyContract.address, strategyData: [], outputToken: outputToken };
    }
    default: {
      return { strategyAddress: redemptionStrategyContract.address, strategyData: [], outputToken: outputToken };
    }
  }
};
