import React, { FC } from "react";
import styles from "../../styles/Store.module.css";
import { StoreItem } from "../../types/StoreItem";
import Filter from "./Filter";
import StoreItems from "./StoreItems";

type StoreContainerProps = {
  items: StoreItem[];
};

const StoreContainer: FC<StoreContainerProps> = ({ items }) => {
  return (
    <div className={styles["store-container"]}>
      <Filter />
      <StoreItems items={items} />
    </div>
  );
};

export default StoreContainer;
