import { subDays } from "date-fns";
import { v4 as uuidv4 } from "uuid";

export type Transaction = {
  id: string;
  currency: string;
  date: Date;
  priceBtc: BigInt;
};

const transactions: Transaction[] = [
  {
    id: uuidv4(),
    currency: "ETH",
    date: subDays(new Date(), 30),
    priceBtc: BigInt(100000),
  },
  {
    id: uuidv4(),
    currency: "SOL",
    date: subDays(new Date(), 20),
    priceBtc: BigInt(100000),
  },
];

export const getTransactions = () => transactions;
