import * as mongoose from 'mongoose';

export interface IBike {
  id: mongoose.Types.ObjectId;
  name: string;
  type: string;
  color: string;
  status: BikeStatus.AVAILABLE | BikeStatus.UNAVAILABLE | BikeStatus.BUSY;
  wheelSize: number;
  price: number;
  description: string;
}

export enum BikeStatus {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
  BUSY = 'busy',
}
