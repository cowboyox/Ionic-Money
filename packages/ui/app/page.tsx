/* eslint-disable @next/next/no-img-element */
'use client';

import { useMemo, useState } from 'react';
import PoolToggle from './_components/markets/PoolToggle';
import PoolRows from './_components/markets/PoolRows';
import Popup from './_components/popup/page';
import { useSearchParams } from 'next/navigation';
import { useFusePoolData } from '@ui/hooks/useFusePoolData';
import { useChainId } from 'wagmi';
import { MarketData } from '@ui/types/TokensDataMap';
import { useAssets } from '@ui/hooks/useAssets';
import { useBorrowAPYs } from '@ui/hooks/useBorrowAPYs';
import { useTotalSupplyAPYs } from '@ui/hooks/useTotalSupplyAPYs';
import ResultHandler from './_components/ResultHandler';
import { getBlockTimePerMinuteByChainId } from '@ui/utils/networkData';
import { useMultiMidas } from '@ui/context/MultiIonicContext';
import { BigNumber } from 'ethers';
import { formatUnits } from 'ethers/lib/utils.js';

export default function Market() {
  const { currentSdk } = useMultiMidas();
  const searchParams = useSearchParams();
  const popmode = searchParams.get('popmode');
  const chainId = useChainId();
  const { data: poolData, isLoading: isLoadingPoolData } = useFusePoolData(
    '0',
    chainId
  );
  const assets = useMemo<MarketData[] | undefined>(
    () => poolData?.assets,
    [poolData]
  );
  const dataIsLoading = useMemo<boolean>(
    () => isLoadingPoolData[isLoadingPoolData]
  );
  const [selectedSymbol, setSelectedSymbol] = useState<string>();
  const selectedMarketData = useMemo<MarketData | undefined>(
    () =>
      poolData?.assets.find(
        (_asset) => _asset.underlyingSymbol === selectedSymbol
      ),
    [selectedSymbol]
  );

  return (
    <main className={`pt-14`}>
      <div className="w-full  flex flex-col items-center justify-start min-h-screen transition-all duration-200 ease-linear">
        <div
          className={`w-full flex flex-col items-start py-4 justify-start bg-grayone h-min px-[3%] rounded-xl`}
        >
          <div className={`flex items-center justify-center gap-2 py-3 pt-2 `}>
            <img
              src="/img/logo/MODE.png"
              alt="modlogo"
              className={`w-8`}
            />
            <h1 className={`font-semibold`}>Mode Market</h1>
            <img
              src="/img/assets/downarr.png"
              alt="downarr"
              className={`w-4`}
            />
          </div>
          <ResultHandler isLoading={isLoadingPoolData}>
            <div className={`w-full flex items-center gap-4`}>
              <div
                className={`flex flex-col items-start justify-center  gap-y-1`}
              >
                <p className={`text-white/60 text-sm`}>Total Market Size</p>
                <p className={`font-semibold`}>
                  $
                  {poolData
                    ? (
                        poolData?.totalLiquidityFiat +
                        poolData?.totalBorrowedFiat
                      ).toFixed(2)
                    : '0'}
                </p>
                {/* this neeeds to be changed */}
              </div>
              <div
                className={`flex flex-col items-start justify-center gap-y-1`}
              >
                <p className={`text-white/60 text-sm`}>Total Available</p>
                <p className={`font-semibold`}>
                  ${poolData?.totalLiquidityFiat.toFixed(2) ?? '0'}
                </p>
                {/* this neeeds to be changed */}
              </div>
              <div
                className={`flex flex-col items-start justify-center gap-y-1`}
              >
                <p className={`text-white/60 text-sm`}>Total Borrows</p>
                <p className={`font-semibold`}>
                  ${poolData?.totalBorrowedFiat.toFixed(2) ?? '0'}
                </p>
                {/* this neeeds to be changed */}
              </div>
            </div>
          </ResultHandler>
        </div>
        <div
          className={`bg-grayone min-h-[60vh] pb-20 w-full px-[3%] mt-3 rounded-xl`}
        >
          <div className={` w-full flex items-center justify-between py-3 `}>
            <h1 className={`font-semibold`}>Mode Lending & Borrowing</h1>
            {/* <div
              className={` min-w-[30%] flex gap-x-2  items-center justify-center `}
            >
              <img
                src="/img/assets/search.png"
                alt="searchico"
                className={`h-4`}
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Search by asset name, symbol or address"
                className={
                  ' w-full focus:outline-none placeholder:text-xs  bg-grayone border-r px-2 border-white/20'
                }
              />
              <div
                className={`flex w-[30%] flex-nowrap items-center justify-center text-xs px-2`}
              >
                <p className="w-full truncate flex-nowrap">Sort By</p>
                <img
                  src="/img/assets/downarr.png"
                  alt="downarr"
                  className={`w-4`}
                />
              </div>
            </div> */}
          </div>
          <PoolToggle />
          <div
            className={`w-full gap-x-1 grid  grid-cols-18 items-start py-4 text-[10px] text-white/40 font-semibold text-center px-2 `}
          >
            <h3 className={` col-span-2  `}>ASSETS</h3>
            <h3 className={` col-span-2`}>SUPPLY BALANCE</h3>
            <h3 className={` col-span-2`}>TOTAL SUPPLIED</h3>
            <h3 className={` col-span-2`}>BORROW BALANCE</h3>
            <h3 className={` col-span-2`}>TOTAL BORROWING</h3>
            <h3 className={` col-span-2`}>SUPPLY APR</h3>
            <h3 className={` col-span-2`}>BORROW APR</h3>
            <h3 className={` col-span-4`}>SUPPLY/BORROW</h3>
          </div>
          <ResultHandler isLoading={dataIsLoading}>
            <>
              {assets &&
                assets.map((val: MarketData, idx: number) => (
                  <PoolRows
                    key={idx}
                    asset={val.underlyingSymbol}
                    supplyBalance={`${
                      val.supplyBalanceNative
                        ? parseFloat(
                            formatUnits(
                              val.supplyBalance,
                              val.underlyingDecimals
                            )
                          ).toFixed(6)
                        : '0'
                    } / $${val.supplyBalanceFiat.toFixed(2)}`}
                    totalSupplied={`${
                      val.liquidityNative
                        ? parseFloat(
                            formatUnits(val.liquidity, val.underlyingDecimals)
                          ).toFixed(6)
                        : '0'
                    } / $${val.liquidityFiat.toFixed(2)}`}
                    borrowBalance={`${
                      val.borrowBalanceNative
                        ? parseFloat(
                            formatUnits(
                              val.borrowBalance,
                              val.underlyingDecimals
                            )
                          ).toFixed(6)
                        : '0'
                    } / $${val.borrowBalanceFiat.toFixed(2)}`}
                    totalBorrowing={`${
                      val.totalBorrowNative
                        ? parseFloat(
                            formatUnits(val.totalBorrow, val.underlyingDecimals)
                          ).toFixed(6)
                        : '0'
                    } / $${val.totalBorrowFiat.toFixed(2)}`}
                    supplyAPR={`${currentSdk
                      ?.ratePerBlockToAPY(
                        val?.supplyRatePerBlock ?? BigNumber.from(0),
                        getBlockTimePerMinuteByChainId(chainId)
                      )
                      .toFixed(2)}%`}
                    borrowAPR={`${currentSdk
                      ?.ratePerBlockToAPY(
                        val?.borrowRatePerBlock ?? BigNumber.from(0),
                        getBlockTimePerMinuteByChainId(chainId)
                      )
                      .toFixed(2)}%`}
                    logo={`/img/symbols/32/color/${val.underlyingSymbol.toLowerCase()}.png`}
                    setSelectedSymbol={setSelectedSymbol}
                  />
                ))}
            </>
          </ResultHandler>
        </div>
      </div>
      {popmode && selectedMarketData && poolData && (
        <Popup
          mode={popmode}
          selectedMarketData={selectedMarketData}
          comptrollerAddress={poolData.comptroller}
        />
      )}
    </main>
  );
}

{
  /* <div className={``}></div>  <p className={``}></p>
          <p className={``}></p>  colleteralT , borrowingT , lendingT , cAPR , lAPR , bAPR} */
}
