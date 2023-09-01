import { Contract, ContractInterface } from "ethers";

import { IonicBaseConstructor } from "..";
import AuthoritiesRegistryABI from "../../abis/AuthoritiesRegistry";
import CompoundMarketERC4626ABI from "../../abis/CompoundMarketERC4626";
import FlywheelStaticRewardsABI from "../../abis/FlywheelStaticRewards";
import ICErc20ABI from "../../abis/ICErc20";
import ICErc20PluginRewardsABI from "../../abis/ICErc20PluginRewards";
import ILeveredPositionFactoryABI from "../../abis/ILeveredPositionFactory";
import ILiquidatorsRegistryABI from "../../abis/ILiquidatorsRegistry";
import IonicComptrollerABI from "../../abis/IonicComptroller";
import IonicFlywheelABI from "../../abis/IonicFlywheel";
import IonicFlywheelLensRouterABI from "../../abis/IonicFlywheelLensRouter";
import JumpRateModelABI from "../../abis/JumpRateModel";
import LeveredPositionABI from "../../abis/LeveredPosition";
import LeveredPositionsLensABI from "../../abis/LeveredPositionsLens";
import MasterPriceOracleABI from "../../abis/MasterPriceOracle";
import OptimizedAPRVaultFirstExtensionABI from "../../abis/OptimizedAPRVaultFirstExtension";
import OptimizedAPRVaultSecondExtensionABI from "../../abis/OptimizedAPRVaultSecondExtension";
import OptimizedVaultsRegistryABI from "../../abis/OptimizedVaultsRegistry";
import PoolLensABI from "../../abis/PoolLens";
import PoolLensSecondaryABI from "../../abis/PoolLensSecondary";
import PoolRolesAuthorityABI from "../../abis/PoolRolesAuthority";
import UnitrollerABI from "../../abis/Unitroller";
import { AuthoritiesRegistry } from "../../typechain/AuthoritiesRegistry";
import { CompoundMarketERC4626 } from "../../typechain/CompoundMarketERC4626";
import { FlywheelStaticRewards } from "../../typechain/FlywheelStaticRewards";
import { ICErc20 } from "../../typechain/ICErc20";
import { ICErc20PluginRewards } from "../../typechain/ICErc20PluginRewards";
import { ILeveredPositionFactory } from "../../typechain/ILeveredPositionFactory";
import { ILiquidatorsRegistry } from "../../typechain/ILiquidatorsRegistry";
import { IonicComptroller } from "../../typechain/IonicComptroller";
import { IonicFlywheel } from "../../typechain/IonicFlywheel";
import { IonicFlywheelLensRouter } from "../../typechain/IonicFlywheelLensRouter";
import { JumpRateModel } from "../../typechain/JumpRateModel";
import { LeveredPosition } from "../../typechain/LeveredPosition";
import { LeveredPositionsLens } from "../../typechain/LeveredPositionsLens";
import { MasterPriceOracle } from "../../typechain/MasterPriceOracle";
import { OptimizedAPRVaultFirstExtension } from "../../typechain/OptimizedAPRVaultFirstExtension";
import { OptimizedAPRVaultSecondExtension } from "../../typechain/OptimizedAPRVaultSecondExtension";
import { OptimizedVaultsRegistry } from "../../typechain/OptimizedVaultsRegistry";
import { PoolLens } from "../../typechain/PoolLens";
import { PoolLensSecondary } from "../../typechain/PoolLensSecondary";
import { PoolRolesAuthority } from "../../typechain/PoolRolesAuthority";
import { Unitroller } from "../../typechain/Unitroller";
import { SignerOrProvider } from "../IonicSdk";

type OptimizedAPRVaultWithExtensions = OptimizedAPRVaultFirstExtension & OptimizedAPRVaultSecondExtension;

