/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface LeveredPositionInterface extends utils.Interface {
  functions: {
    "adjustLeverageRatio(uint256)": FunctionFragment;
    "claimRewards()": FunctionFragment;
    "claimRewards(address)": FunctionFragment;
    "closePosition(address)": FunctionFragment;
    "closePosition()": FunctionFragment;
    "collateralAsset()": FunctionFragment;
    "collateralMarket()": FunctionFragment;
    "factory()": FunctionFragment;
    "fundPosition(address,uint256)": FunctionFragment;
    "getAccruedRewards()": FunctionFragment;
    "getCurrentLeverageRatio()": FunctionFragment;
    "getEquityAmount()": FunctionFragment;
    "getMaxLeverageRatio()": FunctionFragment;
    "getMinLeverageRatio()": FunctionFragment;
    "getSupplyAmountDelta(uint256)": FunctionFragment;
    "isPositionClosed()": FunctionFragment;
    "pool()": FunctionFragment;
    "positionOwner()": FunctionFragment;
    "receiveFlashLoan(address,uint256,bytes)": FunctionFragment;
    "stableAsset()": FunctionFragment;
    "stableMarket()": FunctionFragment;
    "withdrawStableLeftovers(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "adjustLeverageRatio"
      | "claimRewards()"
      | "claimRewards(address)"
      | "closePosition(address)"
      | "closePosition()"
      | "collateralAsset"
      | "collateralMarket"
      | "factory"
      | "fundPosition"
      | "getAccruedRewards"
      | "getCurrentLeverageRatio"
      | "getEquityAmount"
      | "getMaxLeverageRatio"
      | "getMinLeverageRatio"
      | "getSupplyAmountDelta"
      | "isPositionClosed"
      | "pool"
      | "positionOwner"
      | "receiveFlashLoan"
      | "stableAsset"
      | "stableMarket"
      | "withdrawStableLeftovers"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "adjustLeverageRatio",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "closePosition()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collateralMarket",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fundPosition",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAccruedRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentLeverageRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEquityAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMaxLeverageRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMinLeverageRatio",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyAmountDelta",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPositionClosed",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "positionOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "receiveFlashLoan",
    values: [string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "stableAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stableMarket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawStableLeftovers",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "adjustLeverageRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closePosition()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collateralMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fundPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAccruedRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentLeverageRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEquityAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMaxLeverageRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinLeverageRatio",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyAmountDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPositionClosed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveFlashLoan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stableMarket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawStableLeftovers",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LeveredPosition extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LeveredPositionInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    adjustLeverageRatio(
      targetRatioMantissa: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "claimRewards()"(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "claimRewards(address)"(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "closePosition(address)"(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "closePosition()"(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    collateralAsset(overrides?: CallOverrides): Promise<[string]>;

    collateralMarket(overrides?: CallOverrides): Promise<[string]>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    fundPosition(
      fundingAsset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getAccruedRewards(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getCurrentLeverageRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    getEquityAmount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { equityAmount: BigNumber }>;

    getMaxLeverageRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    getMinLeverageRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    getSupplyAmountDelta(
      targetRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isPositionClosed(overrides?: CallOverrides): Promise<[boolean]>;

    pool(overrides?: CallOverrides): Promise<[string]>;

    positionOwner(overrides?: CallOverrides): Promise<[string]>;

    receiveFlashLoan(
      assetAddress: string,
      borrowedAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    stableAsset(overrides?: CallOverrides): Promise<[string]>;

    stableMarket(overrides?: CallOverrides): Promise<[string]>;

    withdrawStableLeftovers(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  adjustLeverageRatio(
    targetRatioMantissa: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "claimRewards()"(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "claimRewards(address)"(
    withdrawTo: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "closePosition(address)"(
    withdrawTo: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "closePosition()"(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  collateralAsset(overrides?: CallOverrides): Promise<string>;

  collateralMarket(overrides?: CallOverrides): Promise<string>;

  factory(overrides?: CallOverrides): Promise<string>;

  fundPosition(
    fundingAsset: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getAccruedRewards(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getCurrentLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

  getEquityAmount(overrides?: CallOverrides): Promise<BigNumber>;

  getMaxLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

  getMinLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

  getSupplyAmountDelta(
    targetRatio: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber]>;

  isPositionClosed(overrides?: CallOverrides): Promise<boolean>;

  pool(overrides?: CallOverrides): Promise<string>;

  positionOwner(overrides?: CallOverrides): Promise<string>;

  receiveFlashLoan(
    assetAddress: string,
    borrowedAmount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  stableAsset(overrides?: CallOverrides): Promise<string>;

  stableMarket(overrides?: CallOverrides): Promise<string>;

  withdrawStableLeftovers(
    withdrawTo: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    adjustLeverageRatio(
      targetRatioMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "claimRewards()"(overrides?: CallOverrides): Promise<void>;

    "claimRewards(address)"(
      withdrawTo: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "closePosition(address)"(
      withdrawTo: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "closePosition()"(overrides?: CallOverrides): Promise<BigNumber>;

    collateralAsset(overrides?: CallOverrides): Promise<string>;

    collateralMarket(overrides?: CallOverrides): Promise<string>;

    factory(overrides?: CallOverrides): Promise<string>;

    fundPosition(
      fundingAsset: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getAccruedRewards(
      overrides?: CallOverrides
    ): Promise<
      [string[], BigNumber[]] & { rewardTokens: string[]; amounts: BigNumber[] }
    >;

    getCurrentLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

    getEquityAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

    getMinLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

    getSupplyAmountDelta(
      targetRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    isPositionClosed(overrides?: CallOverrides): Promise<boolean>;

    pool(overrides?: CallOverrides): Promise<string>;

    positionOwner(overrides?: CallOverrides): Promise<string>;

    receiveFlashLoan(
      assetAddress: string,
      borrowedAmount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    stableAsset(overrides?: CallOverrides): Promise<string>;

    stableMarket(overrides?: CallOverrides): Promise<string>;

    withdrawStableLeftovers(
      withdrawTo: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    adjustLeverageRatio(
      targetRatioMantissa: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "claimRewards()"(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "claimRewards(address)"(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "closePosition(address)"(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "closePosition()"(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    collateralAsset(overrides?: CallOverrides): Promise<BigNumber>;

    collateralMarket(overrides?: CallOverrides): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    fundPosition(
      fundingAsset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getAccruedRewards(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getCurrentLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

    getEquityAmount(overrides?: CallOverrides): Promise<BigNumber>;

    getMaxLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

    getMinLeverageRatio(overrides?: CallOverrides): Promise<BigNumber>;

    getSupplyAmountDelta(
      targetRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPositionClosed(overrides?: CallOverrides): Promise<BigNumber>;

    pool(overrides?: CallOverrides): Promise<BigNumber>;

    positionOwner(overrides?: CallOverrides): Promise<BigNumber>;

    receiveFlashLoan(
      assetAddress: string,
      borrowedAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    stableAsset(overrides?: CallOverrides): Promise<BigNumber>;

    stableMarket(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawStableLeftovers(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    adjustLeverageRatio(
      targetRatioMantissa: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "claimRewards()"(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "claimRewards(address)"(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "closePosition(address)"(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "closePosition()"(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    collateralAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collateralMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fundPosition(
      fundingAsset: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getAccruedRewards(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getCurrentLeverageRatio(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEquityAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMaxLeverageRatio(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getMinLeverageRatio(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyAmountDelta(
      targetRatio: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPositionClosed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positionOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    receiveFlashLoan(
      assetAddress: string,
      borrowedAmount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    stableAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stableMarket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawStableLeftovers(
      withdrawTo: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
