export type StoreItem = {
  _id: string;
  Type: string;
  Categories?: string;
  Description?: string;
  Images?: string;
  Name: string;
  SKU: string;
  Tags: string;
  Price?: number;
  Variations: StoreItem[];
  "Size default"?: string;
  "Size name"?: string;
  "Size value(s)"?: string;
  "Variant name"?: string;
  "Variant value(s)"?: string;
};
