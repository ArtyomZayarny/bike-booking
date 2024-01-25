import mongoose from 'mongoose';
import validator from 'validator';

import { BikeStatus, IBike } from './bike.interface.ts';

const bikeSchema = new mongoose.Schema<IBike>({
  slugID: {
    type: String,
    required: [true, 'Bike must have slug id'],
    unique: true,
    trim: true,
    minlength: [5, 'Bike slug id must have more or equal 5 characters'],
  },
  name: {
    type: String,
    trim: true,
    minlength: [5, 'Bike name must have more or equal 5 characters'],
    required: [true, 'Bike must have a name'],
  },
  type: {
    type: String,
    trim: true,
    minlength: [5, 'Bike type must have more or equal 5 characters'],
    required: [true, 'Bike must have a type'],
  },
  color: {
    type: String,
    trim: true,
    minlength: [5, 'Bike color must have more or equal 5 characters'],
    required: [true, 'Bike must have a color'],
  },
  status: {
    type: String,
    enum: [BikeStatus.AVAILABLE, BikeStatus.UNAVAILABLE, BikeStatus.BUSY],
    default: BikeStatus.AVAILABLE,
    required: true,
  },
  wheelSize: {
    type: Number,
    trim: true,
    required: [true, 'Bike must have a wheel size'],
    validate: {
      validator: function (val: number) {
        return val > 0;
      },
      message: 'Wheel size ({VALUE}) should be great then zero',
    },
  },
  price: {
    type: Number,
    required: [true, 'Bike must have a price'],
    validate: {
      validator: function (val: number) {
        return val > 0;
      },
      message: 'Price ({VALUE}) should be great then zero',
    },
  },
  description: {
    type: String,
    trim: true,
    minlength: [5, 'Bike name must have more or equal 5 characters'],
    required: [true, 'Bike must have a description'],
  },
});

export const Bike = mongoose.model<IBike>('Bike', bikeSchema);
