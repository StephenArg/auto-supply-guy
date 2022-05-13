import React, { FC } from "react";
import styles from "../../../styles/Store.module.css";
import { StoreItem as StoreItemType } from "../../../types/StoreItem";
import StoreItem from "./StoreItem";

type StoreItemsContainerProps = {
  items: StoreItemType[];
};

const StoreItemsContainer: FC<StoreItemsContainerProps> = ({ items }) => {
  return (
    <div className={styles["store-items-container"]}>
      {items.map((item) => (
        <StoreItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default StoreItemsContainer;
