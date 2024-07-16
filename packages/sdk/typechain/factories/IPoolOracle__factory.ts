/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPoolOracle, IPoolOracleInterface } from "../IPoolOracle";

const _abi = [
  {
    type: "function",
    name: "getObservationAt",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address",
      },
      {
        name: "index",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "blockTimestamp",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "tickCumulative",
        type: "int56",
        internalType: "int56",
      },
      {
        name: "initialized",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolObservation",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "initialized",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "index",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cardinality",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cardinalityNext",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "increaseObservationCardinalityNext",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address",
      },
      {
        name: "observationCardinalityNext",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "initializeOracle",
    inputs: [
      {
        name: "time",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [
      {
        name: "cardinality",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cardinalityNext",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "observeFromPool",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address",
      },
      {
        name: "secondsAgos",
        type: "uint32[]",
        internalType: "uint32[]",
      },
    ],
    outputs: [
      {
        name: "tickCumulatives",
        type: "int56[]",
        internalType: "int56[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "observeSingleFromPool",
    inputs: [
      {
        name: "pool",
        type: "address",
        internalType: "address",
      },
      {
        name: "secondsAgo",
        type: "uint32",
        internalType: "uint32",
      },
    ],
    outputs: [
      {
        name: "tickCumulative",
        type: "int56",
        internalType: "int56",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "write",
    inputs: [
      {
        name: "blockTimestamp",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "tick",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "liquidity",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [
      {
        name: "indexUpdated",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cardinalityUpdated",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "writeNewEntry",
    inputs: [
      {
        name: "index",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "blockTimestamp",
        type: "uint32",
        internalType: "uint32",
      },
      {
        name: "tick",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "liquidity",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "cardinality",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cardinalityNext",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    outputs: [
      {
        name: "indexUpdated",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "cardinalityUpdated",
        type: "uint16",
        internalType: "uint16",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "IncreaseObservationCardinalityNext",
    inputs: [
      {
        name: "pool",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "observationCardinalityNextOld",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
      {
        name: "observationCardinalityNextNew",
        type: "uint16",
        indexed: false,
        internalType: "uint16",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnerWithdrew",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

export class IPoolOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolOracleInterface {
    return new utils.Interface(_abi) as IPoolOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPoolOracle {
    return new Contract(address, _abi, signerOrProvider) as IPoolOracle;
  }
}
