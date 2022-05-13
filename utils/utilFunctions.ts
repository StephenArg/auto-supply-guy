import { StoreItem } from "../types/StoreItem";

export const getPriceRange = (item: StoreItem) => {
  if (item.Type === "simple") return `$${item.Price?.toFixed(2)}`;
  const prices: number[] = item.Variations.map(
    (variation) => variation.Price
  ).sort((a, b) => a - b);
  if (prices.length === 1) return `$${prices[0].toFixed(2)}`;
  return `$${prices[0].toFixed(2)} - $${prices[prices.length - 1].toFixed(2)}`;
};
