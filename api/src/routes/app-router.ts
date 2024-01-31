import { mergeRouters } from '../trpc.js';
import { getTransactionsRouter } from './transactions-router.js';

export const appRouter = async () => {
  return mergeRouters(await getTransactionsRouter());
};

export type AppRouter = Awaited<ReturnType<typeof appRouter>>;
