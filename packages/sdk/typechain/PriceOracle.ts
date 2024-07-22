/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface PriceOracleInterface extends utils.Interface {
  functions: {
    "getUnderlyingPrice(address)": FunctionFragment;
    "isPriceOracle()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getUnderlyingPrice" | "isPriceOracle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getUnderlyingPrice",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isPriceOracle",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getUnderlyingPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPriceOracle",
    data: BytesLike
  ): Result;

  events: {};
}

export interface PriceOracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PriceOracleInterface;

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
    getUnderlyingPrice(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isPriceOracle(overrides?: CallOverrides): Promise<[boolean]>;
  };

  getUnderlyingPrice(
    cToken: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isPriceOracle(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    getUnderlyingPrice(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPriceOracle(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    getUnderlyingPrice(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPriceOracle(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getUnderlyingPrice(
      cToken: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPriceOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
