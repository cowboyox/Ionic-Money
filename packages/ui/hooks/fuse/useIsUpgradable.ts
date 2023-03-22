import { useQuery } from '@tanstack/react-query';

import { useSdk } from '@ui/hooks/fuse/useSdk';

export const useIsUpgradeable = (comptrollerAddress: string, poolChainId: number) => {
  const sdk = useSdk(poolChainId);

  const { data } = useQuery(
    ['useIsUpgradeable', comptrollerAddress, sdk?.chainId],
    async () => {
      if (sdk) {
        const comptroller = sdk.createComptroller(comptrollerAddress);
        const isUpgradeable: boolean = await comptroller.callStatic.adminHasRights();

        return isUpgradeable;
      } else {
        return null;
      }
    },
    { cacheTime: Infinity, enabled: !!comptrollerAddress && !!sdk, staleTime: Infinity }
  );

  return data;
};
