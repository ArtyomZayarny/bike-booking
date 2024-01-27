import { Status } from "@/components/ui/card/status.enum";

export const url =
  process.env.API_ENDPOINT! || "http://localhost:3001/api/v1/bikes";

export const addBikeToDB = async (bike: any) => {
  const res = await fetch(url, {
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
  await fetch(`${url}/${id}`, {
    method: "DELETE",
  });
};

export const updateBikeToDB = async (id: string, status: Status) => {
  const res = await fetch(`${url}/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const update = await res.json();
  return update;
};
