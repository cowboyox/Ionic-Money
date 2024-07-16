/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  CurveLpTokenPriceOracleNoRegistry,
  CurveLpTokenPriceOracleNoRegistryInterface,
} from "../CurveLpTokenPriceOracleNoRegistry";

const _abi = [
  {
    type: "function",
    name: "_acceptOwner",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "_setPendingOwner",
    inputs: [
      {
        name: "newPendingOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getAllLPTokens",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getPoolForSwap",
    inputs: [
      {
        name: "inputToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "outputToken",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "contract ICurvePool",
      },
      {
        name: "",
        type: "int128",
        internalType: "int128",
      },
      {
        name: "",
        type: "int128",
        internalType: "int128",
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
    name: "getUnderlyingTokens",
    inputs: [
      {
        name: "lpToken",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_lpTokens",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "_pools",
        type: "address[]",
        internalType: "address[]",
      },
      {
        name: "_poolUnderlyings",
        type: "address[][]",
        internalType: "address[][]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "lpTokens",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
    name: "pendingOwner",
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
    name: "poolOf",
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
        type: "address",
        internalType: "address",
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
    name: "registerPool",
    inputs: [
      {
        name: "_lpToken",
        type: "address",
        internalType: "address",
      },
      {
        name: "_pool",
        type: "address",
        internalType: "address",
      },
      {
        name: "_underlyings",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "underlyingTokens",
    inputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
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
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewOwner",
    inputs: [
      {
        name: "oldOwner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "NewPendingOwner",
    inputs: [
      {
        name: "oldPendingOwner",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "newPendingOwner",
        type: "address",
        indexed: false,
        internalType: "address",
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

const _bytecode =
  "0x608060405234801561001057600080fd5b50611609806100206000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063938bd8ec11610097578063f2fde38b11610066578063f2fde38b14610255578063fa09e1e114610268578063fc4d33f914610270578063fc57d4df1461027857600080fd5b8063938bd8ec146101bc578063988b1fa7146101f8578063aea9107814610221578063e30c39781461024257600080fd5b80636e96dfd7116100d35780636e96dfd71461017d578063715018a6146101905780638da5cb5b14610198578063904d4d75146101a957600080fd5b806301eadec4146101055780631bb5e2dc1461013557806327a3c20114610148578063656dc2e41461015d575b600080fd5b610118610113366004611090565b61028b565b6040516001600160a01b0390911681526020015b60405180910390f35b6101186101433660046110bc565b6102c3565b61015b6101563660046111b4565b6102ed565b005b61017061016b3660046112ac565b610586565b60405161012c91906112c9565b61015b61018b3660046112ac565b6105fc565b61015b610666565b6033546001600160a01b0316610118565b61015b6101b7366004611316565b6106a9565b6101cf6101ca366004611378565b6107b3565b604080516001600160a01b039094168452600f92830b6020850152910b9082015260600161012c565b6101186102063660046112ac565b6067602052600090815260409020546001600160a01b031681565b61023461022f3660046112ac565b610937565b60405190815260200161012c565b606554610118906001600160a01b031681565b61015b6102633660046112ac565b610948565b6101706109b9565b61015b610a1b565b6102346102863660046112ac565b610b2f565b606660205281600052604060002081815481106102a757600080fd5b6000918252602090912001546001600160a01b03169150829050565b606881815481106102d357600080fd5b6000918252602090912001546001600160a01b0316905081565b600054610100900460ff161580801561030d5750600054600160ff909116105b806103275750303b158015610327575060005460ff166001145b61038f5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156103b2576000805461ff0019166101001790555b825184511480156103c4575081518451145b61042a5760405162461bcd60e51b815260206004820152603160248201527f4e6f204c5020746f6b656e7320737570706c696564206f72206172726179206c60448201527032b733ba3439903737ba1032b8bab0b61760791b6064820152608401610386565b61043333610c32565b60005b845181101561053957838181518110610451576104516113b1565b60200260200101516067600087848151811061046f5761046f6113b1565b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b031602179055508281815181106104cd576104cd6113b1565b6020026020010151606660008784815181106104eb576104eb6113b1565b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000209080519060200190610526929190611001565b5080610531816113dd565b915050610436565b508015610580576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050565b6001600160a01b0381166000908152606660209081526040918290208054835181840281018401909452808452606093928301828280156105f057602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116105d2575b50505050509050919050565b610604610c6d565b606580546001600160a01b038381166001600160a01b031983168117909355604080519190921680825260208201939093527fb3d55174552271a4f1aaf36b72f50381e892171636b3fb5447fe00e995e7a37b91015b60405180910390a15050565b61066e610c6d565b60405162461bcd60e51b815260206004820152601060248201526f6e6f74207573656420616e796d6f726560801b6044820152606401610386565b6106b1610c6d565b6001600160a01b03838116600090815260676020908152604080832080546001600160a01b031916948716949094179093556066815291902082516106f892840190611001565b506000805b60685481101561075a57846001600160a01b031660688281548110610724576107246113b1565b6000918252602090912001546001600160a01b03161415610748576001915061075a565b80610752816113dd565b9150506106fd565b508061058057606880546001810182556000919091527fa2153420d844928b4421650203c77babc8b33d7f2e7b450e2966db0c220977530180546001600160a01b0386166001600160a01b031990911617905550505050565b60008080805b60685481101561092357600060676000606884815481106107dc576107dc6113b1565b60009182526020808320909101546001600160a01b03908116845290830193909352604090910181205490911691506000199081905b60405163c661065760e01b81526fffffffffffffffffffffffffffffffff821660048201526001600160a01b0385169063c661065790602401602060405180830381865afa925050508015610884575060408051601f3d908101601f19168201909252610881918101906113f8565b60015b61088d5761090c565b8a6001600160a01b0316816001600160a01b031614156108af578193506108cd565b896001600160a01b0316816001600160a01b031614156108cd578192505b816108d781611415565b9250505060001982600f0b1380156108f3575060001983600f0b135b156109075750919550935091506109309050565b610812565b50505050808061091b906113dd565b9150506107b9565b5060008060009250925092505b9250925092565b600061094282610cc9565b92915050565b610950610c6d565b606554604080516001600160a01b03928316815291831660208301527fb3d55174552271a4f1aaf36b72f50381e892171636b3fb5447fe00e995e7a37b910160405180910390a1606580546001600160a01b0319166001600160a01b0392909216919091179055565b60606068805480602002602001604051908101604052809291908181526020018280548015610a1157602002820191906000526020600020905b81546001600160a01b031681526001909101906020018083116109f3575b5050505050905090565b6065546001600160a01b03163314610a6d5760405162461bcd60e51b81526020600482015260156024820152743737ba103a3432903832b73234b7339037bbb732b960591b6044820152606401610386565b6000610a816033546001600160a01b031690565b6065549091506001600160a01b0316610a9981610f55565b606580546001600160a01b0319169055604080516001600160a01b0384168152600060208201527f70aea8d848e8a90fb7661b227dc522eb6395c3dac71b63cb59edd5c9899b2364910160405180910390a1606554604080516001600160a01b03808516825290921660208301527fb3d55174552271a4f1aaf36b72f50381e892171636b3fb5447fe00e995e7a37b910161065a565b600080826001600160a01b0316636f307dc36040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b70573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b9491906113f8565b9050806001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610bd4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bf89190611444565b610c069060ff16600a61154b565b610c0f82610cc9565b610c2190670de0b6b3a7640000611557565b610c2b9190611576565b9392505050565b600054610100900460ff16610c595760405162461bcd60e51b815260040161038690611598565b610c61610fa7565b610c6a81610f55565b50565b6033546001600160a01b03163314610cc75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610386565b565b6001600160a01b0380821660009081526067602052604081205490911680610d335760405162461bcd60e51b815260206004820152601b60248201527f4c5020746f6b656e206973206e6f7420726567697374657265642e00000000006044820152606401610386565b6001600160a01b038316600090815260666020908152604080832080548251818502810185019093528083529192909190830182828015610d9d57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610d7f575b5050835193945060001993925060009150505b81811015610e68576000848281518110610dcc57610dcc6113b1565b60209081029190910101516040516315d5220f60e31b81526001600160a01b0382166004820152909150600090339063aea9107890602401602060405180830381865afa158015610e21573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e4591906115e3565b905084811015610e53578094505b50508080610e60906113dd565b915050610db0565b50600019821415610ecc5760405162461bcd60e51b815260206004820152602860248201527f4e6f206d696e696d756d20756e6465726c79696e6720746f6b656e207072696360448201526732903337bab7321760c11b6064820152608401610386565b670de0b6b3a7640000846001600160a01b031663bb7b8b806040518163ffffffff1660e01b8152600401602060405180830381865afa158015610f13573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f3791906115e3565b610f419084611557565b610f4b9190611576565b9695505050505050565b603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600054610100900460ff16610fce5760405162461bcd60e51b815260040161038690611598565b610cc7600054610100900460ff16610ff85760405162461bcd60e51b815260040161038690611598565b610cc733610f55565b828054828255906000526020600020908101928215611056579160200282015b8281111561105657825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190611021565b50611062929150611066565b5090565b5b808211156110625760008155600101611067565b6001600160a01b0381168114610c6a57600080fd5b600080604083850312156110a357600080fd5b82356110ae8161107b565b946020939093013593505050565b6000602082840312156110ce57600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611114576111146110d5565b604052919050565b600067ffffffffffffffff821115611136576111366110d5565b5060051b60200190565b600082601f83011261115157600080fd5b813560206111666111618361111c565b6110eb565b82815260059290921b8401810191818101908684111561118557600080fd5b8286015b848110156111a957803561119c8161107b565b8352918301918301611189565b509695505050505050565b6000806000606084860312156111c957600080fd5b833567ffffffffffffffff808211156111e157600080fd5b6111ed87838801611140565b945060209150818601358181111561120457600080fd5b61121088828901611140565b94505060408601358181111561122557600080fd5b8601601f8101881361123657600080fd5b80356112446111618261111c565b81815260059190911b8201840190848101908a83111561126357600080fd5b8584015b8381101561129b5780358681111561127f5760008081fd5b61128d8d8983890101611140565b845250918601918601611267565b508096505050505050509250925092565b6000602082840312156112be57600080fd5b8135610c2b8161107b565b6020808252825182820181905260009190848201906040850190845b8181101561130a5783516001600160a01b0316835292840192918401916001016112e5565b50909695505050505050565b60008060006060848603121561132b57600080fd5b83356113368161107b565b925060208401356113468161107b565b9150604084013567ffffffffffffffff81111561136257600080fd5b61136e86828701611140565b9150509250925092565b6000806040838503121561138b57600080fd5b82356113968161107b565b915060208301356113a68161107b565b809150509250929050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156113f1576113f16113c7565b5060010190565b60006020828403121561140a57600080fd5b8151610c2b8161107b565b600081600f0b6f7fffffffffffffffffffffffffffffff81141561143b5761143b6113c7565b60010192915050565b60006020828403121561145657600080fd5b815160ff81168114610c2b57600080fd5b600181815b808511156114a2578160001904821115611488576114886113c7565b8085161561149557918102915b93841c939080029061146c565b509250929050565b6000826114b957506001610942565b816114c657506000610942565b81600181146114dc57600281146114e657611502565b6001915050610942565b60ff8411156114f7576114f76113c7565b50506001821b610942565b5060208310610133831016604e8410600b8410161715611525575081810a610942565b61152f8383611467565b8060001904821115611543576115436113c7565b029392505050565b6000610c2b83836114aa565b6000816000190483118215151615611571576115716113c7565b500290565b60008261159357634e487b7160e01b600052601260045260246000fd5b500490565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000602082840312156115f557600080fd5b505191905056fea164736f6c634300080a000a";

type CurveLpTokenPriceOracleNoRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveLpTokenPriceOracleNoRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveLpTokenPriceOracleNoRegistry__factory extends ContractFactory {
  constructor(...args: CurveLpTokenPriceOracleNoRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<CurveLpTokenPriceOracleNoRegistry> {
    return super.deploy(
      overrides || {}
    ) as Promise<CurveLpTokenPriceOracleNoRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CurveLpTokenPriceOracleNoRegistry {
    return super.attach(address) as CurveLpTokenPriceOracleNoRegistry;
  }
  override connect(signer: Signer): CurveLpTokenPriceOracleNoRegistry__factory {
    return super.connect(signer) as CurveLpTokenPriceOracleNoRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveLpTokenPriceOracleNoRegistryInterface {
    return new utils.Interface(
      _abi
    ) as CurveLpTokenPriceOracleNoRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveLpTokenPriceOracleNoRegistry {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CurveLpTokenPriceOracleNoRegistry;
  }
}
