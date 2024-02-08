import { useStore } from "zustand";
import { transactionsStore } from "../store/transactions";
import { useEffect, useState } from "react";
import { useCoinPriceQuery } from "../query";
import { PricedTransaction } from "../types";

export const usePricedTransactions = () => {
  const transactions = useStore(transactionsStore, (s) => s.transactions);

  const [pricedTransactions, setPricedTransactions] = useState<
    PricedTransaction[] | null
  >(null);

  const query = useCoinPriceQuery(
    transactions.map((t) => t.symbol),
    ["BTC"]
  );

  useEffect(() => {
    if (!query.data) return;

    const pt = transactions.map((t) => {
      const price = query.data.find(
        (p) => p.symbol === `${t.symbol}BTC`
      )?.price;
      return { ...t, currentPriceBtc: Number(price) || 0, currentPriceFiat: 0 };
    });

    setPricedTransactions(pt);
  }, [transactions, query.data]);

  return {
    transactions: pricedTransactions ?? [],
    isLoading: query.isLoading || pricedTransactions === null,
  };
};
