import { NextFunction } from 'express';
import { inject } from 'inversify';
import { controller, httpGet } from 'inversify-express-utils';

import TYPES from '../../constants/types.ts';
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
}
