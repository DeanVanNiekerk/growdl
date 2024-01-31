import { inferAsyncReturnType } from '@trpc/server';
import * as express from 'express';

type NodeHTTPCreateContextFnOptions<TRequest, TResponse> = {
  req: TRequest;
  res: TResponse;
};

export const createContext = async ({ req }: NodeHTTPCreateContextFnOptions<express.Request, express.Response>) => {
  // const services = await getUserServices(getConfig());

  let accessToken: string | undefined = undefined;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer'))
    accessToken = req.headers.authorization.split(' ')[1];

  if (accessToken) {
    try {
      // const txr = liftTransactor(services.transactor, (q) => ({
      //   users: new UsersRepo(q),
      // }));

      // const authToken = await services.privy.verifyAuthToken(accessToken);
      // const user = await services.user.getOrCreateUserByPrivyId(txr, authToken.userId);

      return { authToken: 'TODO' };
    } catch (err) {
      console.error(err);
    }
  }

  return { authToken: null, user: null };
};

export type Context = inferAsyncReturnType<typeof createContext>;
