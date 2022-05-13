import { StoreItem } from "../types/StoreItem";

type JSONStoreItems = {
  status: number;
  items: StoreItem[];
};

type JSONStoreItem = {
  status: number;
  item: StoreItem;
};

const handleError = function (err: Error) {
  console.warn(err);
  return new Response(
    JSON.stringify({
      code: 400,
      message: "Network Error",
    })
  );
};

export const getItems = async (): Promise<JSONStoreItems> => {
  const res = await fetch("http://localhost:3000/api/items").catch(handleError);
  if (res.ok) return res.json();
  return Promise.reject(res);
};

export const getItem = async (
  sku: string | undefined
): Promise<JSONStoreItem> => {
  const res = await fetch(`http://localhost:3000/api/items/${sku}`).catch(
    handleError
  );
  if (res.ok) return res.json();
  return Promise.reject(res);
};
