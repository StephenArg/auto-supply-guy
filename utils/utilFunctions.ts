import { StoreItem, StoreItemVariant } from "../types/StoreItem";

export const getPriceRange = (item: StoreItem) => {
  if (item.Type === "simple") return `$${item.Price?.toFixed(2)}`;
  const prices: number[] = item.Variations.map(
    (variation) => variation.Price
  ).sort((a, b) => a - b);
  if (prices.length === 1) return `$${prices[0].toFixed(2)}`;
  return `$${prices[0].toFixed(2)} - $${prices[prices.length - 1].toFixed(2)}`;
};

export const allOptionsSelected = (
  item: StoreItem,
  variantValue: string,
  sizeValue: string
): boolean => {
  if (item.Type === "simple") return true;

  const variantNeeded = !!item.Variations[0]["Variant name"];
  const sizeNeeded = !!item.Variations[0]["Size name"];

  if (variantNeeded && sizeNeeded) return !!variantValue && !!sizeValue;
  if (variantNeeded) return !!variantNeeded;

  return !!sizeNeeded;
};

export const variationOptionsAvailable = (
  item: StoreItem,
  variantValue: string,
  sizeValue: string
) => {
  if (item.Type === "simple") return undefined;

  const variantNeeded = !!item.Variations[0]["Variant name"];
  const sizeNeeded = !!item.Variations[0]["Size name"];

  if (variantNeeded && sizeNeeded) {
    const filteredVarients = item.Variations.filter((variation) => {
      if (sizeValue) return variation["Size value(s)"] === sizeValue;
      return true;
    });
    const filteredSizes = item.Variations.filter((variation) => {
      if (variantValue) return variation["Variant value(s)"] === variantValue;
      return true;
    });
    return {
      variantOptions: reduceItemVariationOptionValues(
        filteredVarients,
        "Variant value(s)"
      ),
      sizeOptions: reduceItemVariationOptionValues(
        filteredSizes,
        "Size value(s)"
      ),
    };
  }
  if (variantNeeded)
    return {
      variantOptions: reduceItemVariationOptionValues(
        item.Variations,
        "Variant value(s)"
      ),
    };
  return {
    sizeOptions: reduceItemVariationOptionValues(
      item.Variations,
      "Size value(s)"
    ),
  };
};

const reduceItemVariationOptionValues = (
  Variations: StoreItemVariant[],
  valueKey: "Size value(s)" | "Variant value(s)"
) => {
  return Variations.reduce((acc, variation) => {
    const tempValue = variation[valueKey] as string;
    if (!acc.includes(tempValue)) return [...acc, tempValue];
    return acc;
  }, [] as string[]);
};

export const findSelectedItem = (
  item: StoreItem,
  variantValue: string,
  sizeValue: string
) => {
  if (item.Type === "simple") return item;

  const variantNeeded = !!item.Variations[0]["Variant name"];
  const sizeNeeded = !!item.Variations[0]["Size name"];

  if (variantNeeded && sizeNeeded)
    return item.Variations.find((variation) => {
      return (
        variation["Variant value(s)"] === variantValue &&
        variation["Size value(s)"] === sizeValue
      );
    });
  if (variantNeeded)
    return item.Variations.find((variation) => {
      return variation["Variant value(s)"] === variantValue;
    });
  return item.Variations.find((variation) => {
    return variation["Size value(s)"] === sizeValue;
  });
};
