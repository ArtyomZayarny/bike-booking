import { Status } from "./components/ui/card/status.enum";

export interface IBike {
  _id: string;
  slugID: string;
  name: string;
  type: string;
  status: Status.AVAILABLE | Status.UNAVAILABLE | Status.BUSY;
  color: string;
  wheelSize: number;
  description: string;
  price: number;
}

export type statisticsType = {
  total: number;
  available: number;
  booked: number;
  avgCost: number;
};

export type BikesContextType = {
  bikes: IBike[] | [];
  loading: boolean;
  deleteBike: (id: string) => void;
  addBike: (bike: IBike) => void;
  updateBike: (id: string, status: Status) => void;
  storedBikes: IBike[] | [];
  statistics: statisticsType;
};
