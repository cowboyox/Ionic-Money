/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UniswapV3Liquidator,
  UniswapV3LiquidatorInterface,
} from "../UniswapV3Liquidator";

const _abi = [
  {
    type: "function",
    name: "name",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "redeem",
    inputs: [
      {
        name: "inputToken",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "inputAmount",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "strategyData",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [
      {
        name: "outputToken",
        type: "address",
        internalType: "contract IERC20Upgradeable",
      },
      {
        name: "outputAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610480806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806306fdde031461003b57806310badf4e14610079575b600080fd5b60408051808201825260138152722ab734b9bbb0b82b19a634b8bab4b230ba37b960691b602082015290516100709190610264565b60405180910390f35b61008c6100873660046102e7565b6100ab565b604080516001600160a01b039093168352602083019190915201610070565b6000806100b98585856100c5565b91509150935093915050565b6000806000806000858060200190518101906100e191906103b4565b5060405163095ea7b360e01b81526001600160a01b038083166004830152602482018d90529399508997509195509350908a16915063095ea7b3906044016020604051808303816000875af115801561013e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101629190610431565b5060408051610100810182526001600160a01b038a811682528581166020830190815262ffffff8681168486019081523060608601908152426080870190815260a087018f8152600060c0890181815260e08a01918252995163414bf38960e01b81529851881660048a0152955187166024890152925190931660448701525184166064860152905160848501525160a4840152925160c48301529151821660e48201529082169063414bf38990610104016020604051808303816000875af1158015610233573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610257919061045a565b9350505050935093915050565b600060208083528351808285015260005b8181101561029157858101830151858201604001528201610275565b818111156102a3576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b03811681146102ce57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156102fc57600080fd5b8335610307816102b9565b925060208401359150604084013567ffffffffffffffff8082111561032b57600080fd5b818601915086601f83011261033f57600080fd5b813581811115610351576103516102d1565b604051601f8201601f19908116603f01168101908382118183101715610379576103796102d1565b8160405282815289602084870101111561039257600080fd5b8260208601602083013760006020848301015280955050505050509250925092565b600080600080600060a086880312156103cc57600080fd5b85516103d7816102b9565b60208701519095506103e8816102b9565b604087015190945062ffffff8116811461040157600080fd5b6060870151909350610412816102b9565b6080870151909250610423816102b9565b809150509295509295909350565b60006020828403121561044357600080fd5b8151801515811461045357600080fd5b9392505050565b60006020828403121561046c57600080fd5b505191905056fea164736f6c634300080a000a";

type UniswapV3LiquidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniswapV3LiquidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniswapV3Liquidator__factory extends ContractFactory {
  constructor(...args: UniswapV3LiquidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<UniswapV3Liquidator> {
    return super.deploy(overrides || {}) as Promise<UniswapV3Liquidator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniswapV3Liquidator {
    return super.attach(address) as UniswapV3Liquidator;
  }
  override connect(signer: Signer): UniswapV3Liquidator__factory {
    return super.connect(signer) as UniswapV3Liquidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniswapV3LiquidatorInterface {
    return new utils.Interface(_abi) as UniswapV3LiquidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV3Liquidator {
    return new Contract(address, _abi, signerOrProvider) as UniswapV3Liquidator;
  }
}
