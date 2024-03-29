import { NextFunction, Request, Response } from 'express';
import { inject } from 'inversify';
import {
  controller,
  httpDelete,
  httpGet,
  httpPatch,
  httpPost,
} from 'inversify-express-utils';

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
        bike: doc,
      };
    } catch (error) {
      next(error);
    }
  }

  @httpDelete('/:id')
  public async deleteBike(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const doc = await this.bikeService.delete(id);
      if (!doc) {
        return {
          message: `Not doc found with that id = ${id}`,
        };
      }
      return res.status(204).send({
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }

  @httpPatch('/:id')
  public async updateBike(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    const doc = await this.bikeService.update(id, req.body);
    if (!doc) {
      return res.status(404).send({
        message: `Not doc found with that id = ${id}`,
      });
    }
    return doc;
  }
}
