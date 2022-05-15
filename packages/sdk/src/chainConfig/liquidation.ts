import { BigNumber } from "ethers";
import { LiquidationStrategy } from "../modules/liquidation/config";
import { ChainLiquidationDeafaults } from "../Fuse/types";
import { SupportedChains } from "./index";

const liquidationDefaults: ChainLiquidationDeafaults = {
  [SupportedChains.bsc]: {
    SUPPORTED_OUTPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    ],
    SUPPORTED_INPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    ],
    LIQUIDATION_STRATEGY: LiquidationStrategy.UNISWAP,
    MINIMUM_PROFIT_NATIVE: BigNumber.from(0),
  },
  [SupportedChains.chapel]: {
    SUPPORTED_OUTPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
      "0x8babbb98678facc7342735486c851abd7a0d17ca",
      "0x6ce8dA28E2f864420840cF74474eFf5fD80E65B8",
    ],
    SUPPORTED_INPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
    ],
    LIQUIDATION_STRATEGY: LiquidationStrategy.UNISWAP,
    MINIMUM_PROFIT_NATIVE: BigNumber.from(0),
  },
  [SupportedChains.evmos_testnet]: {
    SUPPORTED_OUTPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0x0b67B0A0Ed150B9F06e0ee90D2f1d3c4b3016D5D",
    ],
    SUPPORTED_INPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0x0b67B0A0Ed150B9F06e0ee90D2f1d3c4b3016D5D",
    ],
    LIQUIDATION_STRATEGY: LiquidationStrategy.UNISWAP,
    MINIMUM_PROFIT_NATIVE: BigNumber.from(0),
  },
  [SupportedChains.aurora]: {
    SUPPORTED_OUTPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
    ],
    SUPPORTED_INPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0xC42C30aC6Cc15faC9bD938618BcaA1a1FaE8501d",
    ],
    LIQUIDATION_STRATEGY: LiquidationStrategy.UNISWAP,
    MINIMUM_PROFIT_NATIVE: BigNumber.from(0),
  },
  [SupportedChains.evmos]: {
    SUPPORTED_OUTPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0x0b67B0A0Ed150B9F06e0ee90D2f1d3c4b3016D5D",
    ],
    SUPPORTED_INPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0x0b67B0A0Ed150B9F06e0ee90D2f1d3c4b3016D5D",
    ],
    LIQUIDATION_STRATEGY: LiquidationStrategy.UNISWAP,
    MINIMUM_PROFIT_NATIVE: BigNumber.from(0),
  },
  // TODO: fix these
  [SupportedChains.moonbase_alpha]: {
    SUPPORTED_OUTPUT_CURRENCIES: ["0x0000000000000000000000000000000000000000"],
    SUPPORTED_INPUT_CURRENCIES: ["0x0000000000000000000000000000000000000000"],
    LIQUIDATION_STRATEGY: LiquidationStrategy.UNISWAP,
    MINIMUM_PROFIT_NATIVE: BigNumber.from(0),
  },
  [SupportedChains.moonbeam]: {
    SUPPORTED_OUTPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0xAcc15dC74880C9944775448304B263D191c6077F", // WGLMR
    ],
    SUPPORTED_INPUT_CURRENCIES: [
      "0x0000000000000000000000000000000000000000",
      "0xAcc15dC74880C9944775448304B263D191c6077F", // WGLMR
    ],
    LIQUIDATION_STRATEGY: LiquidationStrategy.UNISWAP,
    MINIMUM_PROFIT_NATIVE: BigNumber.from(0),
  },
  [SupportedChains.ganache]: {
    SUPPORTED_OUTPUT_CURRENCIES: ["0x0000000000000000000000000000000000000000"],
    SUPPORTED_INPUT_CURRENCIES: ["0x0000000000000000000000000000000000000000"],
    LIQUIDATION_STRATEGY: LiquidationStrategy.DEFAULT,
    MINIMUM_PROFIT_NATIVE: BigNumber.from(0),
  },
};

export default liquidationDefaults;