export function withCreateContracts<TBase extends IonicBaseConstructor>(Base: TBase) {
  return class CreateContracts extends Base {
    createContractInstance<T extends Contract>(abi: ContractInterface) {
      return (address: string, signerOrProvider: SignerOrProvider = this.signer) =>
        new Contract(address, abi, signerOrProvider) as T;
    }

    createUnitroller = this.createContractInstance<Unitroller>(UnitrollerABI);
    createIonicFlywheel = this.createContractInstance<IonicFlywheel>(IonicFlywheelABI);
    createFlywheelStaticRewards = this.createContractInstance<FlywheelStaticRewards>(FlywheelStaticRewardsABI);
    createJumpRateModel = this.createContractInstance<JumpRateModel>(JumpRateModelABI);

    createComptroller(comptrollerAddress: string, signerOrProvider: SignerOrProvider = this.provider) {
      if (this.chainDeployment.ComptrollerFirstExtension) {
        return new Contract(comptrollerAddress, [...IonicComptrollerABI], signerOrProvider) as IonicComptroller;
      }

      return new Contract(comptrollerAddress, IonicComptrollerABI, signerOrProvider) as IonicComptroller;
    }

    createICErc20(address: string, signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(address, ICErc20ABI, signerOrProvider) as ICErc20;
    }

    createICErc20PluginRewards(cTokenAddress: string, signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(cTokenAddress, ICErc20PluginRewardsABI, signerOrProvider) as ICErc20PluginRewards;
    }

    createMasterPriceOracle(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        this.chainDeployment.MasterPriceOracle.address,
        MasterPriceOracleABI,
        signerOrProvider
      ) as MasterPriceOracle;
    }

    createCompoundMarketERC4626(address: string, signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(address, CompoundMarketERC4626ABI, signerOrProvider) as CompoundMarketERC4626;
    }

    createOptimizedAPRVault(address: string, signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        address,
        [...OptimizedAPRVaultFirstExtensionABI, ...OptimizedAPRVaultSecondExtensionABI],
        signerOrProvider
      ) as OptimizedAPRVaultWithExtensions;
    }

    createOptimizedVaultsRegistry(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        this.chainDeployment.OptimizedVaultsRegistry.address,
        OptimizedVaultsRegistryABI,
        signerOrProvider
      ) as OptimizedVaultsRegistry;
    }

    createIonicFlywheelLensRouter(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        this.chainDeployment.IonicFlywheelLensRouter.address,
        IonicFlywheelLensRouterABI,
        signerOrProvider
      ) as IonicFlywheelLensRouter;
    }

    createLeveredPositionFactory(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        this.chainDeployment.LeveredPositionFactory.address,
        ILeveredPositionFactoryABI,
        signerOrProvider
      ) as ILeveredPositionFactory;
    }

    createLeveredPosition(address: string, signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(address, LeveredPositionABI, signerOrProvider) as LeveredPosition;
    }

    createLeveredPositionLens(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        this.chainDeployment.LeveredPositionsLens.address,
        LeveredPositionsLensABI,
        signerOrProvider
      ) as LeveredPositionsLens;
    }

    createPoolLens(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(this.chainDeployment.PoolLens.address, PoolLensABI, signerOrProvider) as PoolLens;
    }

    createPoolLensSecondary(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        this.chainDeployment.PoolLensSecondary.address,
        PoolLensSecondaryABI,
        signerOrProvider
      ) as PoolLensSecondary;
    }

    createILiquidatorsRegistry(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        this.chainDeployment.LiquidatorsRegistry.address,
        ILiquidatorsRegistryABI,
        signerOrProvider
      ) as ILiquidatorsRegistry;
    }

    createAuthoritiesRegistry(signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(
        this.chainDeployment.AuthoritiesRegistry.address,
        AuthoritiesRegistryABI,
        signerOrProvider
      ) as AuthoritiesRegistry;
    }

    createPoolRolesAuthority(poolAuthAddress: string, signerOrProvider: SignerOrProvider = this.provider) {
      return new Contract(poolAuthAddress, PoolRolesAuthorityABI, signerOrProvider) as PoolRolesAuthority;
    }
  };
}

export type CreateContractsModule = ReturnType<typeof withCreateContracts<IonicBaseConstructor>>;
