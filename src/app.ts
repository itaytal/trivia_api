import 'reflect-metadata';
import express from 'express';
import compression from 'compression';
import cors from 'cors';
import config from './config';
import { InversifyExpressServer } from 'inversify-express-utils';
import { DiContainer } from './di-container';
import './controllers/auth.controller';

export class App {
  public readonly container: DiContainer;

  constructor() {
    this.container = new DiContainer();
    this.setup();
  }

  setup() {
    const server = new InversifyExpressServer(this.container.diContainer);
    this.container.connect();

    server.setConfig((app) => {
      app.use(express.json());
      app.use(cors({ origin: true }));
      app.use(compression());
    });

    const app = server.build();

    app.listen(config.PORT, () => {
      console.info(`server is running on ${config.PORT}`);
    });
  }
}

new App();
