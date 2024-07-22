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

export interface IonicFlywheelCoreInterface extends utils.Interface {
  functions: {
    "_acceptOwner()": FunctionFragment;
    "_setPendingOwner(address)": FunctionFragment;
    "accrue(address,address)": FunctionFragment;
    "accrue(address,address,address)": FunctionFragment;
    "addStrategyForRewards(address)": FunctionFragment;
    "allStrategies(uint256)": FunctionFragment;
    "claimRewards(address)": FunctionFragment;
    "feeRecipient()": FunctionFragment;
    "flywheelBooster()": FunctionFragment;
    "flywheelRewards()": FunctionFragment;
    "getAllStrategies()": FunctionFragment;
    "initialize(address,address,address,address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "performanceFee()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rewardToken()": FunctionFragment;
    "rewardsAccrued(address)": FunctionFragment;
    "setBooster(address)": FunctionFragment;
    "setFlywheelRewards(address)": FunctionFragment;
    "strategyState(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateFeeSettings(uint256,address)": FunctionFragment;
    "userIndex(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_acceptOwner"
      | "_setPendingOwner"
      | "accrue(address,address)"
      | "accrue(address,address,address)"
      | "addStrategyForRewards"
      | "allStrategies"
      | "claimRewards"
      | "feeRecipient"
      | "flywheelBooster"
      | "flywheelRewards"
      | "getAllStrategies"
      | "initialize"
      | "owner"
      | "pendingOwner"
      | "performanceFee"
      | "renounceOwnership"
      | "rewardToken"
      | "rewardsAccrued"
      | "setBooster"
      | "setFlywheelRewards"
      | "strategyState"
      | "transferOwnership"
      | "updateFeeSettings"
      | "userIndex"
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
    functionFragment: "accrue(address,address)",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "accrue(address,address,address)",
    values: [string, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "addStrategyForRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "allStrategies",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "feeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "flywheelBooster",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "flywheelRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllStrategies",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "performanceFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardsAccrued",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "setBooster", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setFlywheelRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "strategyState",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateFeeSettings",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "userIndex",
    values: [string, string]
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
    functionFragment: "accrue(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "accrue(address,address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addStrategyForRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "allStrategies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "flywheelBooster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "flywheelRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllStrategies",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "performanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardsAccrued",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setBooster", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFlywheelRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "strategyState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateFeeSettings",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userIndex", data: BytesLike): Result;

  events: {
    "AccrueRewards(address,address,uint256,uint256)": EventFragment;
    "AddStrategy(address)": EventFragment;
    "ClaimRewards(address,uint256)": EventFragment;
    "FlywheelBoosterUpdate(address)": EventFragment;
    "FlywheelRewardsUpdate(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "NewOwner(address,address)": EventFragment;
    "NewPendingOwner(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UpdatedFeeSettings(uint256,uint256,address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AccrueRewards"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddStrategy"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlywheelBoosterUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FlywheelRewardsUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewPendingOwner"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdatedFeeSettings"): EventFragment;
}

export interface AccrueRewardsEventObject {
  strategy: string;
  user: string;
  rewardsDelta: BigNumber;
  rewardsIndex: BigNumber;
}
export type AccrueRewardsEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  AccrueRewardsEventObject
>;

export type AccrueRewardsEventFilter = TypedEventFilter<AccrueRewardsEvent>;

export interface AddStrategyEventObject {
  newStrategy: string;
}
export type AddStrategyEvent = TypedEvent<[string], AddStrategyEventObject>;

export type AddStrategyEventFilter = TypedEventFilter<AddStrategyEvent>;

export interface ClaimRewardsEventObject {
  user: string;
  amount: BigNumber;
}
export type ClaimRewardsEvent = TypedEvent<
  [string, BigNumber],
  ClaimRewardsEventObject
>;

export type ClaimRewardsEventFilter = TypedEventFilter<ClaimRewardsEvent>;

export interface FlywheelBoosterUpdateEventObject {
  newBooster: string;
}
export type FlywheelBoosterUpdateEvent = TypedEvent<
  [string],
  FlywheelBoosterUpdateEventObject
>;

export type FlywheelBoosterUpdateEventFilter =
  TypedEventFilter<FlywheelBoosterUpdateEvent>;

export interface FlywheelRewardsUpdateEventObject {
  newFlywheelRewards: string;
}
export type FlywheelRewardsUpdateEvent = TypedEvent<
  [string],
  FlywheelRewardsUpdateEventObject
>;

export type FlywheelRewardsUpdateEventFilter =
  TypedEventFilter<FlywheelRewardsUpdateEvent>;

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

export interface UpdatedFeeSettingsEventObject {
  oldPerformanceFee: BigNumber;
  newPerformanceFee: BigNumber;
  oldFeeRecipient: string;
  newFeeRecipient: string;
}
export type UpdatedFeeSettingsEvent = TypedEvent<
  [BigNumber, BigNumber, string, string],
  UpdatedFeeSettingsEventObject
>;

export type UpdatedFeeSettingsEventFilter =
  TypedEventFilter<UpdatedFeeSettingsEvent>;

export interface IonicFlywheelCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IonicFlywheelCoreInterface;

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

    "accrue(address,address)"(
      strategy: string,
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    "accrue(address,address,address)"(
      strategy: string,
      user: string,
      secondUser: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    addStrategyForRewards(
      strategy: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    allStrategies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    claimRewards(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    feeRecipient(overrides?: CallOverrides): Promise<[string]>;

    flywheelBooster(overrides?: CallOverrides): Promise<[string]>;

    flywheelRewards(overrides?: CallOverrides): Promise<[string]>;

    getAllStrategies(overrides?: CallOverrides): Promise<[string[]]>;

    initialize(
      _rewardToken: string,
      _flywheelRewards: string,
      _flywheelBooster: string,
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    performanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    rewardsAccrued(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setBooster(
      newBooster: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    setFlywheelRewards(
      newFlywheelRewards: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    strategyState(
      strategy: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateFeeSettings(
      _performanceFee: BigNumberish,
      _feeRecipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    userIndex(
      strategy: string,
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  _acceptOwner(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  _setPendingOwner(
    newPendingOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "accrue(address,address)"(
    strategy: string,
    user: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  "accrue(address,address,address)"(
    strategy: string,
    user: string,
    secondUser: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  addStrategyForRewards(
    strategy: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  allStrategies(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  claimRewards(
    user: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  feeRecipient(overrides?: CallOverrides): Promise<string>;

  flywheelBooster(overrides?: CallOverrides): Promise<string>;

  flywheelRewards(overrides?: CallOverrides): Promise<string>;

  getAllStrategies(overrides?: CallOverrides): Promise<string[]>;

  initialize(
    _rewardToken: string,
    _flywheelRewards: string,
    _flywheelBooster: string,
    _owner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  rewardsAccrued(
    user: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setBooster(
    newBooster: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  setFlywheelRewards(
    newFlywheelRewards: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  strategyState(
    strategy: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateFeeSettings(
    _performanceFee: BigNumberish,
    _feeRecipient: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  userIndex(
    strategy: string,
    user: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    _acceptOwner(overrides?: CallOverrides): Promise<void>;

    _setPendingOwner(
      newPendingOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "accrue(address,address)"(
      strategy: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "accrue(address,address,address)"(
      strategy: string,
      user: string,
      secondUser: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber]>;

    addStrategyForRewards(
      strategy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    allStrategies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    claimRewards(user: string, overrides?: CallOverrides): Promise<void>;

    feeRecipient(overrides?: CallOverrides): Promise<string>;

    flywheelBooster(overrides?: CallOverrides): Promise<string>;

    flywheelRewards(overrides?: CallOverrides): Promise<string>;

    getAllStrategies(overrides?: CallOverrides): Promise<string[]>;

    initialize(
      _rewardToken: string,
      _flywheelRewards: string,
      _flywheelBooster: string,
      _owner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    rewardsAccrued(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    setBooster(newBooster: string, overrides?: CallOverrides): Promise<void>;

    setFlywheelRewards(
      newFlywheelRewards: string,
      overrides?: CallOverrides
    ): Promise<void>;

    strategyState(
      strategy: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number] & { index: BigNumber; lastUpdatedTimestamp: number }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateFeeSettings(
      _performanceFee: BigNumberish,
      _feeRecipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userIndex(
      strategy: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "AccrueRewards(address,address,uint256,uint256)"(
      strategy?: string | null,
      user?: string | null,
      rewardsDelta?: null,
      rewardsIndex?: null
    ): AccrueRewardsEventFilter;
    AccrueRewards(
      strategy?: string | null,
      user?: string | null,
      rewardsDelta?: null,
      rewardsIndex?: null
    ): AccrueRewardsEventFilter;

    "AddStrategy(address)"(newStrategy?: string | null): AddStrategyEventFilter;
    AddStrategy(newStrategy?: string | null): AddStrategyEventFilter;

    "ClaimRewards(address,uint256)"(
      user?: string | null,
      amount?: null
    ): ClaimRewardsEventFilter;
    ClaimRewards(user?: string | null, amount?: null): ClaimRewardsEventFilter;

    "FlywheelBoosterUpdate(address)"(
      newBooster?: string | null
    ): FlywheelBoosterUpdateEventFilter;
    FlywheelBoosterUpdate(
      newBooster?: string | null
    ): FlywheelBoosterUpdateEventFilter;

    "FlywheelRewardsUpdate(address)"(
      newFlywheelRewards?: string | null
    ): FlywheelRewardsUpdateEventFilter;
    FlywheelRewardsUpdate(
      newFlywheelRewards?: string | null
    ): FlywheelRewardsUpdateEventFilter;

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

    "UpdatedFeeSettings(uint256,uint256,address,address)"(
      oldPerformanceFee?: null,
      newPerformanceFee?: null,
      oldFeeRecipient?: null,
      newFeeRecipient?: null
    ): UpdatedFeeSettingsEventFilter;
    UpdatedFeeSettings(
      oldPerformanceFee?: null,
      newPerformanceFee?: null,
      oldFeeRecipient?: null,
      newFeeRecipient?: null
    ): UpdatedFeeSettingsEventFilter;
  };

  estimateGas: {
    _acceptOwner(overrides?: Overrides & { from?: string }): Promise<BigNumber>;

    _setPendingOwner(
      newPendingOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "accrue(address,address)"(
      strategy: string,
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    "accrue(address,address,address)"(
      strategy: string,
      user: string,
      secondUser: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    addStrategyForRewards(
      strategy: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    allStrategies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimRewards(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    feeRecipient(overrides?: CallOverrides): Promise<BigNumber>;

    flywheelBooster(overrides?: CallOverrides): Promise<BigNumber>;

    flywheelRewards(overrides?: CallOverrides): Promise<BigNumber>;

    getAllStrategies(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _rewardToken: string,
      _flywheelRewards: string,
      _flywheelBooster: string,
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    performanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    rewardsAccrued(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setBooster(
      newBooster: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    setFlywheelRewards(
      newFlywheelRewards: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    strategyState(
      strategy: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateFeeSettings(
      _performanceFee: BigNumberish,
      _feeRecipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    userIndex(
      strategy: string,
      user: string,
      overrides?: Overrides & { from?: string }
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

    "accrue(address,address)"(
      strategy: string,
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    "accrue(address,address,address)"(
      strategy: string,
      user: string,
      secondUser: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    addStrategyForRewards(
      strategy: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    allStrategies(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimRewards(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    feeRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    flywheelBooster(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    flywheelRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAllStrategies(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _rewardToken: string,
      _flywheelRewards: string,
      _flywheelBooster: string,
      _owner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    performanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardsAccrued(
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setBooster(
      newBooster: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    setFlywheelRewards(
      newFlywheelRewards: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    strategyState(
      strategy: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateFeeSettings(
      _performanceFee: BigNumberish,
      _feeRecipient: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    userIndex(
      strategy: string,
      user: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
