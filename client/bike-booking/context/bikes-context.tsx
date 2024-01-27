"use client";
import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useBikes } from "../hooks/useBikes";
import { BikesContextType, IBike, statisticsType } from "@/types";
import { Status } from "@/components/ui/card/status.enum";
import { getStatistics } from "../utils/getStatistics";
import {
  addBikeToDB,
  deleteBikeFromDB,
  updateBikeToDB,
} from "@/utils/apiHadlers";

const initialStatistics: statisticsType = {
  total: 0,
  available: 0,
  booked: 0,
  avgCost: 0,
};

export const BikesContext = createContext({} as unknown as BikesContextType);

type Props = {
  children: React.ReactNode;
};

export const BikesContextProvider = ({ children }: Props) => {
  const { bikes, loading, setBikes } = useBikes();
  const [statistics, setStatistics] = useState(initialStatistics);
  const [storedBikes, setStoredBikes] = useState<IBike[] | null>(null);

  useEffect(() => {
    if (bikes && bikes.length > 0) {
      setStoredBikes(bikes);
    }

    if (bikes && bikes.length === 0) {
      setStoredBikes([]);
    }
  }, [bikes]);

  useEffect(() => {
    if (storedBikes) {
      const statistics = storedBikes.length
        ? getStatistics(storedBikes)
        : initialStatistics;
      setStatistics(statistics);
    }
  }, [storedBikes]);

  const deleteBike = useCallback(
    (id: string) => {
      const updatedBikes = storedBikes?.filter(
        (bike: IBike) => bike._id !== id
      );
      setStoredBikes(updatedBikes!);
      deleteBikeFromDB(id);
    },
    [bikes, storedBikes]
  );

  const addBike = useCallback(
    async (bike: IBike) => {
      const data = await addBikeToDB(bike);
      const updatedBike = [...storedBikes!, data];
      setStoredBikes(updatedBike);
    },
    [bikes, storedBikes]
  );

  const updateBike = useCallback(
    async (id: string, status: Status) => {
      await updateBikeToDB(id, status);

      const updatedBikes = storedBikes?.map((bike) => {
        if (bike._id === id) {
          bike.status = status;
          return bike;
        }
        return bike;
      });
      setStoredBikes(updatedBikes!);
    },
    [bikes, storedBikes]
  );

  const value = {
    bikes,
    loading,
    deleteBike,
    addBike,
    updateBike,
    storedBikes,
    setStoredBikes,
    statistics,
  } as unknown as BikesContextType;

  return (
    <BikesContext.Provider value={value}>{children}</BikesContext.Provider>
  );
};
