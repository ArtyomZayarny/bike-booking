import 'reflect-metadata'; // eslint-disable-line
import './modules/bike/bike.controller.ts';
import express from 'express';

import { InversifyExpressServer } from 'inversify-express-utils';
import mongoose from 'mongoose';
import cors from 'cors';
import config from './config/config.ts';
import { errorHandler } from './modules/errors/errorHandler.ts';
import { APIContainer } from './inversify.config.ts';

let server: any;

mongoose.connect(config.mongoose.url!).then(() => {
  console.log('DB connection successful!');
  server = new InversifyExpressServer(APIContainer);
  server.setConfig((app: any) => {
    app.use(cors());
    app.use(express.json());
  });

  const app = server.build();
  app.use(errorHandler);
  app.listen(3001, () => {
    console.log(`Listening to port 3001`);
  });
});
