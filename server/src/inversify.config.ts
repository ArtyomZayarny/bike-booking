import { Container } from 'inversify';

import TYPES from './constants/types.ts';
import { BikeService } from './modules/bike/bike.service.ts';

const APIContainer = new Container();
APIContainer.bind<BikeService>(TYPES.BikeService).to(BikeService);

export { APIContainer };
