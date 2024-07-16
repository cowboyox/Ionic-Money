/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PreferredPriceOracle,
  PreferredPriceOracleInterface,
} from "../PreferredPriceOracle";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_masterOracle",
        type: "address",
        internalType: "contract MasterPriceOracle",
      },
      {
        name: "_chainlinkOracleV2",
        type: "address",
        internalType: "contract ChainlinkPriceOracleV2",
      },
      {
        name: "_tertiaryOracle",
        type: "address",
        internalType: "contract BasePriceOracle",
      },
      {
        name: "_wtoken",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "chainlinkOracleV2",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ChainlinkPriceOracleV2",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getUnderlyingPrice",
    inputs: [
      {
        name: "cToken",
        type: "address",
        internalType: "contract ICErc20",
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
    name: "masterOracle",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract MasterPriceOracle",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "price",
    inputs: [
      {
        name: "underlying",
        type: "address",
        internalType: "address",
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
    name: "tertiaryOracle",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract BasePriceOracle",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "wtoken",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516107e83803806107e883398101604081905261002f916101a1565b6001600160a01b03841661008a5760405162461bcd60e51b815260206004820152601a60248201527f4d617374657250726963654f7261636c65206e6f74207365742e00000000000060448201526064015b60405180910390fd5b6001600160a01b0383166100e05760405162461bcd60e51b815260206004820152601f60248201527f436861696e6c696e6b50726963654f7261636c655632206e6f74207365742e006044820152606401610081565b6001600160a01b0382166101365760405162461bcd60e51b815260206004820152601e60248201527f5465727469617279207072696365206f7261636c65206e6f74207365742e00006044820152606401610081565b600080546001600160a01b039586166001600160a01b0319918216179091556001805494861694821694909417909355600280549285169284169290921790915560038054919093169116179055610200565b6001600160a01b038116811461019e57600080fd5b50565b600080600080608085870312156101b757600080fd5b84516101c281610189565b60208601519094506101d381610189565b60408601519093506101e481610189565b60608601519092506101f581610189565b939692955090935050565b6105d98061020f6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80639c0591c814610067578063aea9107814610097578063d4c480f7146100b8578063e3cb8649146100cb578063eaada382146100de578063fc57d4df146100f1575b600080fd5b60035461007a906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100aa6100a5366004610579565b610104565b60405190815260200161008e565b60025461007a906001600160a01b031681565b60015461007a906001600160a01b031681565b60005461007a906001600160a01b031681565b6100aa6100ff366004610579565b6102ff565b6003546000906001600160a01b038381169116141561012c5750670de0b6b3a7640000919050565b6000805460405163addd509960e01b81526001600160a01b0385811660048301529091169063addd509990602401602060405180830381865afa158015610177573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061019b9190610596565b6001600160a01b03161461021e576000546040516315d5220f60e31b81526001600160a01b0384811660048301529091169063aea91078906024015b602060405180830381865afa1580156101f4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061021891906105b3565b92915050565b600154604051634ee5a88d60e11b81526001600160a01b0384811660048301526000921690639dcb511a90602401602060405180830381865afa158015610269573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061028d9190610596565b6001600160a01b0316146102cd576001546040516315d5220f60e31b81526001600160a01b0384811660048301529091169063aea91078906024016101d7565b6002546040516315d5220f60e31b81526001600160a01b0384811660048301529091169063aea91078906024016101d7565b600080826001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610340573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103649190610596565b6003549091506001600160a01b038083169116141561038d5750670de0b6b3a764000092915050565b6000805460405163addd509960e01b81526001600160a01b0384811660048301529091169063addd509990602401602060405180830381865afa1580156103d8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103fc9190610596565b6001600160a01b0316146104805760005460405163fc57d4df60e01b81526001600160a01b0385811660048301529091169063fc57d4df906024015b602060405180830381865afa158015610455573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061047991906105b3565b9392505050565b600154604051634ee5a88d60e11b81526001600160a01b0383811660048301526000921690639dcb511a90602401602060405180830381865afa1580156104cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ef9190610596565b6001600160a01b03161461052f5760015460405163fc57d4df60e01b81526001600160a01b0385811660048301529091169063fc57d4df90602401610438565b60025460405163fc57d4df60e01b81526001600160a01b0385811660048301529091169063fc57d4df90602401610438565b6001600160a01b038116811461057657600080fd5b50565b60006020828403121561058b57600080fd5b813561047981610561565b6000602082840312156105a857600080fd5b815161047981610561565b6000602082840312156105c557600080fd5b505191905056fea164736f6c634300080a000a";

type PreferredPriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PreferredPriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PreferredPriceOracle__factory extends ContractFactory {
  constructor(...args: PreferredPriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _masterOracle: string,
    _chainlinkOracleV2: string,
    _tertiaryOracle: string,
    _wtoken: string,
    overrides?: Overrides & { from?: string }
  ): Promise<PreferredPriceOracle> {
    return super.deploy(
      _masterOracle,
      _chainlinkOracleV2,
      _tertiaryOracle,
      _wtoken,
      overrides || {}
    ) as Promise<PreferredPriceOracle>;
  }
  override getDeployTransaction(
    _masterOracle: string,
    _chainlinkOracleV2: string,
    _tertiaryOracle: string,
    _wtoken: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _masterOracle,
      _chainlinkOracleV2,
      _tertiaryOracle,
      _wtoken,
      overrides || {}
    );
  }
  override attach(address: string): PreferredPriceOracle {
    return super.attach(address) as PreferredPriceOracle;
  }
  override connect(signer: Signer): PreferredPriceOracle__factory {
    return super.connect(signer) as PreferredPriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PreferredPriceOracleInterface {
    return new utils.Interface(_abi) as PreferredPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PreferredPriceOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PreferredPriceOracle;
  }
}
