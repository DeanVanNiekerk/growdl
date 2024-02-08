import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Result = {
  price: string;
  symbol: string;
};

export const useCoinPriceQuery = (
  symbols: string[],
  pricedInSymbols: string[]
) => {
  const result = useQuery<Result[]>({
    queryKey: ["coin-price", symbols.join(), pricedInSymbols.join()],
    queryFn: async () => {
      const filter = pricedInSymbols
        .map((p) => symbols.map((s) => `${s}${p}`))
        .flat();
      return axios
        .get(
          `https://www.binance.com/api/v3/ticker/price?symbols=${encodeURIComponent(
            JSON.stringify(filter)
          )}`
        )
        .then((res) => res.data);
    },
  });
  return result;
};
