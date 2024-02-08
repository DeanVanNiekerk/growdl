import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";
import { Transaction } from "../types";
import { subDays } from "date-fns";
import { v4 as uuidv4 } from "uuid";

type State = {
  transactions: Transaction[];
};

type Actions = {
  //   setSuccessfulOrder: (successfulOrder: boolean) => void;
};

const initialState: State = {
  transactions: [
    {
      id: uuidv4(),
      symbol: "ETH",
      date: subDays(new Date(), 30),
      priceBtc: 0.06,
    },
    {
      id: uuidv4(),
      symbol: "SOL",
      date: subDays(new Date(), 20),
      priceBtc: 0.004,
    },
  ],
};

export const transactionsStore = createWithEqualityFn<State & Actions>()(
  (set) => ({
    ...initialState,
    // setSuccessfulOrder: (successfulOrder: boolean) => {
    //   set({ successfulOrder });
    // },
  }),
  shallow
);
