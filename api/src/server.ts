import { config } from 'dotenv';
import express from 'express';
import { initApiRoutes } from './routes/index.js';

config();

const app = express();
await initApiRoutes(app);

const [port, listenAddress] = [parseInt(process.env.LISTEN_PORT as string), process.env.LISTEN_ADDRESS as string];

app.listen(port, listenAddress);
console.log(`API Listening on ${listenAddress}:${port}`);
