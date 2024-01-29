'use client';
/* eslint-disable @next/next/no-img-element */
import { useQueryClient } from '@tanstack/react-query';
import { INFO_MESSAGES } from '@ui/constants/index';
import { useMultiMidas } from '@ui/context/MultiIonicContext';
import { useBorrowAPYs } from '@ui/hooks/useBorrowAPYs';
import { useBorrowMinimum } from '@ui/hooks/useBorrowMinimum';
import { useMaxBorrowAmount } from '@ui/hooks/useMaxBorrowAmount';
import { useTotalSupplyAPYs } from '@ui/hooks/useTotalSupplyAPYs';
import { MarketData } from '@ui/types/TokensDataMap';
import { BigNumber, constants, utils } from 'ethers';
import { formatUnits } from 'ethers/lib/utils.js';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useReducer, useRef, useState } from 'react';
import { ThreeCircles } from 'react-loader-spinner';
import { useBalance, useChainId } from 'wagmi';
import Amount from './Amount';
import SliderComponent from './Slider';
import Tab from './Tab';
import useUpdatedUserAssets from '@ui/hooks/ionic/useUpdatedUserAssets';
import { FundOperationMode } from 'types/dist';
import { getBlockTimePerMinuteByChainId } from '@ui/utils/networkData';
import ResultHandler from '../ResultHandler';

type LoadingButtonWithTextProps = {
  text: String;
};

