import { GetProduct } from '../schema/trpc';
import { protectedProcedure, router } from '../trpc.js';

export const getTransactionsRouter = async () => {
  return router({
    getUserIsAllowListedForProduct: protectedProcedure.input(GetProduct).query(async () => {
      return {
        isAllowListed: false,
      };
    }),
  });
};
