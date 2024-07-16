/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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
} from "../common";

export interface ICERC20Interface extends utils.Interface {
  functions: {
    "plugin()": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "plugin"): FunctionFragment;

  encodeFunctionData(functionFragment: "plugin", values?: undefined): string;

  decodeFunctionResult(functionFragment: "plugin", data: BytesLike): Result;

  events: {};
}

export interface ICERC20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ICERC20Interface;

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
    plugin(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  plugin(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    plugin(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    plugin(overrides?: Overrides & { from?: string }): Promise<BigNumber>;
  };

  populateTransaction: {
    plugin(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
