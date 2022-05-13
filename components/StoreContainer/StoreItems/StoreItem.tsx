import React, { FC } from "react";
import styles from "../../../styles/Store.module.css";
import { StoreItem } from "../../../types/StoreItem";
import Router from "next/router";
import { getPriceRange } from "../../../utils/utilFunctions";
import { LazyLoadImage } from "react-lazy-load-image-component";

type StoreItemProps = {
  item: StoreItem;
};

const StoreItem: FC<StoreItemProps> = ({ item }) => {
  const imageSrc = item.Images?.split(", ")[0] || "";

  const handleClick = () => {
    Router.push(`/shop/${item.SKU}`);
  };

  return (
    <div className={styles["store-item"]} onClick={handleClick}>
      <LazyLoadImage src={imageSrc} alt={item.Name} loading="lazy" />
      <div className={styles["store-item-text"]}>
        <p>{item.Name}</p>
        <p>{getPriceRange(item)}</p>
      </div>
    </div>
  );
};

export default StoreItem;
