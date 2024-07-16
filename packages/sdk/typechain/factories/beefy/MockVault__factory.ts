/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockVault, MockVaultInterface } from "../../beefy/MockVault";

const _abi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_strategy",
        type: "address",
        internalType: "address",
      },
      {
        name: "_name",
        type: "string",
        internalType: "string",
      },
      {
        name: "_symbol",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "allowance",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
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
    name: "approve",
    inputs: [
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "available",
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
    name: "balance",
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
    name: "balanceOf",
    inputs: [
      {
        name: "",
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
    name: "decimals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint8",
        internalType: "uint8",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "deposit",
    inputs: [
      {
        name: "_amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "earn",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
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
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nonces",
    inputs: [
      {
        name: "",
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
    name: "permit",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        internalType: "address",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "deadline",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "v",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "r",
        type: "bytes32",
        internalType: "bytes32",
      },
      {
        name: "s",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "strategy",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract IStrategy",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "symbol",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalSupply",
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
    name: "transfer",
    inputs: [
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferFrom",
    inputs: [
      {
        name: "from",
        type: "address",
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "want",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ERC20",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "_shares",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Approval",
    inputs: [
      {
        name: "owner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "spender",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Transfer",
    inputs: [
      {
        name: "from",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "to",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200169b3803806200169b8339810160408190526200003491620002bb565b8181601282600090805190602001906200005092919062000148565b5081516200006690600190602085019062000148565b5060ff81166080524660a0526200007c620000ac565b60c0525050600680546001600160a01b0319166001600160a01b0395909516949094179093555062000426915050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051620000e0919062000382565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b828054620001569062000345565b90600052602060002090601f0160209004810192826200017a5760008555620001c5565b82601f106200019557805160ff1916838001178555620001c5565b82800160010185558215620001c5579182015b82811115620001c5578251825591602001919060010190620001a8565b50620001d3929150620001d7565b5090565b5b80821115620001d35760008155600101620001d8565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200021657600080fd5b81516001600160401b0380821115620002335762000233620001ee565b604051601f8301601f19908116603f011681019082821181831017156200025e576200025e620001ee565b816040528381526020925086838588010111156200027b57600080fd5b600091505b838210156200029f578582018301518183018401529082019062000280565b83821115620002b15760008385830101525b9695505050505050565b600080600060608486031215620002d157600080fd5b83516001600160a01b0381168114620002e957600080fd5b60208501519093506001600160401b03808211156200030757600080fd5b620003158783880162000204565b935060408601519150808211156200032c57600080fd5b506200033b8682870162000204565b9150509250925092565b600181811c908216806200035a57607f821691505b602082108114156200037c57634e487b7160e01b600052602260045260246000fd5b50919050565b600080835481600182811c9150808316806200039f57607f831692505b6020808410821415620003c057634e487b7160e01b86526022600452602486fd5b818015620003d75760018114620003e95762000418565b60ff1986168952848901965062000418565b60008a81526020902060005b86811015620004105781548b820152908501908301620003f5565b505084890196505b509498975050505050505050565b60805160a05160c05161124562000456600039600061079401526000610764015260006101cb01526112456000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806370a08231116100ad578063b69ef8a811610071578063b69ef8a81461027d578063b6b55f2514610285578063d389800f14610298578063d505accf146102a0578063dd62ed3e146102b357600080fd5b806370a082311461020f5780637ecebe001461022f57806395d89b411461024f578063a8c62e7614610257578063a9059cbb1461026a57600080fd5b806323b872dd116100f457806323b872dd1461019e5780632e1a7d4d146101b1578063313ce567146101c65780633644e515146101ff57806348a0d7541461020757600080fd5b806306fdde0314610126578063095ea7b31461014457806318160ddd146101675780631f1fcd511461017e575b600080fd5b61012e6102de565b60405161013b9190610e9c565b60405180910390f35b610157610152366004610f09565b61036c565b604051901515815260200161013b565b61017060025481565b60405190815260200161013b565b6101866103d8565b6040516001600160a01b03909116815260200161013b565b6101576101ac366004610f35565b61044b565b6101c46101bf366004610f76565b61052b565b005b6101ed7f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff909116815260200161013b565b610170610760565b6101706107b6565b61017061021d366004610f8f565b60036020526000908152604090205481565b61017061023d366004610f8f565b60056020526000908152604090205481565b61012e61082a565b600654610186906001600160a01b031681565b610157610278366004610f09565b610837565b61017061089d565b6101c4610293366004610f76565b610987565b6101c4610a6f565b6101c46102ae366004610fb3565b610afd565b6101706102c136600461102a565b600460209081526000928352604080842090915290825290205481565b600080546102eb90611063565b80601f016020809104026020016040519081016040528092919081815260200182805461031790611063565b80156103645780601f1061033957610100808354040283529160200191610364565b820191906000526020600020905b81548152906001019060200180831161034757829003601f168201915b505050505081565b3360008181526004602090815260408083206001600160a01b038716808552925280832085905551919290917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925906103c79086815260200190565b60405180910390a350600192915050565b60065460408051631f1fcd5160e01b815290516000926001600160a01b031691631f1fcd519160048083019260209291908290030181865afa158015610422573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610446919061109e565b905090565b6001600160a01b038316600090815260046020908152604080832033845290915281205460001981146104a75761048283826110d1565b6001600160a01b03861660009081526004602090815260408083203384529091529020555b6001600160a01b038516600090815260036020526040812080548592906104cf9084906110d1565b90915550506001600160a01b0380851660008181526003602052604090819020805487019055519091871690600080516020611219833981519152906105189087815260200190565b60405180910390a3506001949350505050565b60006002548261053961089d565b61054391906110e8565b61054d9190611107565b90506105593383610d46565b60006105636103d8565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa1580156105a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105cd9190611129565b9050818110156106df5760006105e382846110d1565b600654604051632e1a7d4d60e01b8152600481018390529192506001600160a01b031690632e1a7d4d90602401600060405180830381600087803b15801561062a57600080fd5b505af115801561063e573d6000803e3d6000fd5b50505050600061064c6103d8565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015610692573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b69190611129565b905060006106c484836110d1565b9050828110156106db576106d88185611142565b94505b5050505b6106e76103d8565b60405163a9059cbb60e01b8152336004820152602481018490526001600160a01b03919091169063a9059cbb906044016020604051808303816000875af1158015610736573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061075a919061115a565b50505050565b60007f0000000000000000000000000000000000000000000000000000000000000000461461079157610446610db0565b507f000000000000000000000000000000000000000000000000000000000000000090565b60006107c06103d8565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015610806573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104469190611129565b600180546102eb90611063565b336000908152600360205260408120805483919083906108589084906110d1565b90915550506001600160a01b03831660008181526003602052604090819020805485019055513390600080516020611219833981519152906103c79086815260200190565b6006546040805163722713f760e01b815290516000926001600160a01b03169163722713f79160048083019260209291908290030181865afa1580156108e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061090b9190611129565b6109136103d8565b6040516370a0823160e01b81523060048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015610959573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061097d9190611129565b6104469190611142565b600061099161089d565b905061099b6103d8565b6040516323b872dd60e01b8152336004820152306024820152604481018490526001600160a01b0391909116906323b872dd906064016020604051808303816000875af11580156109f0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a14919061115a565b50610a1d610a6f565b6000610a2761089d565b9050610a3382826110d1565b9250600060025460001415610a49575082610a65565b8260025485610a5891906110e8565b610a629190611107565b90505b61075a3382610e4a565b6000610a796107b6565b9050610a836103d8565b60065460405163a9059cbb60e01b81526001600160a01b0391821660048201526024810184905291169063a9059cbb906044016020604051808303816000875af1158015610ad5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610af9919061115a565b5050565b42841015610b525760405162461bcd60e51b815260206004820152601760248201527f5045524d49545f444541444c494e455f4558504952454400000000000000000060448201526064015b60405180910390fd5b60006001610b5e610760565b6001600160a01b038a811660008181526005602090815260409182902080546001810190915582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98184015280840194909452938d166060840152608083018c905260a083019390935260c08083018b90528151808403909101815260e08301909152805192019190912061190160f01b6101008301526101028201929092526101228101919091526101420160408051601f198184030181528282528051602091820120600084529083018083525260ff871690820152606081018590526080810184905260a0016020604051602081039080840390855afa158015610c6a573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615801590610ca05750876001600160a01b0316816001600160a01b0316145b610cdd5760405162461bcd60e51b815260206004820152600e60248201526d24a72b20a624a22fa9a4a3a722a960911b6044820152606401610b49565b6001600160a01b0390811660009081526004602090815260408083208a8516808552908352928190208990555188815291928a16917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a350505050505050565b6001600160a01b03821660009081526003602052604081208054839290610d6e9084906110d1565b90915550506002805482900390556040518181526000906001600160a01b03841690600080516020611219833981519152906020015b60405180910390a35050565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6000604051610de2919061117c565b6040805191829003822060208301939093528101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b8060026000828254610e5c9190611142565b90915550506001600160a01b0382166000818152600360209081526040808320805486019055518481526000805160206112198339815191529101610da4565b600060208083528351808285015260005b81811015610ec957858101830151858201604001528201610ead565b81811115610edb576000604083870101525b50601f01601f1916929092016040019392505050565b6001600160a01b0381168114610f0657600080fd5b50565b60008060408385031215610f1c57600080fd5b8235610f2781610ef1565b946020939093013593505050565b600080600060608486031215610f4a57600080fd5b8335610f5581610ef1565b92506020840135610f6581610ef1565b929592945050506040919091013590565b600060208284031215610f8857600080fd5b5035919050565b600060208284031215610fa157600080fd5b8135610fac81610ef1565b9392505050565b600080600080600080600060e0888a031215610fce57600080fd5b8735610fd981610ef1565b96506020880135610fe981610ef1565b95506040880135945060608801359350608088013560ff8116811461100d57600080fd5b9699959850939692959460a0840135945060c09093013592915050565b6000806040838503121561103d57600080fd5b823561104881610ef1565b9150602083013561105881610ef1565b809150509250929050565b600181811c9082168061107757607f821691505b6020821081141561109857634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156110b057600080fd5b8151610fac81610ef1565b634e487b7160e01b600052601160045260246000fd5b6000828210156110e3576110e36110bb565b500390565b6000816000190483118215151615611102576111026110bb565b500290565b60008261112457634e487b7160e01b600052601260045260246000fd5b500490565b60006020828403121561113b57600080fd5b5051919050565b60008219821115611155576111556110bb565b500190565b60006020828403121561116c57600080fd5b81518015158114610fac57600080fd5b600080835481600182811c91508083168061119857607f831692505b60208084108214156111b857634e487b7160e01b86526022600452602486fd5b8180156111cc57600181146111dd5761120a565b60ff1986168952848901965061120a565b60008a81526020902060005b868110156112025781548b8201529085019083016111e9565b505084890196505b50949897505050505050505056feddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3efa164736f6c634300080a000a";

type MockVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockVault__factory extends ContractFactory {
  constructor(...args: MockVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _strategy: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string }
  ): Promise<MockVault> {
    return super.deploy(
      _strategy,
      _name,
      _symbol,
      overrides || {}
    ) as Promise<MockVault>;
  }
  override getDeployTransaction(
    _strategy: string,
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _strategy,
      _name,
      _symbol,
      overrides || {}
    );
  }
  override attach(address: string): MockVault {
    return super.attach(address) as MockVault;
  }
  override connect(signer: Signer): MockVault__factory {
    return super.connect(signer) as MockVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockVaultInterface {
    return new utils.Interface(_abi) as MockVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockVault {
    return new Contract(address, _abi, signerOrProvider) as MockVault;
  }
}
