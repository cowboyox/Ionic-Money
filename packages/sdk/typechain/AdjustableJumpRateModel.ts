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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export type InterestRateModelParamsStruct = {
  blocksPerYear: BigNumberish;
  baseRatePerYear: BigNumberish;
  multiplierPerYear: BigNumberish;
  jumpMultiplierPerYear: BigNumberish;
  kink: BigNumberish;
};

export type InterestRateModelParamsStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  blocksPerYear: BigNumber;
  baseRatePerYear: BigNumber;
  multiplierPerYear: BigNumber;
  jumpMultiplierPerYear: BigNumber;
  kink: BigNumber;
};

export interface AdjustableJumpRateModelInterface extends utils.Interface {
  functions: {
    "_setIrmParameters((uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
    "baseRatePerBlock()": FunctionFragment;
    "blocksPerYear()": FunctionFragment;
    "getBorrowRate(uint256,uint256,uint256)": FunctionFragment;
    "getSupplyRate(uint256,uint256,uint256,uint256)": FunctionFragment;
    "isInterestRateModel()": FunctionFragment;
    "jumpMultiplierPerBlock()": FunctionFragment;
    "kink()": FunctionFragment;
    "multiplierPerBlock()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "utilizationRate(uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_setIrmParameters"
      | "baseRatePerBlock"
      | "blocksPerYear"
      | "getBorrowRate"
      | "getSupplyRate"
      | "isInterestRateModel"
      | "jumpMultiplierPerBlock"
      | "kink"
      | "multiplierPerBlock"
      | "owner"
      | "renounceOwnership"
      | "transferOwnership"
      | "utilizationRate"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_setIrmParameters",
    values: [InterestRateModelParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "baseRatePerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "blocksPerYear",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getBorrowRate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupplyRate",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isInterestRateModel",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "jumpMultiplierPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "kink", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "multiplierPerBlock",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "utilizationRate",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_setIrmParameters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "baseRatePerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "blocksPerYear",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupplyRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isInterestRateModel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "jumpMultiplierPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "kink", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "multiplierPerBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "utilizationRate",
    data: BytesLike
  ): Result;

  events: {
    "NewInterestParams(uint256,uint256,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewInterestParams"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface NewInterestParamsEventObject {
  baseRatePerBlock: BigNumber;
  multiplierPerBlock: BigNumber;
  jumpMultiplierPerBlock: BigNumber;
  kink: BigNumber;
}
export type NewInterestParamsEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  NewInterestParamsEventObject
>;

export type NewInterestParamsEventFilter =
  TypedEventFilter<NewInterestParamsEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface AdjustableJumpRateModel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AdjustableJumpRateModelInterface;

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
    _setIrmParameters(
      params: InterestRateModelParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    baseRatePerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    blocksPerYear(overrides?: CallOverrides): Promise<[BigNumber]>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isInterestRateModel(overrides?: CallOverrides): Promise<[boolean]>;

    jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    kink(overrides?: CallOverrides): Promise<[BigNumber]>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    utilizationRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  _setIrmParameters(
    params: InterestRateModelParamsStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

  getBorrowRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getSupplyRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    reserveFactorMantissa: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

  jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  kink(overrides?: CallOverrides): Promise<BigNumber>;

  multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  utilizationRate(
    cash: BigNumberish,
    borrows: BigNumberish,
    reserves: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    _setIrmParameters(
      params: InterestRateModelParamsStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<boolean>;

    jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    kink(overrides?: CallOverrides): Promise<BigNumber>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    utilizationRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "NewInterestParams(uint256,uint256,uint256,uint256)"(
      baseRatePerBlock?: null,
      multiplierPerBlock?: null,
      jumpMultiplierPerBlock?: null,
      kink?: null
    ): NewInterestParamsEventFilter;
    NewInterestParams(
      baseRatePerBlock?: null,
      multiplierPerBlock?: null,
      jumpMultiplierPerBlock?: null,
      kink?: null
    ): NewInterestParamsEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    _setIrmParameters(
      params: InterestRateModelParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    baseRatePerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    blocksPerYear(overrides?: CallOverrides): Promise<BigNumber>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInterestRateModel(overrides?: CallOverrides): Promise<BigNumber>;

    jumpMultiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    kink(overrides?: CallOverrides): Promise<BigNumber>;

    multiplierPerBlock(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    utilizationRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _setIrmParameters(
      params: InterestRateModelParamsStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    baseRatePerBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blocksPerYear(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getBorrowRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSupplyRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      reserveFactorMantissa: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInterestRateModel(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    jumpMultiplierPerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    kink(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    multiplierPerBlock(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    utilizationRate(
      cash: BigNumberish,
      borrows: BigNumberish,
      reserves: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
