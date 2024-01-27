import { Status } from "@/components/ui/card/status.enum";
import { IBike } from "@/types";

export const addBikeToDB = async (bike: any) => {
  const res = await fetch(`http://localhost:3001/api/v1/bikes`, {
    method: "POST",
    body: JSON.stringify(bike),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return data.bike;
};

export const deleteBikeFromDB = async (id: string) => {
  await fetch(`http://localhost:3001/api/v1/bikes/${id}`, {
    method: "DELETE",
  });
};

export const updateBikeToDB = async (id: string, status: Status) => {
  const res = await fetch(`http://localhost:3001/api/v1/bikes/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
  const update = await res.json();
  return update;
};
