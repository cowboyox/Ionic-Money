/* eslint-disable @next/next/no-img-element */
'use client';

import { BigNumber } from 'ethers';
import { formatUnits } from 'ethers/lib/utils';
import millify from 'millify';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useChainId } from 'wagmi';

import SupplyRows from '../_components/dashboards/SupplyRows';
import type { PopupMode } from '../_components/popup/page';
import Popup from '../_components/popup/page';
import ResultHandler from '../_components/ResultHandler';

import { useMultiIonic } from '@ui/context/MultiIonicContext';
import { useHealthFactor } from '@ui/hooks/pools/useHealthFactor';
import { useFusePoolData } from '@ui/hooks/useFusePoolData';
import {
  usePointsForBorrow,
  usePointsForSupply
} from '@ui/hooks/usePointsQueries';
import { useTotalSupplyAPYs } from '@ui/hooks/useTotalSupplyAPYs';
import type { MarketData } from '@ui/types/TokensDataMap';
import { getBlockTimePerMinuteByChainId } from '@ui/utils/networkData';

export default function Dashboard() {
  const { currentSdk } = useMultiIonic();
  const chainId = useChainId();
  const [selectedSymbol, setSelectedSymbol] = useState<string>();
  const [popupMode, setPopupMode] = useState<PopupMode>();
  const { data: marketData, isLoading: isLoadingMarketData } = useFusePoolData(
    '0',
    chainId
  );
  const { data: assetsSupplyAprData, isLoading: isLoadingAssetsSupplyAprData } =
    useTotalSupplyAPYs(marketData?.assets ?? [], chainId);
  const {
    avgCollateralApr,
    borrowApr,
    netApr,
    netAssetValue,
    supplyApr,
    totalBorrow
  } = useMemo(() => {
    if (marketData && assetsSupplyAprData && currentSdk) {
      const blocksPerMinute = getBlockTimePerMinuteByChainId(chainId);
      let totalCollateral = 0;
      let totalBorrow = 0;
      let avgCollateralApr = 0;
      let borrowApr = 0;
      let supplyApr = 0;
      let memberships = 0;

      marketData.assets.forEach((asset) => {
        if (asset.membership) {
          totalCollateral += asset.supplyBalanceFiat;
          avgCollateralApr += assetsSupplyAprData[asset.cToken].apy;

          memberships++;
        }

        totalBorrow += asset.borrowBalanceFiat;
        borrowApr += currentSdk.ratePerBlockToAPY(
          asset.borrowRatePerBlock,
          blocksPerMinute
        );
        supplyApr += currentSdk.ratePerBlockToAPY(
          asset.supplyRatePerBlock,
          blocksPerMinute
        );
      });

      return {
        avgCollateralApr: `${(avgCollateralApr / memberships).toFixed(2)}%`,
        borrowApr: `${(borrowApr / marketData.assets.length).toFixed(2)}%`,
        netApr: `${(supplyApr - borrowApr).toFixed(2)}%`,
        netAssetValue: `$${millify(
          (marketData?.totalSupplyBalanceFiat ?? 0) - totalBorrow
        )}`,
        supplyApr: `${(supplyApr / marketData.assets.length).toFixed(2)}%`,
        totalBorrow: `$${millify(totalBorrow)}`,
        totalCollateral: `$${millify(totalCollateral)}`
      };
    }

    return {};
  }, [assetsSupplyAprData, currentSdk, chainId, marketData]);
  const selectedMarketData = useMemo<MarketData | undefined>(
    () =>
      marketData?.assets.find(
        (_asset) => _asset.underlyingSymbol === selectedSymbol
      ),
    [marketData, selectedSymbol]
  );
  const { data: healthData, isLoading: isLoadingHealthData } = useHealthFactor(
    '0',
    chainId
  );
  const { data: supplyPoints, isLoading: isLoadingSupplyPoints } =
    usePointsForSupply();
  const { data: borrowPoints, isLoading: isLoadingBorrowPoints } =
    usePointsForBorrow();
  const totalPoints = useMemo<number>(() => {
    if (supplyPoints && borrowPoints) {
      return (
        supplyPoints.rows.reduce(
          (accumulator, current) =>
            accumulator +
            current.reduce(
              (innerAccumulator, innerCurrent) =>
                innerAccumulator + innerCurrent,
              0
            ),
          0
        ) +
        borrowPoints.rows.reduce(
          (accumulator, current) =>
            accumulator +
            current.reduce(
              (innerAccumulator, innerCurrent) =>
                innerAccumulator + innerCurrent,
              0
            ),
          0
        )
      );
    }

    return 0;
  }, [borrowPoints, supplyPoints]);

  return (
    <>
      <div className="w-full flex flex-col items-start justify-start transition-all duration-200 ease-linear">
        <div
          className={`lg:grid grid-cols-8 gap-x-3 my-2 w-full  font-semibold text-base `}
        >
          <div
            className={`w-full mb-2 lg:mb-0 bg-grayone rounded-xl py-3 px-6   col-span-3   flex flex-col items-center justify-start `}
          >
            <div className={`w-full flex justify-between  pb-6 items-center`}>
              <span>NET ASSET VALUE</span>
              <ResultHandler
                height="24"
                isLoading={!netAssetValue}
                width="24"
              >
                <span> {netAssetValue}</span>
              </ResultHandler>
            </div>
            <div className={`flex items-center justify-between w-full gap-x-3`}>
              <div
                className={`flex flex-col items-start justify-center  gap-y-1`}
              >
                <p className={`text-white/60 text-xs`}>Total Supply</p>
                <ResultHandler
                  height="24"
                  isLoading={isLoadingMarketData}
                  width="24"
                >
                  <p className={`font-semibold`}>
                    ${millify(marketData?.totalSupplyBalanceFiat ?? 0)}
                  </p>
                </ResultHandler>
                {/* this neeeds to be changed */}
              </div>
              <div
                className={`flex flex-col items-start justify-center  gap-y-1`}
              >
                <p className={`text-white/60 text-xs`}>Total Borrow</p>
                <ResultHandler
                  height="24"
                  isLoading={!totalBorrow}
                  width="24"
                >
                  <p className={`font-semibold`}>{totalBorrow}</p>
                </ResultHandler>
                {/* this neeeds to be changed */}
              </div>
              <div
                className={`flex flex-col items-start justify-center  gap-y-1`}
              >
                <p className={`text-white/60 text-xs`}>Position Health</p>
                <ResultHandler
                  height="24"
                  isLoading={isLoadingHealthData}
                  width="24"
                >
                  <p className={`font-semibold`}>
                    {healthData ?? 'Unavailable'}
                  </p>
                </ResultHandler>
                {/* this neeeds to be changed */}
              </div>
            </div>
          </div>
          <div
            className={`w-full mb-2 lg:mb-0 bg-grayone rounded-xl py-3 px-6 col-span-3 flex flex-col items-center justify-start `}
          >
            <div className={`w-full flex justify-between  pb-6 items-center`}>
              <span>NET APR</span>
              <ResultHandler
                height="24"
                isLoading={!netApr}
                width="24"
              >
                <span>{netApr}</span>
              </ResultHandler>
            </div>
            <div className={`flex items-center justify-between w-full gap-x-3`}>
              <div
                className={`flex flex-col items-start justify-center  gap-y-1`}
              >
                <p className={`text-white/60 text-xs`}>Avg. Collateral APR</p>
                <ResultHandler
                  height="24"
                  isLoading={!avgCollateralApr}
                  width="24"
                >
                  <p className={`font-semibold`}>{avgCollateralApr}</p>
                </ResultHandler>
                {/* this neeeds to be changed */}
              </div>
              <div
                className={`flex flex-col items-start justify-center  gap-y-1`}
              >
                <p className={`text-white/60 text-xs`}>Avg. Borrowing APR</p>
                <ResultHandler
                  height="24"
                  isLoading={!borrowApr}
                  width="24"
                >
                  <p className={`font-semibold`}>{borrowApr}</p>
                </ResultHandler>
                {/* this neeeds to be changed */}
              </div>
              <div
                className={`flex flex-col items-start justify-center  gap-y-1`}
              >
                <p className={`text-white/60 text-xs`}>Avg. Supply APR</p>
                <ResultHandler
                  height="24"
                  isLoading={!supplyApr}
                  width="24"
                >
                  <p className={`font-semibold`}>{supplyApr}</p>
                </ResultHandler>
                {/* this neeeds to be changed */}
              </div>
            </div>
          </div>
          <div
            className={`w-full mb-2 lg:mb-0 bg-grayone rounded-xl py-3 px-6 col-span-2 flex flex-col items-center justify-start `}
          >
            <div className={`w-full flex justify-between items-center mb-2`}>
              <span>TOTAL POINTS</span>
              <ResultHandler
                height="24"
                isLoading={isLoadingSupplyPoints || isLoadingBorrowPoints}
                width="24"
              >
                <span>{totalPoints}</span>
              </ResultHandler>
            </div>
            <Link
              className={`w-full rounded-md bg-accent text-black py-2 px-6 text-center text-xs mt-auto  `}
              href={`/points`}
            >
              VIEW POINTS
            </Link>
          </div>
        </div>
        <div className={`bg-grayone  w-full px-6 py-3 mt-3 rounded-xl`}>
          <div className={` w-full flex items-center justify-between py-3 `}>
            <h1 className={`font-semibold`}>Your Collateral (supply)</h1>
          </div>
          <div
            className={`w-full gap-x-1 hidden lg:grid  grid-cols-8  py-4 text-[10px] text-white/40 font-semibold text-center  `}
          >
            <h3 className={` `}>SUPPLY ASSETS</h3>
            <h3 className={` `}>AMOUNT</h3>
            <h3 className={` `}>COLLATERAL APR</h3>
            <h3 className={` `}>SUPPLY APR</h3>
            <h3 className={` `}>UTILISATION</h3>
            <h3 className={` `}>REWARDS</h3>
          </div>
          <ResultHandler
            center
            isLoading={isLoadingMarketData || isLoadingAssetsSupplyAprData}
          >
            <>
              {marketData?.assets.map((asset) => (
                <SupplyRows
                  amount={`${
                    asset.supplyBalanceNative
                      ? parseFloat(
                          formatUnits(
                            asset.supplyBalance,
                            asset.underlyingDecimals
                          )
                        ).toLocaleString('en-US', {
                          maximumFractionDigits: 2
                        })
                      : '0'
                  } ${
                    asset.underlyingSymbol
                  } / $${asset.supplyBalanceFiat.toLocaleString('en-US', {
                    maximumFractionDigits: 2
                  })}`}
                  asset={asset.underlyingSymbol}
                  collateralApr={`${
                    assetsSupplyAprData
                      ? assetsSupplyAprData[asset.cToken]?.apy.toFixed(2)
                      : ''
                  }%`}
                  key={`supply-row-${asset.underlyingSymbol}`}
                  logo={`/img/symbols/32/color/${asset.underlyingSymbol.toLowerCase()}.png`}
                  membership={asset.membership}
                  rewards={'0'}
                  setPopupMode={setPopupMode}
                  setSelectedSymbol={setSelectedSymbol}
                  supplyApr={`${
                    currentSdk
                      ?.ratePerBlockToAPY(
                        asset?.supplyRatePerBlock ?? BigNumber.from(0),
                        getBlockTimePerMinuteByChainId(chainId)
                      )
                      .toFixed(2) ?? '0.00'
                  }%`}
                  utilization={'0'}
                />
              ))}
            </>
          </ResultHandler>
        </div>
        {/* <div className={`bg-grayone  w-full px-6 py-3 mt-3 rounded-xl`}>
          <div className={` w-full flex items-center justify-between py-3 `}>
            <h1 className={`font-semibold`}>Your Borrows (Loans)</h1>
          </div>
          <div
            className={`w-full gap-x-1 grid  grid-cols-8  py-4 text-[10px] text-white/40 font-semibold text-center  `}
          >
            <h3 className={` `}>SUPPLY ASSETS</h3>
            <h3 className={` `}>AMOUNT</h3>
            <h3 className={` `}>COLLATERAL APR</h3>
            <h3 className={` `}>SUPPLY APR</h3>
            <h3 className={` `}>UTILISATION</h3>
            <h3 className={` `}>REWARDS</h3>
          </div>
          {supplyrow &&
            supplyrow.map((val, idx: number) => (
              <SupplyRows
                amount={val.amount}
                asset={val.asset}
                cAPR={val.cAPR}
                key={idx}
                mode={'BORROW'}
                rewards={val.rewards}
                sAPR={val.sAPR}
                utilisation={val.utilisation}
              />
            ))}
        </div> */}
      </div>
      {popupMode && selectedMarketData && marketData && (
        <Popup
          closePopup={() => setPopupMode(undefined)}
          comptrollerAddress={marketData.comptroller}
          mode={popupMode}
          selectedMarketData={selectedMarketData}
        />
      )}
    </>
  );
}
