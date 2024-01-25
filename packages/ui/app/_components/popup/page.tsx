'use client';
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import SliderComponent from './Slider';
import Approved from './Approved';
import Amount from './Amount';
import Tab from './Tab';
import { useRouter } from 'next/navigation';
import { useAccount, useBalance, useChainId } from 'wagmi';
import { useMultiMidas } from '@ui/context/MultiIonicContext';
import { MarketData } from '@ui/types/TokensDataMap';
import { useBorrowLimitMarket } from '@ui/hooks/useBorrowLimitMarket';
import { useSdk } from '@ui/hooks/fuse/useSdk';
import { useRewardsInfoForMarket } from '@ui/hooks/rewards/useRewardsInfoForMarket';
import { useRewardsForMarket } from '@ui/hooks/useRewards';
import { useTotalSupplyAPYs } from '@ui/hooks/useTotalSupplyAPYs';
import { useAllFundedInfo } from '@ui/hooks/useAllFundedInfo';
import { useBorrowAPYs } from '@ui/hooks/useBorrowAPYs';
import { useQueryClient } from '@tanstack/react-query';
import ResultHandler from '../ResultHandler';
import { BigNumber, constants } from 'ethers';
import { useMaxWithdrawAmount } from '@ui/hooks/useMaxWithdrawAmount';
import { useMaxBorrowAmount } from '@ui/hooks/useMaxBorrowAmount';
import { useBorrowLimitTotal } from '@ui/hooks/useBorrowLimitTotal';
import { useBorrowMinimum } from '@ui/hooks/useBorrowMinimum';

