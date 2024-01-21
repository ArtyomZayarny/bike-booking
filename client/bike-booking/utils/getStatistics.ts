import { Status } from "@/components/ui/card/status.enum";
import { IBike, statisticsType } from "@/types";

export const getStatistics = (data: IBike[]) => {
  return data.reduce((acc, item: IBike, index, arr) => {
    //count avgCost
    acc.avgCost = (acc.avgCost || 0) + item.price;
    if (arr.length - 1 === index) {
      acc.avgCost = +(acc.avgCost / arr.length).toFixed(2);
    }

    //count booked items
    if (item.status === Status.BUSY) {
      acc.booked = (acc.booked || 0) + 1;
    }

    //count available items
    if (item.status === Status.AVAILABLE) {
      acc.available = (acc.available || 0) + 1;
    }

    //Count total items
    acc.total = arr.length;
    return acc;
  }, {} as statisticsType);
};
