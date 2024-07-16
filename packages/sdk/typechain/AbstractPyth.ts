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
  PayableOverrides,
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

export declare namespace PythStructs {
  export type PriceStruct = {
    price: BigNumberish;
    conf: BigNumberish;
    expo: BigNumberish;
    publishTime: BigNumberish;
  };

  export type PriceStructOutput = [BigNumber, BigNumber, number, BigNumber] & {
    price: BigNumber;
    conf: BigNumber;
    expo: number;
    publishTime: BigNumber;
  };

  export type PriceFeedStruct = {
    id: BytesLike;
    price: PythStructs.PriceStruct;
    emaPrice: PythStructs.PriceStruct;
  };

  export type PriceFeedStructOutput = [
    string,
    PythStructs.PriceStructOutput,
    PythStructs.PriceStructOutput
  ] & {
    id: string;
    price: PythStructs.PriceStructOutput;
    emaPrice: PythStructs.PriceStructOutput;
  };
}

export interface AbstractPythInterface extends utils.Interface {
  functions: {
    "getEmaPrice(bytes32)": FunctionFragment;
    "getEmaPriceNoOlderThan(bytes32,uint256)": FunctionFragment;
    "getEmaPriceUnsafe(bytes32)": FunctionFragment;
    "getPrice(bytes32)": FunctionFragment;
    "getPriceNoOlderThan(bytes32,uint256)": FunctionFragment;
    "getPriceUnsafe(bytes32)": FunctionFragment;
    "getUpdateFee(bytes[])": FunctionFragment;
    "getValidTimePeriod()": FunctionFragment;
    "parsePriceFeedUpdates(bytes[],bytes32[],uint64,uint64)": FunctionFragment;
    "priceFeedExists(bytes32)": FunctionFragment;
    "queryPriceFeed(bytes32)": FunctionFragment;
    "updatePriceFeeds(bytes[])": FunctionFragment;
    "updatePriceFeedsIfNecessary(bytes[],bytes32[],uint64[])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getEmaPrice"
      | "getEmaPriceNoOlderThan"
      | "getEmaPriceUnsafe"
      | "getPrice"
      | "getPriceNoOlderThan"
      | "getPriceUnsafe"
      | "getUpdateFee"
      | "getValidTimePeriod"
      | "parsePriceFeedUpdates"
      | "priceFeedExists"
      | "queryPriceFeed"
      | "updatePriceFeeds"
      | "updatePriceFeedsIfNecessary"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getEmaPrice",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmaPriceNoOlderThan",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getEmaPriceUnsafe",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "getPrice", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "getPriceNoOlderThan",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPriceUnsafe",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getUpdateFee",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getValidTimePeriod",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "parsePriceFeedUpdates",
    values: [BytesLike[], BytesLike[], BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "priceFeedExists",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "queryPriceFeed",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceFeeds",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "updatePriceFeedsIfNecessary",
    values: [BytesLike[], BytesLike[], BigNumberish[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getEmaPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmaPriceNoOlderThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEmaPriceUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPriceNoOlderThan",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPriceUnsafe",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUpdateFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getValidTimePeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parsePriceFeedUpdates",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "priceFeedExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "queryPriceFeed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceFeeds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updatePriceFeedsIfNecessary",
    data: BytesLike
  ): Result;

  events: {
    "BatchPriceFeedUpdate(uint16,uint64)": EventFragment;
    "PriceFeedUpdate(bytes32,uint64,int64,uint64)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BatchPriceFeedUpdate"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceFeedUpdate"): EventFragment;
}

export interface BatchPriceFeedUpdateEventObject {
  chainId: number;
  sequenceNumber: BigNumber;
}
export type BatchPriceFeedUpdateEvent = TypedEvent<
  [number, BigNumber],
  BatchPriceFeedUpdateEventObject
>;

export type BatchPriceFeedUpdateEventFilter =
  TypedEventFilter<BatchPriceFeedUpdateEvent>;

export interface PriceFeedUpdateEventObject {
  id: string;
  publishTime: BigNumber;
  price: BigNumber;
  conf: BigNumber;
}
export type PriceFeedUpdateEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  PriceFeedUpdateEventObject
>;

export type PriceFeedUpdateEventFilter = TypedEventFilter<PriceFeedUpdateEvent>;

export interface AbstractPyth extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AbstractPythInterface;

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
    getEmaPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [PythStructs.PriceStructOutput] & { price: PythStructs.PriceStructOutput }
    >;

    getEmaPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [PythStructs.PriceStructOutput] & { price: PythStructs.PriceStructOutput }
    >;

    getEmaPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [PythStructs.PriceStructOutput] & { price: PythStructs.PriceStructOutput }
    >;

    getPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [PythStructs.PriceStructOutput] & { price: PythStructs.PriceStructOutput }
    >;

    getPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [PythStructs.PriceStructOutput] & { price: PythStructs.PriceStructOutput }
    >;

    getPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [PythStructs.PriceStructOutput] & { price: PythStructs.PriceStructOutput }
    >;

    getUpdateFee(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { feeAmount: BigNumber }>;

    getValidTimePeriod(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { validTimePeriod: BigNumber }>;

    parsePriceFeedUpdates(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    priceFeedExists(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { exists: boolean }>;

    queryPriceFeed(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [PythStructs.PriceFeedStructOutput] & {
        priceFeed: PythStructs.PriceFeedStructOutput;
      }
    >;

    updatePriceFeeds(
      updateData: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    updatePriceFeedsIfNecessary(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  getEmaPrice(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  getEmaPriceNoOlderThan(
    id: BytesLike,
    age: BigNumberish,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  getEmaPriceUnsafe(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  getPrice(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  getPriceNoOlderThan(
    id: BytesLike,
    age: BigNumberish,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  getPriceUnsafe(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceStructOutput>;

  getUpdateFee(
    updateData: BytesLike[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

  parsePriceFeedUpdates(
    updateData: BytesLike[],
    priceIds: BytesLike[],
    minPublishTime: BigNumberish,
    maxPublishTime: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  priceFeedExists(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  queryPriceFeed(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<PythStructs.PriceFeedStructOutput>;

  updatePriceFeeds(
    updateData: BytesLike[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  updatePriceFeedsIfNecessary(
    updateData: BytesLike[],
    priceIds: BytesLike[],
    publishTimes: BigNumberish[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    getEmaPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    getEmaPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    getEmaPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    getPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    getPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    getPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceStructOutput>;

    getUpdateFee(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    parsePriceFeedUpdates(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceFeedStructOutput[]>;

    priceFeedExists(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    queryPriceFeed(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PythStructs.PriceFeedStructOutput>;

    updatePriceFeeds(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    updatePriceFeedsIfNecessary(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BatchPriceFeedUpdate(uint16,uint64)"(
      chainId?: null,
      sequenceNumber?: null
    ): BatchPriceFeedUpdateEventFilter;
    BatchPriceFeedUpdate(
      chainId?: null,
      sequenceNumber?: null
    ): BatchPriceFeedUpdateEventFilter;

    "PriceFeedUpdate(bytes32,uint64,int64,uint64)"(
      id?: BytesLike | null,
      publishTime?: null,
      price?: null,
      conf?: null
    ): PriceFeedUpdateEventFilter;
    PriceFeedUpdate(
      id?: BytesLike | null,
      publishTime?: null,
      price?: null,
      conf?: null
    ): PriceFeedUpdateEventFilter;
  };

  estimateGas: {
    getEmaPrice(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getEmaPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getEmaPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPrice(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    getPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUpdateFee(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getValidTimePeriod(overrides?: CallOverrides): Promise<BigNumber>;

    parsePriceFeedUpdates(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    priceFeedExists(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryPriceFeed(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updatePriceFeeds(
      updateData: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    updatePriceFeedsIfNecessary(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getEmaPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEmaPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEmaPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPrice(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceNoOlderThan(
      id: BytesLike,
      age: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPriceUnsafe(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUpdateFee(
      updateData: BytesLike[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getValidTimePeriod(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parsePriceFeedUpdates(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      minPublishTime: BigNumberish,
      maxPublishTime: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    priceFeedExists(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queryPriceFeed(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updatePriceFeeds(
      updateData: BytesLike[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updatePriceFeedsIfNecessary(
      updateData: BytesLike[],
      priceIds: BytesLike[],
      publishTimes: BigNumberish[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
