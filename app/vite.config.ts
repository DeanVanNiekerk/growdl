import react from '@vitejs/plugin-react';
import * as path from 'path';
import { PluginOption, UserConfig, defineConfig, splitVendorChunkPlugin } from 'vite';
import mkcert from 'vite-plugin-mkcert';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  const plugins: PluginOption[] = [react(), splitVendorChunkPlugin()];

  if (mode !== 'test') plugins.push(mkcert());

  // const env = loadEnv(mode, process.cwd(), '');

  const config: UserConfig = {
    plugins: plugins,
    server: { port: 3030, host: '0.0.0.0' },
    // define: {
    //   __JSON_CONFIG__: JSON.stringify({
    //     shopUrl: env.USER_APP_ADDRESS,
    //     userApiUrl: `${env.USER_API_ADDRESS}/trpc`,
    //     aspenProperAppUrl: env.ASPEN_PROPER_APP_ADDRESS,
    //     privyAppId: env.USER_PRIVY_APP_ID,
    //     stripePublishableKey: env.STRIPE_PUBLISHABLE_KEY,
    //     sentryDsn: env.SENTRY_DSN,
    //     segmentKey: env.SEGMENT_ANALYTICS_API_KEY_FRONTEND,
    //     appVersion: env.APP_VERSION,
    //     stack: env.STACK,
    //     growthBookApiHost: env.GROWTHBOOK_API_HOST,
    //     growthBookClientKey: env.GROWTHBOOK_CLIENT_KEY,
    //   }),
    // },
    build: {
      sourcemap: true,
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
  };

  return config;
});
