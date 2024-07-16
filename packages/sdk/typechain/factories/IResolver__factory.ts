/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IResolver, IResolverInterface } from "../IResolver";

const _abi = [
  {
    type: "function",
    name: "checker",
    inputs: [],
    outputs: [
      {
        name: "canExec",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "execPayload",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    stateMutability: "view",
  },
] as const;

export class IResolver__factory {
  static readonly abi = _abi;
  static createInterface(): IResolverInterface {
    return new utils.Interface(_abi) as IResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IResolver {
    return new Contract(address, _abi, signerOrProvider) as IResolver;
  }
}
