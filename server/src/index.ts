import 'reflect-metadata'; // eslint-disable-line
import './modules/bike/bike.controller.ts';

import { InversifyExpressServer } from 'inversify-express-utils';
import mongoose from 'mongoose';

import config from './config/config.ts';
import { APIContainer } from './inversify.config.ts';

let server: any;

mongoose.connect(config.mongoose.url!).then(() => {
  console.log('DB connection successful!');
  server = new InversifyExpressServer(APIContainer);

  const app = server.build();

  app.listen(3001, () => {
    console.log(`Listening to port 3001`);
  });
});