function LoadingButtonWithText({ text }: LoadingButtonWithTextProps) {
  return (
    <button className={`w-full rounded-md py-1 transition-colors bg-accent`}>
      <span className="flex justify-center">
        <span className="block mr-2">{text}</span>{' '}
        <ThreeCircles
          visible={true}
          height="20"
          width="20"
          color="#0a0a0aff"
          ariaLabel="three-circles-loading"
          wrapperClass=""
        />
      </span>
    </button>
  );
}

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
  const { currentSdk, address } = useMultiMidas();
  const chainId = useChainId();
  const { data: minBorrowAmount } = useBorrowMinimum(
    selectedMarketData,
    chainId
  );
  const { data: balanceData } = useBalance({
    address: (address as any) ?? `0x0`,
    token: selectedMarketData.underlyingToken as any
  });
  const { data: assetsSupplyAprData } = useTotalSupplyAPYs(
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
  const [currentInfoMessage, setCurrentInfoMessage] = useState<string>();
  const [active, setActive] = useState<string>('');
  const slide = useRef<HTMLDivElement>(null!);
  const router = useRouter();
  const [amount, setAmount] = useReducer(
    (_: number | undefined, value: number | undefined): number | undefined => {
      const marketDataDecimals = parseInt(
        selectedMarketData.underlyingDecimals.toString()
      );

      return typeof value === 'number'
        ? parseFloat(value.toFixed(marketDataDecimals))
        : undefined;
    },
    undefined
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
  const { data: maxBorrowAmount } = useMaxBorrowAmount(
    selectedMarketData,
    comptrollerAddress,
    chainId
  );
  const currentBorrowAmountAsFloat = useMemo<number>(
    () => parseFloat(selectedMarketData.borrowBalance.toString()),
    [selectedMarketData]
  );
  const [currentFundOperation, setCurrentFundOperation] =
    useState<FundOperationMode>(FundOperationMode.SUPPLY);
  const { data: updatedAssets, isLoading: isLoadingUpdatedAssets } =
    useUpdatedUserAssets({
      mode: currentFundOperation,
      poolChainId: chainId,
      amount: amountAsBInt as any,
      assets: [selectedMarketData],
      index: 0
    });
  const updatedAsset = updatedAssets ? updatedAssets[0] : undefined;
  const {
    supplyAPY,
    borrowAPR,
    updatedSupplyAPY,
    updatedBorrowAPR,
    supplyBalanceFrom,
    supplyBalanceTo,
    borrowBalanceFrom,
    borrowBalanceTo
  } = useMemo(() => {
    const blocksPerMinute = getBlockTimePerMinuteByChainId(chainId);

    if (currentSdk) {
      return {
        borrowAPR: currentSdk.ratePerBlockToAPY(
          selectedMarketData.borrowRatePerBlock,
          blocksPerMinute
        ),
        supplyAPY: currentSdk.ratePerBlockToAPY(
          selectedMarketData.supplyRatePerBlock,
          blocksPerMinute
        ),
        supplyBalanceFrom: utils.commify(
          utils.formatUnits(
            selectedMarketData.supplyBalance,
            selectedMarketData.underlyingDecimals
          )
        ),
        supplyBalanceTo: updatedAsset
          ? utils.commify(
              utils.formatUnits(
                updatedAsset.supplyBalance,
                updatedAsset.underlyingDecimals
              )
            )
          : undefined,
        borrowBalanceFrom: utils.commify(
          utils.formatUnits(
            selectedMarketData.borrowBalance,
            selectedMarketData.underlyingDecimals
          )
        ),
        borrowBalanceTo: updatedAsset
          ? utils.commify(
              utils.formatUnits(
                updatedAsset.borrowBalance,
                updatedAsset.underlyingDecimals
              )
            )
          : undefined,
        updatedBorrowAPR: updatedAsset
          ? currentSdk.ratePerBlockToAPY(
              updatedAsset.borrowRatePerBlock,
              blocksPerMinute
            )
          : undefined,
        updatedSupplyAPY: updatedAsset
          ? currentSdk.ratePerBlockToAPY(
              updatedAsset.supplyRatePerBlock,
              blocksPerMinute
            )
          : undefined,
        totalBorrows: updatedAssets?.reduce(
          (acc, cur) => acc + cur.borrowBalanceFiat,
          0
        ),
        updatedTotalBorrows: updatedAssets
          ? updatedAssets.reduce((acc, cur) => acc + cur.borrowBalanceFiat, 0)
          : undefined
      };
    }

    return {};
  }, [chainId, updatedAsset, selectedMarketData, updatedAssets, currentSdk]);
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

    switch (active) {
      case 'COLLATERAL':
        setCurrentFundOperation(FundOperationMode.SUPPLY);

        break;

      case 'WITHDRAW':
        setCurrentFundOperation(FundOperationMode.WITHDRAW);

        break;

      case 'BORROW':
        setCurrentFundOperation(FundOperationMode.BORROW);

        break;

      case 'REPAY':
        setCurrentFundOperation(FundOperationMode.REPAY);

        break;
    }

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
        setCurrentInfoMessage(INFO_MESSAGES.SUPPLY.APPROVE);

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
          setCurrentInfoMessage(INFO_MESSAGES.SUPPLY.COLLATERAL);

          const tx = await currentSdk.enterMarkets(
            selectedMarketData.cToken,
            comptrollerAddress
          );

          await tx.wait();
        }

        setCurrentInfoMessage(INFO_MESSAGES.SUPPLY.SUPPLYING);

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
      amount <=
        parseFloat(
          formatUnits(
            selectedMarketData.supplyBalance,
            selectedMarketData.underlyingDecimals
          )
        )
    ) {
      setIsExecutingAction(true);

      try {
        setCurrentInfoMessage(INFO_MESSAGES.WITHDRAW.WITHDRAWING);

        if (
          parseFloat(
            formatUnits(
              selectedMarketData.supplyBalance,
              selectedMarketData.underlyingDecimals
            )
          ) <= amount
        ) {
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
      minBorrowAmount &&
      amount > (minBorrowAmount?.minBorrowUSD ?? 0) &&
      maxBorrowAmount &&
      amount <= maxBorrowAmount.number
    ) {
      setIsExecutingAction(true);

      try {
        setCurrentInfoMessage(INFO_MESSAGES.BORROW.BORROWING);

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
        setCurrentInfoMessage(INFO_MESSAGES.REPAY.APPROVE);

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

        setCurrentInfoMessage(INFO_MESSAGES.REPAY.REPAYING);

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
        className={`w-[45%] relative  bg-grayUnselect rounded-xl max-h-[65vh] overflow-x-hidden overflow-y-scroll scrollbar-hide`}
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
                  handleInput={(val?: number) => setAmount(val)}
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
                  <span className={`flex font-bold pl-2`}>
                    {supplyBalanceFrom}
                    <span className="mx-1">{`->`}</span>
                    <ResultHandler
                      isLoading={isLoadingUpdatedAssets}
                      width="16"
                      height="16"
                    >
                      {supplyBalanceTo}
                    </ResultHandler>
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 uppercase`}
                >
                  <span className={``}>Market Supply APR</span>
                  <span className={`flex font-bold pl-2`}>
                    {`${supplyAPY?.toFixed(2)}%`}
                    <span className="mx-1">{`->`}</span>
                    <ResultHandler
                      isLoading={isLoadingUpdatedAssets}
                      width="16"
                      height="16"
                    >
                      {updatedSupplyAPY?.toFixed(2)}%
                    </ResultHandler>
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-2 text-sm mb-1 mt-4 text-darkone `}
                >
                  {isExecutingAction ? (
                    <LoadingButtonWithText text={currentInfoMessage ?? ''} />
                  ) : (
                    <>
                      <button
                        className={`w-full rounded-md py-1 transition-colors ${
                          amount && amount > 0 ? 'bg-accent' : 'bg-stone-500'
                        } `}
                        onClick={() => supplyAmount()}
                      >
                        Supply {selectedMarketData.underlyingSymbol}
                      </button>

                      <button
                        className={`w-full rounded-md py-1 transition-colors ${
                          amount && amount > 0 ? 'bg-accent' : 'bg-stone-500'
                        } `}
                        onClick={() => supplyAmount(true)}
                      >
                        Collateral {selectedMarketData.underlyingSymbol}
                      </button>
                    </>
                  )}
                </div>
                {/* <Approved /> */}
              </div>
              <div className={`min-w-full py-5 px-[6%] h-min`}>
                {/* ---------------------------------------------------------------------------- */}
                {/* SUPPLY-Withdraw section */}
                {/* ---------------------------------------------------------------------------- */}
                <Amount
                  selectedMarketData={selectedMarketData}
                  handleInput={(val?: number) => setAmount(val)}
                  amount={amount}
                  max={parseFloat(
                    formatUnits(
                      selectedMarketData.supplyBalance,
                      selectedMarketData.underlyingDecimals
                    )
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
                  <span className={`flex font-bold pl-2`}>
                    {supplyBalanceFrom}
                    <span className="mx-1">{`->`}</span>
                    <ResultHandler
                      isLoading={isLoadingUpdatedAssets}
                      width="16"
                      height="16"
                    >
                      {supplyBalanceTo}
                    </ResultHandler>
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 uppercase`}
                >
                  <span className={``}>Market Supply APR</span>
                  <span className={`flex font-bold pl-2`}>
                    {`${supplyAPY?.toFixed(2)}%`}
                    <span className="mx-1">{`->`}</span>
                    <ResultHandler
                      isLoading={isLoadingUpdatedAssets}
                      width="16"
                      height="16"
                    >
                      {updatedSupplyAPY?.toFixed(2)}%
                    </ResultHandler>
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  {isExecutingAction ? (
                    <LoadingButtonWithText text={currentInfoMessage ?? ''} />
                  ) : (
                    <button
                      className={`w-full rounded-md py-1 transition-colors ${
                        amount && amount > 0 ? 'bg-accent' : 'bg-stone-500'
                      } `}
                      onClick={withdrawAmount}
                    >
                      Withdraw {selectedMarketData.underlyingSymbol}
                    </button>
                  )}
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
                  handleInput={(val?: number) => setAmount(val)}
                  amount={amount}
                  max={maxBorrowAmount?.number ?? 0}
                  symbol={balanceData?.symbol ?? ''}
                  hintText="Max Borrow Amount"
                />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-xs text-white/50 `}
                >
                  <span className={``}>MIN BORROW</span>
                  <span className={`font-bold pl-2`}>
                    {formatUnits(
                      minBorrowAmount?.minBorrowAsset ?? '0',
                      parseInt(selectedMarketData.underlyingDecimals.toString())
                    )}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-xs text-white/50 `}
                >
                  <span className={``}>MAX BORROW</span>
                  <span className={`font-bold pl-2`}>
                    {maxBorrowAmount?.number?.toFixed(
                      parseInt(selectedMarketData.underlyingDecimals.toString())
                    ) ?? '0.00'}
                    {/* this will be dynamic */}
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-xs text-white/50 `}
                >
                  <span className={``}>CURRENTLY BORROWING</span>
                  <span className={`flex font-bold pl-2`}>
                    {`${borrowBalanceFrom}`}
                    <span className="mx-1">{`->`}</span>
                    <ResultHandler
                      isLoading={isLoadingUpdatedAssets}
                      width="16"
                      height="16"
                    >
                      {borrowBalanceTo}
                    </ResultHandler>
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 uppercase`}
                >
                  <span className={``}>Market Borrow Apr</span>
                  <span className={`flex font-bold pl-2`}>
                    {`${borrowAPR?.toFixed(2)}%`}
                    <span className="mx-1">{`->`}</span>
                    <ResultHandler
                      isLoading={isLoadingUpdatedAssets}
                      width="16"
                      height="16"
                    >
                      {updatedBorrowAPR?.toFixed(2)}%
                    </ResultHandler>
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  {isExecutingAction ? (
                    <LoadingButtonWithText text={currentInfoMessage ?? ''} />
                  ) : (
                    <button
                      className={`w-full rounded-md py-1 transition-colors ${
                        amount &&
                        amount > 0 &&
                        minBorrowAmount &&
                        amount >= (minBorrowAmount?.minBorrowUSD ?? 0) &&
                        maxBorrowAmount &&
                        amount <= maxBorrowAmount.number
                          ? 'bg-accent'
                          : 'bg-stone-500'
                      } `}
                      onClick={borrowAmount}
                    >
                      Borrow {selectedMarketData.underlyingSymbol}
                    </button>
                  )}
                </div>
              </div>
              <div className={`min-w-full py-5 px-[6%] h-min`}>
                {/* ---------------------------------------------------------------------------- */}
                {/* SUPPLY-repay section */}
                {/* ---------------------------------------------------------------------------- */}
                <Amount
                  selectedMarketData={selectedMarketData}
                  handleInput={(val?: number) => setAmount(val)}
                  amount={amount}
                  hintText={'Max Repay Amount'}
                  max={parseFloat(
                    formatUnits(
                      selectedMarketData.borrowBalance,
                      selectedMarketData.underlyingDecimals
                    )
                  )}
                  symbol={balanceData?.symbol ?? ''}
                />
                <SliderComponent handleUtilization={handleSupplyUtilization} />
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between mb-2 text-xs text-white/50 `}
                >
                  <span className={``}>CURRENTLY BORROWING</span>
                  <span className={`flex font-bold pl-2`}>
                    {`${borrowBalanceFrom}`}
                    <span className="mx-1">{`->`}</span>
                    <ResultHandler
                      isLoading={isLoadingUpdatedAssets}
                      width="16"
                      height="16"
                    >
                      {borrowBalanceTo}
                    </ResultHandler>
                  </span>
                </div>
                <div
                  className={`flex w-full items-center justify-between text-xs mb-1 text-white/50 uppercase`}
                >
                  <span className={``}>Market Borrow Apr</span>
                  <span className={`flex font-bold pl-2`}>
                    {`${borrowAPR?.toFixed(2)}%`}
                    <span className="mx-1">{`->`}</span>
                    <ResultHandler
                      isLoading={isLoadingUpdatedAssets}
                      width="16"
                      height="16"
                    >
                      {updatedBorrowAPR?.toFixed(2)}%
                    </ResultHandler>
                  </span>
                </div>
                <div
                  className={` w-full h-[1px]  bg-white/30 mx-auto my-3`}
                ></div>
                <div
                  className={`flex w-full items-center justify-between gap-2  text-sm mb-1 mt-4 text-darkone `}
                >
                  {isExecutingAction ? (
                    <LoadingButtonWithText text={currentInfoMessage ?? ''} />
                  ) : (
                    <button
                      className={`w-full rounded-md py-1 transition-colors ${
                        amount && amount > 0 && currentBorrowAmountAsFloat
                          ? 'bg-accent'
                          : 'bg-stone-500'
                      } `}
                      onClick={repayAmount}
                    >
                      Repay {selectedMarketData.underlyingSymbol}
                    </button>
                  )}
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
