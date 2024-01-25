import { useEffect, useState } from "react";
import { IBike } from "@/types";

export const useBikes = () => {
  const [bikes, setBikes] = useState<IBike[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function getBikes() {
      try {
        const res = await fetch(`http://localhost:3001/api/v1/bikes`, {
          method: "GET",
        });
        const data = await res.json();

        !bikes && data && setBikes(data.bikes);
      } catch (error) {
        console.warn(error);
      }
      setLoading(false);
    }
    getBikes();
  }, []);

  return { bikes, setBikes, loading };
};
