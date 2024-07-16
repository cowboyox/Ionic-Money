/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  AdjustableAnkrInterestRateModel,
  AdjustableAnkrInterestRateModelInterface,
} from "../AdjustableAnkrInterestRateModel";

const _abi = [
  {
    type: "function",
    name: "_setIrmParameters",
    inputs: [
      {
        name: "params",
        type: "tuple",
        internalType: "struct AdjustableAnkrInterestRateModelParams",
        components: [
          {
            name: "blocksPerYear",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "multiplierPerYear",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "jumpMultiplierPerYear",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "kink",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "blocksPerYear",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getAnkrRate",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBaseRatePerBlock",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getBorrowRate",
    inputs: [
      {
        name: "cash",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "borrows",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reserves",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMultiplierPerBlock",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSupplyRate",
    inputs: [
      {
        name: "cash",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "borrows",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reserves",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reserveFactorMantissa",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isInterestRateModel",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "jumpMultiplierPerBlock",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "kink",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "multiplierPerBlock",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "utilizationRate",
    inputs: [
      {
        name: "cash",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "borrows",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "reserves",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "event",
    name: "NewInterestParams",
    inputs: [
      {
        name: "multiplierPerBlock",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "jumpMultiplierPerBlock",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "kink",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

export class AdjustableAnkrInterestRateModel__factory {
  static readonly abi = _abi;
  static createInterface(): AdjustableAnkrInterestRateModelInterface {
    return new utils.Interface(
      _abi
    ) as AdjustableAnkrInterestRateModelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AdjustableAnkrInterestRateModel {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AdjustableAnkrInterestRateModel;
  }
}
