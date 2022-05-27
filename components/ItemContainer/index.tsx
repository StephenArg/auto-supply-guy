import React, { FC, useState } from "react";
import styles from "../../styles/Item.module.css";
import { StoreItem } from "../../types/StoreItem";
import { categoriesToRoutesConversion } from "../../constants/categoryConversions";
import {
  allOptionsSelected,
  findSelectedItem,
  getPriceRange,
  variationOptionsAvailable,
} from "../../utils/utilFunctions";
import Selector from "./Selector";

type ItemContainerProps = {
  item: StoreItem;
};

const ItemContainer: FC<ItemContainerProps> = ({ item }) => {
  const imgSrc = item.Images?.split(", ")[0];
  const categoryNames = item.Categories?.split(" > ") || [];
  const categoryRoutes = categoryNames.map(
    (val) => categoriesToRoutesConversion[val]
  );
  const [variantValue, setVariantValue] = useState("");
  const [sizeValue, setSizeValue] = useState("");

  const optionsAvailable = variationOptionsAvailable(
    item,
    variantValue,
    sizeValue
  );

  const selectedVariation = findSelectedItem(item, variantValue, sizeValue);

  console.log(item);

  return (
    <div className={styles["item-container"]}>
      <div className={styles["item-div-top"]}>
        <div className={styles["item-img"]}>
          <img src={imgSrc} alt={item.Name} />
        </div>
        <div className={styles["item-details"]}>
          <nav>
            <a href="/">Home</a>/<a href="/store">Shop</a>/
            {categoryNames.map((category, index) => (
              <a
                key={index}
                href={`/store/${categoryRoutes.slice(0, index + 1).join("/")}`}
              >
                {category}/
              </a>
            ))}
          </nav>
          <h2>{item.Name}</h2>
          {<p>{getPriceRange(item)}</p>}
          <div style={{ whiteSpace: "break-spaces" }}>
            <p>{item.Description}</p>
          </div>
          {optionsAvailable?.variantOptions && (
            <Selector
              optionType={item["Variant name"] as string}
              itemOptions={optionsAvailable.variantOptions}
              value={variantValue}
              setValue={setVariantValue}
            />
          )}
          {optionsAvailable?.sizeOptions && (
            <Selector
              optionType={item["Size name"] as string}
              itemOptions={optionsAvailable.sizeOptions}
              value={sizeValue}
              setValue={setSizeValue}
            />
          )}
          {selectedVariation && item.Type !== "simple" && (
            <div>
              <p>{selectedVariation?.Description}</p>
              <p>${selectedVariation?.Price?.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
      <section></section>
    </div>
  );
};

export default ItemContainer;
