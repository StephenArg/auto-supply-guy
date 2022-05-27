import React, { FC, useState } from "react";
import styles from "../../styles/Item.module.css";

type SelectorProps = {
  optionType: string;
  itemOptions: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const Selector: FC<SelectorProps> = ({
  optionType,
  value,
  setValue,
  itemOptions,
}) => {
  return (
    <div className={styles["item-selector"]}>
      <label>{optionType}</label>
      <select onChange={(e) => setValue(e.target.value)} value={value}>
        <option value="">Choose an Option</option>
        {itemOptions.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      {value ? (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setValue("");
          }}
        >
          CLEAR
        </a>
      ) : (
        <br />
      )}
    </div>
  );
};

export default Selector;
