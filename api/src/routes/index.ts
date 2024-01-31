import * as trpcExpress from '@trpc/server/adapters/express';
import express from 'express';
import { renderTrpcPanel } from 'trpc-panel';
import { createContext } from '../context.js';
import { appRouter } from './app-router.js';

export const initApiRoutes = async (app: ReturnType<typeof express>) => {
  const router = await appRouter();

  const trpcBase = '/trpc';

  app.use(
    trpcBase,
    trpcExpress.createExpressMiddleware({
      router,
      createContext,
      onError: (err) => {
        console.error(err.error.stack);
        console.error(err.error.cause);
      },
    }),
  );

  app.use('/panel', (_, res) => {
    return res.send(renderTrpcPanel(router, { url: `${process.env.API_URL}${trpcBase}`, transformer: 'superjson' }));
  });
};
