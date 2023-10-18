import express from 'express';

import { router } from './routes';
import './services/TranslationsYup';

const server = express();

server.use(express.json());

server.use(router);

export { server };
