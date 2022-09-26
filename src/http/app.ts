import express, { Application } from 'express';
import cors from 'cors';
import { RequestLimiter } from './middlewares/RequestLimiter';
import { router } from './routes';
import { NotFound } from './middlewares/404';

function buildApp(): Application {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.disable('x-powered-by');

  app.use(RequestLimiter);

  app.use(router);

  app.use(NotFound);

  return app;
}

export default buildApp();
