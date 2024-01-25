import { NextFunction } from 'express';
import { inject } from 'inversify';
import { controller, httpGet, httpPost } from 'inversify-express-utils';

import TYPES from '../../constants/types.ts';
import { IBike } from './bike.interface.ts';
import { BikeService } from './bike.service.ts';

@controller('/api/v1/bikes')
export class BikeController {
  constructor(@inject(TYPES.BikeService) private bikeService: BikeService) {}
  @httpGet('/')
  public async getBikes(req: Request, next: NextFunction) {
    try {
      const doc = await this.bikeService.find();
      return {
        result: doc.length,
        bikes: doc,
      };
    } catch (error) {
      next(error);
    }
  }

  @httpPost('/')
  public async addBike(req: Request, res: Response, next: NextFunction) {
    try {
      const doc = await this.bikeService.create(req.body as unknown as IBike);
      return {
        doc,
      };
    } catch (error) {
      next(error);
    }
  }
}
