import { subDays } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export type Transaction = {
  id: string;
  symbol: string;
  date: Date;
  priceBtc: number;
};

export type PricedTransaction = Transaction & {
  currentPriceBtc: number;
  currentPriceFiat: number;
};
