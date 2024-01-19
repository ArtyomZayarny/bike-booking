import { useEffect, useState } from "react";
//import { fetchData } from "../utils/fetchData";
import { IBike } from "@/types";

export const useBikes = () => {
  const [bikes, setBikes] = useState<IBike[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const data = [
    {
      id: "1",
      name: "Cannondale",
      type: "MTB",
      color: "green",
      wheelSize: 29,
      status: "available",
      price: 21000.9,
    },
    {
      id: "2",
      name: "Cannondale",
      type: "FreeRide",
      color: "black",
      status: "available",
      wheelSize: 29,
      price: 25000.99,
    },
    {
      id: "3",
      name: "Merida",
      type: "Gravel",
      color: "yellow",
      status: "busy",
      wheelSize: 29,
      price: 21000.9,
    },
    {
      id: "4",
      name: "Cannondale",
      type: "MTB",
      color: "green",
      status: "busy",
      wheelSize: 29,
      price: 21000.9,
    },
    {
      id: "5",
      name: "Cannondale",
      type: "MTB",
      color: "blue",
      status: "unavailable",
      wheelSize: 29,
      price: 21000.9,
    },
  ];

  useEffect(() => {
    let id = null;

    setLoading(true);
    async function getBikes() {
      try {
        const res = data;

        // const articles = await fetchData(
        //   `https://article-manager-api-jy2y.onrender.com/articles`,
        //   "GET"
        // );

        res && setBikes(res);
      } catch (error) {
        console.warn(error);
      }
      setLoading(false);
    }

    id = setTimeout(() => {
      getBikes();
    }, 3000);

    () => {
      clearTimeout(id);
    };
  }, []);

  return { bikes, loading, setBikes };
};
