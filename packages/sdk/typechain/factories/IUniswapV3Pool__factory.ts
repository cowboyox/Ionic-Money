/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IUniswapV3Pool,
  IUniswapV3PoolInterface,
} from "../IUniswapV3Pool";

const _abi = [
  {
    type: "function",
    name: "burn",
    inputs: [
      {
        name: "tickLower",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "tickUpper",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "amount",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [
      {
        name: "amount0",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amount1",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "collect",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "tickLower",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "tickUpper",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "amount0Requested",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "amount1Requested",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [
      {
        name: "amount0",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "amount1",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fee",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint24",
        internalType: "uint24",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "flash",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount0",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amount1",
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
  {
    type: "function",
    name: "increaseObservationCardinalityNext",
    inputs: [
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
    name: "initialize",
    inputs: [
      {
        name: "sqrtPriceX96",
        type: "uint160",
        internalType: "uint160",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "liquidity",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "mint",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "tickLower",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "tickUpper",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "amount",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "amount0",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "amount1",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "observations",
    inputs: [
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
        name: "liquidityCumulative",
        type: "uint160",
        internalType: "uint160",
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
    name: "observe",
    inputs: [
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
      {
        name: "liquidityCumulatives",
        type: "uint160[]",
        internalType: "uint160[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "positions",
    inputs: [
      {
        name: "key",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [
      {
        name: "_liquidity",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "feeGrowthInside0LastX128",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "feeGrowthInside1LastX128",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tokensOwed0",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "tokensOwed1",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "slot0",
    inputs: [],
    outputs: [
      {
        name: "sqrtPriceX96",
        type: "uint160",
        internalType: "uint160",
      },
      {
        name: "tick",
        type: "int24",
        internalType: "int24",
      },
      {
        name: "observationIndex",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "observationCardinality",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "observationCardinalityNext",
        type: "uint16",
        internalType: "uint16",
      },
      {
        name: "feeProtocol",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "unlocked",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "swap",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
      {
        name: "zeroForOne",
        type: "bool",
        internalType: "bool",
      },
      {
        name: "amountSpecified",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "sqrtPriceLimitX96",
        type: "uint160",
        internalType: "uint160",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "amount0",
        type: "int256",
        internalType: "int256",
      },
      {
        name: "amount1",
        type: "int256",
        internalType: "int256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "tickBitmap",
    inputs: [
      {
        name: "wordPosition",
        type: "int16",
        internalType: "int16",
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
    name: "ticks",
    inputs: [
      {
        name: "tick",
        type: "int24",
        internalType: "int24",
      },
    ],
    outputs: [
      {
        name: "liquidityGross",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "liquidityNet",
        type: "int128",
        internalType: "int128",
      },
      {
        name: "feeGrowthOutside0X128",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "feeGrowthOutside1X128",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "tickCumulativeOutside",
        type: "int56",
        internalType: "int56",
      },
      {
        name: "secondsPerLiquidityOutsideX128",
        type: "uint160",
        internalType: "uint160",
      },
      {
        name: "secondsOutside",
        type: "uint32",
        internalType: "uint32",
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
    name: "token0",
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
    name: "token1",
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
] as const;

export class IUniswapV3Pool__factory {
  static readonly abi = _abi;
  static createInterface(): IUniswapV3PoolInterface {
    return new utils.Interface(_abi) as IUniswapV3PoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IUniswapV3Pool {
    return new Contract(address, _abi, signerOrProvider) as IUniswapV3Pool;
  }
}