interface IPopup {
  mode?: string;
  specific?: string | null;
  selectedMarketData: MarketData;
  comptrollerAddress: string;
}
const Popup = ({
  mode = 'DEFAULT',
  specific = null,
  selectedMarketData,
  comptrollerAddress
}: IPopup) => {
  // console.log(mode);
  const { currentSdk, address, currentChain } = useMultiMidas();
  const chainId = useChainId();
  const { data: minBorrowAmount } = useBorrowMinimum(
    selectedMarketData,
    chainId
  );
  const { data: balanceData } = useBalance({
    address: (address as any) ?? `0x0`,
    token: selectedMarketData.underlyingToken as any
  });
  const { data: borrowLimitTotal } = useBorrowLimitTotal(
    [selectedMarketData],
    chainId
  );
  const { data: borrowLimit2 } = useBorrowLimitMarket(
    selectedMarketData,
    [selectedMarketData],
    chainId,
    comptrollerAddress
  );
  const { data: fundedInfo } = useAllFundedInfo();
  const { data: marketRewards } = useRewardsForMarket({
    asset: selectedMarketData,
    poolAddress: comptrollerAddress,
    chainId
  });
  const { data: assetsSupplyAprData } = useTotalSupplyAPYs(
    [selectedMarketData],
    chainId
  );
  const { data: assetsBorrowAprData } = useBorrowAPYs(
    [selectedMarketData],
    chainId
  );
  const collateralApr = useMemo<string>(() => {
    // Todo: add the market rewards to this calculation
    if (assetsSupplyAprData) {
      return `${assetsSupplyAprData[selectedMarketData.cToken].apy.toFixed(
        2
      )}%`;
    }

    return '0.00%';
  }, [assetsSupplyAprData]);
  const borrowApr = useMemo<string>(() => {
    if (assetsBorrowAprData) {
      return `${assetsBorrowAprData[selectedMarketData.cToken].toFixed(2)}%`;
    }

    return '0.00%';
  }, [assetsBorrowAprData]);
  const [active, setActive] = useState<string>('');
  const slide = useRef<HTMLDivElement>(null!);
  const router = useRouter();
  const [amount, setAmount] = useReducer(
    (currentValue: number, value: number): number => {
      const [_, decimals] = value.toString().split('.');
      const marketDataDecimals = parseInt(
        selectedMarketData.underlyingDecimals.toString()
      );
      const decimalsToUse = marketDataDecimals > 8 ? 8 : marketDataDecimals;

      return parseFloat(value.toFixed(decimalsToUse));
    },
    0
  );
  const amountAsBInt = useMemo<string>(
    () =>
      amount
        ? (
            amount *
            Math.pow(
              10,
              parseInt(selectedMarketData.underlyingDecimals.toString())
            )
          ).toString()
        : '0',
    [amount]
  );
  const [isExecutingAction, setIsExecutingAction] = useState<boolean>(false);
  const { data: maxWithdrawAmount, isLoading } = useMaxWithdrawAmount(
    selectedMarketData,
    chainId
  );
  const maxWidthdrawAmountAsFloat = useMemo<number>(
    () => (maxWithdrawAmount ? parseFloat(maxWithdrawAmount.toString()) : 0),
    [maxWithdrawAmount]
  );
  const { data: maxBorrowAmount } = useMaxBorrowAmount(
    selectedMarketData,
    comptrollerAddress,
    chainId
  );
  const currentBorrowAmountAsFloat = useMemo<number>(
    () => parseFloat(selectedMarketData.borrowBalance.toString()),
    [selectedMarketData]
  );
  const queryClient = useQueryClient();

  useEffect(() => {
    if (mode === 'DEFAULT' || 'SUPPLY') {
      if (specific) {
        setActive(specific);
        return;
      }
      setActive('COLLATERAL');
    }

    if (mode === 'BORROW') {
      if (specific) {
        setActive(specific);
        return;
      }
      setActive('BORROW');
    }
  }, [mode, specific]);

  useEffect(() => {
    setAmount(0);

    if (mode === 'DEFAULT') {
      if (active === 'COLLATERAL') {
        slide.current.style.transform = 'translateX(0%)';
      }
      if (active === 'WITHDRAW') {
        slide.current.style.transform = 'translateX(-100%)';
      }
      if (active === 'BORROW') {
        slide.current.style.transform = 'translateX(-200%)';
      }
      if (active === 'REPAY') {
        slide.current.style.transform = 'translateX(-300%)';
      }
    }
    if (mode === 'SUPPLY') {
      if (active === 'COLLATERAL') {
        slide.current.style.transform = 'translateX(0%)';
      }
      if (active === 'WITHDRAW') {
        slide.current.style.transform = 'translateX(-100%)';
      }
    }
    if (mode === 'BORROW') {
      if (active === 'BORROW') {
        slide.current.style.transform = 'translateX(0%)';
      }
      if (active === 'REPAY') {
        slide.current.style.transform = 'translateX(-100%)';
      }
    }
  }, [active, mode]);

  const handleSupplyUtilization = (utilizationPercentage: number) => {
    setAmount(
      parseFloat(
        (
          (utilizationPercentage / 100) *
          parseFloat(balanceData?.formatted ?? '0.0')
        ).toFixed(parseInt(selectedMarketData.underlyingDecimals.toString()))
      )
    );
  };

  const supplyAmount = async (collateral: boolean = false) => {
    if (!isExecutingAction && currentSdk && address && amount && amount > 0) {
      setIsExecutingAction(true);

      try {
        const token = currentSdk.getEIP20TokenInstance(
          selectedMarketData.underlyingToken,
          currentSdk.signer
        );
        const hasApprovedEnough = (
          await token.callStatic.allowance(address, selectedMarketData.cToken)
        ).gte(amountAsBInt);

        if (!hasApprovedEnough) {
          const tx = await currentSdk.approve(
            selectedMarketData.cToken,
            selectedMarketData.underlyingToken
          );

          await tx.wait();
        }

        if (collateral) {
          const tx = await currentSdk.enterMarkets(
            selectedMarketData.cToken,
            comptrollerAddress
          );

          await tx.wait();
        }

        const { tx } = await currentSdk.mint(
          selectedMarketData.cToken,
          amountAsBInt as any
        );

        await tx?.wait();

        await Promise.all([
          queryClient.refetchQueries({ queryKey: ['useFusePoolData'] }),
          queryClient.refetchQueries({ queryKey: ['useMaxSupplyAmount'] }),
          queryClient.refetchQueries({ queryKey: ['useMaxWithdrawAmount'] }),
          queryClient.refetchQueries({ queryKey: ['useMaxBorrowAmount'] }),
          queryClient.refetchQueries({ queryKey: ['useMaxRepayAmount'] }),
          queryClient.refetchQueries({
            queryKey: ['useSupplyCapsDataForPool']
          }),
          queryClient.refetchQueries({
            queryKey: ['useBorrowCapsDataForAsset']
          })
        ]);
      } catch (error) {
        console.error(error);
      }
    }

    setIsExecutingAction(false);
  };

  const withdrawAmount = async () => {
    if (
      !isExecutingAction &&
      currentSdk &&
      address &&
      amount &&
      amount > 0 &&
      amount <= selectedMarketData.supplyBalanceNative
    ) {
      setIsExecutingAction(true);

      try {
        if (selectedMarketData.supplyBalanceNative === amount) {
          const { tx } = await currentSdk.withdraw(
            selectedMarketData.cToken,
            constants.MaxUint256
          );

          await tx?.wait();
        } else {
          const { tx } = await currentSdk.withdraw(
            selectedMarketData.cToken,
            amountAsBInt as any
          );

          await tx?.wait();
        }
      } catch (error) {
        console.error(error);
      }
    }

    setIsExecutingAction(false);
  };

  const borrowAmount = async () => {
    if (
      !isExecutingAction &&
      currentSdk &&
      address &&
      amount &&
      amount > 0 &&
      maxBorrowAmount &&
      amount <= maxBorrowAmount.number
    ) {
      setIsExecutingAction(true);

      try {
        const { tx, errorCode } = await currentSdk.borrow(
          selectedMarketData.cToken,
          amountAsBInt as any
        );

        if (errorCode) {
          console.error(`Borrowing error: ${errorCode}`);
        }

        await tx?.wait();
        await queryClient.refetchQueries({ queryKey: ['useFusePoolData'] });
        await queryClient.refetchQueries({ queryKey: ['useMaxSupplyAmount'] });
        await queryClient.refetchQueries({
          queryKey: ['useMaxWithdrawAmount']
        });
        await queryClient.refetchQueries({ queryKey: ['useMaxBorrowAmount'] });
        await queryClient.refetchQueries({ queryKey: ['useMaxRepayAmount'] });
        await queryClient.refetchQueries({
          queryKey: ['useSupplyCapsDataForPool']
        });
        await queryClient.refetchQueries({
          queryKey: ['useBorrowCapsDataForAsset']
        });
      } catch (error) {
        console.error(error);
      }
    }

    setIsExecutingAction(false);
  };

  const repayAmount = async () => {
    if (
      !isExecutingAction &&
      currentSdk &&
      address &&
      amount &&
      amount > 0 &&
      currentBorrowAmountAsFloat
    ) {
      setIsExecutingAction(true);

      try {
        const token = currentSdk.getEIP20TokenInstance(
          selectedMarketData.underlyingToken,
          currentSdk.signer
        );
        const hasApprovedEnough = (
          await token.callStatic.allowance(address, selectedMarketData.cToken)
        ).gte(amountAsBInt);

        if (!hasApprovedEnough) {
          const tx = await currentSdk.approve(
            selectedMarketData.cToken,
            selectedMarketData.underlyingToken
          );

          await tx.wait();
        }

        const isRepayingMax =
          parseInt(selectedMarketData.borrowBalance.toString()) <=
          parseInt(amountAsBInt);
        const { tx, errorCode } = await currentSdk.repay(
          selectedMarketData.cToken,
          isRepayingMax,
          isRepayingMax
            ? selectedMarketData.borrowBalance
            : (amountAsBInt as any)
        );

        if (errorCode) {
          throw new Error('Error during repaying!');
        }

        await tx?.wait();
        await queryClient.refetchQueries({ queryKey: ['useFusePoolData'] });
        await queryClient.refetchQueries({ queryKey: ['useMaxSupplyAmount'] });
        await queryClient.refetchQueries({
          queryKey: ['useMaxWithdrawAmount']
        });
        await queryClient.refetchQueries({ queryKey: ['useMaxBorrowAmount'] });
        await queryClient.refetchQueries({ queryKey: ['useMaxRepayAmount'] });
        await queryClient.refetchQueries({
          queryKey: ['useSupplyCapsDataForPool']
        });
        await queryClient.refetchQueries({
          queryKey: ['useBorrowCapsDataForAsset']
        });
      } catch (error) {
        console.error(error);
      }
    }

    setIsExecutingAction(false);
  };

  // console.log(supplyUtilization);
  // console.log(amount);

  return (
    <div
      className={` z-40 fixed top-0 right-0 w-full min-h-screen  bg-black/25 flex items-center justify-center`}
    >
      <div
        className={`w-[40%] relative  bg-grayUnselect rounded-xl max-h-[65vh] overflow-x-hidden overflow-y-scroll scrollbar-hide`}
      >
        <img
          src="/img/assets/close.png"
          alt="close"
          className={` h-5 z-10 absolute right-4 top-3 cursor-pointer `}
          onClick={() => router.back()}
        />
        <div className={`flex w-20 mx-auto mt-4 mb-2 relative text-center`}>
          <img
            src={`/img/symbols/32/color/${selectedMarketData?.underlyingSymbol.toLowerCase()}.png`}
            alt="modlogo"
            width="32"
            height="32"
            className="mx-auto"
          />
        </div>
        <Tab
          setActive={setActive}
          mode={mode}
          active={active}
        />
        {/* all the respective slides */}

        <div
          ref={slide}
          className={`w-full transition-all duration-300 ease-linear h-min  flex`}
        >
          {(mode === 'SUPPLY' || mode === 'DEFAULT') && (
            <>
              {/* ---------------------------------------------------------------------------- */}
              {/* SUPPLY-Collateral section */}
              {/* ---------------------------------------------------------------------------- */}
              <div className={`min-w-full py-5 px-[6%] h-min `}>
                <Amount
                  selectedMarketData={selectedMarketData}
                  handleInput={(val?: number) => setAmount(val ?? 0)}
                  amount={amount}
                  max={parseFloat(balanceData?.formatted ?? '0')}
                  symbol={balanceData?.symbol ?? ''}
                />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between text-sm text-white/50 `}
                >
                  <span className={``}>COLLATERAL APR</span>
                  <span className={`font-bold pl-2`}>
                    {collateralApr}
                    {/* to do: add the rewards to the calculation */}
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <p className={`text-[10px] text-white/50`}>
                  BALANCE UTILIZATION
                </p>
                <SliderComponent handleUtilization={handleSupplyUtilization} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 uppercase `}
                >
                  <span className={``}>Market Supply Balance</span>
                  <span className={`font-bold pl-2`}>
                    {selectedMarketData.totalSupplyNative.toFixed(4)} -{'>'}{' '}
                    {(
                      selectedMarketData.totalSupplyNative + (amount ?? 0)
                    ).toFixed(4)}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 uppercase`}
                >
                  <span className={``}>Market Supply APR</span>
                  <span className={`font-bold pl-2`}>
                    {collateralApr}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 uppercase`}
                >
                  <span className={``}>Market Borrow Apr</span>
                  <span className={`font-bold pl-2`}>
                    {borrowApr}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  <button
                    className={`w-full rounded-md py-1 transition-colors ${
                      amount && amount > 0 ? 'bg-accent' : 'bg-stone-500'
                    } `}
                    onClick={() => supplyAmount()}
                  >
                    <ResultHandler
                      isLoading={isExecutingAction}
                      width="20"
                      height="20"
                      color="#fff"
                    >
                      Supply {selectedMarketData.underlyingSymbol}
                    </ResultHandler>
                  </button>

                  <button
                    className={`w-full rounded-md py-1 transition-colors ${
                      amount && amount > 0 ? 'bg-accent' : 'bg-stone-500'
                    } `}
                    onClick={() => supplyAmount(true)}
                  >
                    <ResultHandler
                      isLoading={isExecutingAction}
                      width="20"
                      height="20"
                      color="#fff"
                    >
                      Collateral {selectedMarketData.underlyingSymbol}
                    </ResultHandler>
                  </button>
                </div>
                {/* <Approved /> */}
              </div>
              <div className={`min-w-full py-5 px-[6%] h-min`}>
                {/* ---------------------------------------------------------------------------- */}
                {/* SUPPLY-Withdraw section */}
                {/* ---------------------------------------------------------------------------- */}
                <Amount
                  selectedMarketData={selectedMarketData}
                  handleInput={(val?: number) => setAmount(val ?? 0)}
                  amount={amount}
                  max={parseFloat(
                    selectedMarketData.supplyBalanceNative.toString()
                  )}
                  symbol={balanceData?.symbol ?? ''}
                  hintText="Max Withdraw"
                />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>

                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 uppercase `}
                >
                  <span className={``}>Market Supply Balance</span>
                  <span className={`font-bold pl-2`}>
                    {selectedMarketData.totalSupplyNative.toFixed(4)} -{'>'}{' '}
                    {(
                      selectedMarketData.totalSupplyNative - (amount ?? 0)
                    ).toFixed(4)}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  <button
                    className={`w-full rounded-md py-1 transition-colors ${
                      amount && amount > 0 ? 'bg-accent' : 'bg-stone-500'
                    } `}
                    onClick={withdrawAmount}
                  >
                    <ResultHandler
                      isLoading={isExecutingAction}
                      width="20"
                      height="20"
                      color="#fff"
                    >
                      Withdraw {selectedMarketData.underlyingSymbol}
                    </ResultHandler>
                  </button>
                </div>
                {/* <Approved /> */}
              </div>
            </>
          )}
          {(mode === 'BORROW' || mode === 'DEFAULT') && (
            <>
              <div className={`min-w-full py-5 px-[6%] h-min`}>
                {/* ---------------------------------------------------------------------------- */}
                {/* SUPPLY-borrow section */}
                {/* ---------------------------------------------------------------------------- */}
                <Amount
                  selectedMarketData={selectedMarketData}
                  handleInput={(val?: number) => setAmount(val ?? 0)}
                  amount={amount}
                  max={maxBorrowAmount?.number ?? 0}
                  symbol={balanceData?.symbol ?? ''}
                  hintText="Max Borrow Amount"
                />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-sm text-white/50 `}
                >
                  <span className={``}>MIN BORROW</span>
                  <span className={`font-bold pl-2`}>
                    {minBorrowAmount?.minBorrowUSD?.toFixed(2)}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-sm text-white/50 `}
                >
                  <span className={``}>MAX BORROW</span>
                  <span className={`font-bold pl-2`}>
                    {maxBorrowAmount?.number?.toFixed(2)}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  <button
                    className={`w-full rounded-md py-1 transition-colors ${
                      amount &&
                      amount > 0 &&
                      maxBorrowAmount &&
                      amount <= maxBorrowAmount.number
                        ? 'bg-accent'
                        : 'bg-stone-500'
                    } `}
                    onClick={borrowAmount}
                  >
                    <ResultHandler
                      isLoading={isExecutingAction}
                      width="20"
                      height="20"
                      color="#fff"
                    >
                      Borrow {selectedMarketData.underlyingSymbol}
                    </ResultHandler>
                  </button>
                </div>
              </div>
              <div className={`min-w-full py-5 px-[6%] h-min`}>
                {/* ---------------------------------------------------------------------------- */}
                {/* SUPPLY-repay section */}
                {/* ---------------------------------------------------------------------------- */}
                <Amount
                  selectedMarketData={selectedMarketData}
                  handleInput={(val?: number) => setAmount(val ?? 0)}
                  amount={amount}
                  max={parseFloat(balanceData?.formatted ?? '0')}
                  symbol={balanceData?.symbol ?? ''}
                />
                <SliderComponent handleUtilization={handleSupplyUtilization} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-sm text-white/50 `}
                >
                  <span className={``}>CURRENTLY BORROWING</span>
                  <span className={`font-bold pl-2`}>
                    {selectedMarketData.borrowBalanceNative.toFixed(4)}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  <button
                    className={`w-full rounded-md py-1 transition-colors ${
                      amount && amount > 0 && currentBorrowAmountAsFloat
                        ? 'bg-accent'
                        : 'bg-stone-500'
                    } `}
                    onClick={repayAmount}
                  >
                    <ResultHandler
                      isLoading={isExecutingAction}
                      width="20"
                      height="20"
                      color="#fff"
                    >
                      Repay {selectedMarketData.underlyingSymbol}
                    </ResultHandler>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;

/*mode should be of 
supply consist of collateral , withdraw
 borrow ( borrow repay)
manage collateral withdraw borrow repay - default
*/

/* <div className={``}></div>  <p className={``}></p>
          <p className={``}></p>  colleteralT , borrowingT , lendingT , cAPR , lAPR , bAPR} */
