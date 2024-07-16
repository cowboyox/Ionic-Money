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

export interface CurveLpTokenPriceOracleNoRegistryInterface
  extends utils.Interface {
  functions: {
    "_acceptOwner()": FunctionFragment;
    "_setPendingOwner(address)": FunctionFragment;
    "getAllLPTokens()": FunctionFragment;
    "getPoolForSwap(address,address)": FunctionFragment;
    "getUnderlyingPrice(address)": FunctionFragment;
    "getUnderlyingTokens(address)": FunctionFragment;
    "initialize(address[],address[],address[][])": FunctionFragment;
    "lpTokens(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "poolOf(address)": FunctionFragment;
    "price(address)": FunctionFragment;
    "registerPool(address,address,address[])": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "underlyingTokens(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_acceptOwner"
      | "_setPendingOwner"
      | "getAllLPTokens"
      | "getPoolForSwap"
      | "getUnderlyingPrice"
      | "getUnderlyingTokens"
      | "initialize"
      | "lpTokens"
      | "owner"
      | "pendingOwner"
      | "poolOf"
      | "price"
      | "registerPool"
      | "renounceOwnership"
      | "transferOwnership"
      | "underlyingTokens"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_acceptOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_setPendingOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllLPTokens",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPoolForSwap",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUnderlyingTokens",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string[], string[], string[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "lpTokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poolOf", values: [string]): string;
  encodeFunctionData(functionFragment: "price", values: [string]): string;
  encodeFunctionData(
    functionFragment: "registerPool",
    values: [string, string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingTokens",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "_acceptOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_setPendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllLPTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPoolForSwap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUnderlyingTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lpTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poolOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingTokens",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "NewOwner(address,address)": EventFragment;
    "NewPendingOwner(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface NewOwnerEventObject {
  oldOwner: string;
  newOwner: string;
}
export type NewOwnerEvent = TypedEvent<[string, string], NewOwnerEventObject>;

export type NewOwnerEventFilter = TypedEventFilter<NewOwnerEvent>;

export interface NewPendingOwnerEventObject {
  oldPendingOwner: string;
  newPendingOwner: string;
}
export type NewPendingOwnerEvent = TypedEvent<
  [string, string],
  NewPendingOwnerEventObject
>;

export type NewPendingOwnerEventFilter = TypedEventFilter<NewPendingOwnerEvent>;

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

export interface CurveLpTokenPriceOracleNoRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CurveLpTokenPriceOracleNoRegistryInterface;

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
    _acceptOwner(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    _setPendingOwner(
      newPendingOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getAllLPTokens(overrides?: CallOverrides): Promise<[string[]]>;

    getPoolForSwap(
      inputToken: string,
      outputToken: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber]>;

    getUnderlyingPrice(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getUnderlyingTokens(
      lpToken: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    initialize(
      _lpTokens: string[],
      _pools: string[],
      _poolUnderlyings: string[][],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    poolOf(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    price(underlying: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    registerPool(
      _lpToken: string,
      _pool: string,
      _underlyings: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    underlyingTokens(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  _acceptOwner(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  _setPendingOwner(
    newPendingOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getAllLPTokens(overrides?: CallOverrides): Promise<string[]>;

  getPoolForSwap(
    inputToken: string,
    outputToken: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber, BigNumber]>;

  getUnderlyingPrice(
    cToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getUnderlyingTokens(
    lpToken: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  initialize(
    _lpTokens: string[],
    _pools: string[],
    _poolUnderlyings: string[][],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  poolOf(arg0: string, overrides?: CallOverrides): Promise<string>;

  price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;

  registerPool(
    _lpToken: string,
    _pool: string,
    _underlyings: string[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  underlyingTokens(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    _acceptOwner(overrides?: CallOverrides): Promise<void>;

    _setPendingOwner(
      newPendingOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllLPTokens(overrides?: CallOverrides): Promise<string[]>;

    getPoolForSwap(
      inputToken: string,
      outputToken: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber, BigNumber]>;

    getUnderlyingPrice(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnderlyingTokens(
      lpToken: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    initialize(
      _lpTokens: string[],
      _pools: string[],
      _poolUnderlyings: string[][],
      overrides?: CallOverrides
    ): Promise<void>;

    lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    poolOf(arg0: string, overrides?: CallOverrides): Promise<string>;

    price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;

    registerPool(
      _lpToken: string,
      _pool: string,
      _underlyings: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    underlyingTokens(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "NewOwner(address,address)"(
      oldOwner?: null,
      newOwner?: null
    ): NewOwnerEventFilter;
    NewOwner(oldOwner?: null, newOwner?: null): NewOwnerEventFilter;

    "NewPendingOwner(address,address)"(
      oldPendingOwner?: null,
      newPendingOwner?: null
    ): NewPendingOwnerEventFilter;
    NewPendingOwner(
      oldPendingOwner?: null,
      newPendingOwner?: null
    ): NewPendingOwnerEventFilter;

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
    _acceptOwner(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    _setPendingOwner(
      newPendingOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getAllLPTokens(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolForSwap(
      inputToken: string,
      outputToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnderlyingPrice(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUnderlyingTokens(
      lpToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _lpTokens: string[],
      _pools: string[],
      _poolUnderlyings: string[][],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    lpTokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    poolOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    price(underlying: string, overrides?: CallOverrides): Promise<BigNumber>;

    registerPool(
      _lpToken: string,
      _pool: string,
      _underlyings: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    underlyingTokens(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _acceptOwner(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    _setPendingOwner(
      newPendingOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getAllLPTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolForSwap(
      inputToken: string,
      outputToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnderlyingPrice(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUnderlyingTokens(
      lpToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _lpTokens: string[],
      _pools: string[],
      _poolUnderlyings: string[][],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    lpTokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    price(
      underlying: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerPool(
      _lpToken: string,
      _pool: string,
      _underlyings: string[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    underlyingTokens(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
