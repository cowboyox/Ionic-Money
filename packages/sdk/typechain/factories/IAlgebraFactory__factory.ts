/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IAlgebraFactory,
  IAlgebraFactoryInterface,
} from "../IAlgebraFactory";

const _abi = [
  {
    type: "function",
    name: "createPool",
    inputs: [
      {
        name: "tokenA",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenB",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "farmingAddress",
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
    name: "poolByPair",
    inputs: [
      {
        name: "tokenA",
        type: "address",
        internalType: "address",
      },
      {
        name: "tokenB",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "poolDeployer",
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
    name: "setBaseFeeConfiguration",
    inputs: [
      {
        name: "alpha1",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "alpha2",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "beta1",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "beta2",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "gamma1",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "gamma2",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "volumeBeta",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "volumeGamma",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "baseFee",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setFarmingAddress",
    inputs: [
      {
        name: "_farmingAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOwner",
    inputs: [
      {
        name: "_owner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setVaultAddress",
    inputs: [
      {
        name: "_vaultAddress",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "vaultAddress",
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
    type: "event",
    name: "FarmingAddress",
    inputs: [
      {
        name: "newFarmingAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "FeeConfiguration",
    inputs: [
      {
        name: "alpha1",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
      {
        name: "alpha2",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
      {
        name: "beta1",
        type: "uint32",
        indexed: false,
        internalType: "uint32",
      },
      {
        name: "beta2",
        type: "uint32",
        indexed: false,
        internalType: "uint32",
      },
      {
        name: "gamma1",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
      {
        name: "gamma2",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
      {
        name: "volumeBeta",
        type: "uint32",
        indexed: false,
        internalType: "uint32",
      },
      {
        name: "volumeGamma",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
      {
        name: "baseFee",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Owner",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Pool",
    inputs: [
      {
        name: "token0",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token1",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "pool",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "VaultAddress",
    inputs: [
      {
        name: "newVaultAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;

export class IAlgebraFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IAlgebraFactoryInterface {
    return new utils.Interface(_abi) as IAlgebraFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAlgebraFactory {
    return new Contract(address, _abi, signerOrProvider) as IAlgebraFactory;
  }
}
