import React, { useState } from "react";
import { NavBarItem } from "../../types/NavBar";
import MenuItem from "./MenuItem";
import styles from "../../styles/NavBar.module.css";

type DropdownProps = {
  subItems: NavBarItem[];
  parentDropdown: boolean;
  parentLink: string;
  depthLevel: number;
};

const Dropdown = ({
  subItems,
  parentDropdown,
  parentLink,
  depthLevel,
}: DropdownProps) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <ul
      className={`${styles.dropdown} ${
        styles[dropdownClass] ? styles[dropdownClass] : ""
      } ${parentDropdown ? styles.show : ""}`}
    >
      {subItems.map((item, index) => {
        return (
          <MenuItem
            item={item}
            key={index}
            parentLink={parentLink + item.link}
            depthLevel={depthLevel}
          />
        );
      })}
    </ul>
  );
};

export default Dropdown;
