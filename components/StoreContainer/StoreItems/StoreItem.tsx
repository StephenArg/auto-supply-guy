import React, { FC } from "react";
import styles from "../../../styles/Store.module.css";
import { StoreItem } from "../../../types/StoreItem";
import Router from "next/router";

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
      <img src={imageSrc} alt={item.Name}></img>
      <div className={styles["store-item-text"]}>
        <p>
          {item.Name}
          {item.Price && <> - ${item.Price.toFixed(2)}</>}
        </p>
      </div>
    </div>
  );
};

export default StoreItem;
