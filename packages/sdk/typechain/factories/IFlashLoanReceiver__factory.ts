/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IFlashLoanReceiver,
  IFlashLoanReceiverInterface,
} from "../IFlashLoanReceiver";

const _abi = [
  {
    type: "function",
    name: "receiveFlashLoan",
    inputs: [
      {
        name: "borrowedAsset",
        type: "address",
        internalType: "address",
      },
      {
        name: "borrowedAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class IFlashLoanReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): IFlashLoanReceiverInterface {
    return new utils.Interface(_abi) as IFlashLoanReceiverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFlashLoanReceiver {
    return new Contract(address, _abi, signerOrProvider) as IFlashLoanReceiver;
  }
}
