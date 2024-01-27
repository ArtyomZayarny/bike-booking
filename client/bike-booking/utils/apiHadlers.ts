import { Status } from "@/components/ui/card/status.enum";

export const url = process.env.NEXT_PUBLIC_URL_FORM_DATA;

export const addBikeToDB = async (bike: any) => {
  const res = await fetch(url!, {
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
