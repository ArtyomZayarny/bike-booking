import { useEffect, useState } from "react";
import { IBike } from "@/types";
import { url } from "@/utils/apiHadlers";

export const useBikes = () => {
  const [bikes, setBikes] = useState<IBike[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    async function getBikes() {
      try {
        const res = await fetch(url!, {
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
