import { injectable } from 'inversify';

import { IBike } from './bike.interface.ts';
import { Bike } from './bike.model.ts';

@injectable()
export class BikeService {
  constructor() {}

  public async find() {
    return await Bike.find();
  }

  public async create(payload: IBike) {
    return await Bike.create(payload);
  }

  public async getOne(id: string) {
    return await Bike.findById(id);
  }

  public async delete(id: string) {
    return await Bike.findByIdAndDelete(id);
  }

  public async update(id: string, payload: IBike) {
    return await Bike.findByIdAndUpdate(id, payload, {
      new: true,
      runValidators: true,
    });
  }

  public async filterBike(filter: Partial<IBike>) {
    return await Bike.find(filter);
  }
}
