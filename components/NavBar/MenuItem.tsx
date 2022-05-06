import React, { useEffect, useRef, useState } from "react";
import { NavBarItem } from "../../types/NavBar";
import Dropdown from "./Dropdown";
import styles from "../../styles/NavBar.module.css";

type MenuItemProps = {
  item: NavBarItem;
  parentLink: string;
  depthLevel: number;
};

const MenuItem = ({ item, parentLink, depthLevel }: MenuItemProps) => {
  const [dropdown, setDropdown] = useState<boolean>(false);
  // const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // const handleMouse = (bool: boolean) => {
  //   if (!bool) {
  //     timer.current && clearTimeout(timer.current);
  //     timer.current = setTimeout(() => {
  //       setDropdown(bool);
  //     }, 5000);
  //   } else {
  //     timer.current = null;
  //     setDropdown(bool);
  //   }
  // };

  const handleMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const handleMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className={`${styles["menu-items"]} ${
        depthLevel === 0 ? styles["top-level-items"] : "sub-level-items"
      }`}
    >
      {item.subItems ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="subMenu-wrapper"
        >
          <a
            href={parentLink || item.link}
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
          >
            {item.title}{" "}
            {depthLevel > 0 ? (
              <span>&raquo;</span>
            ) : (
              <span className={styles.arrow} />
            )}
          </a>
          <Dropdown
            subItems={item.subItems}
            parentDropdown={dropdown}
            parentLink={parentLink}
            depthLevel={depthLevel}
          />
        </div>
      ) : (
        <a href={parentLink || item.link}>{item.title}</a>
      )}
    </li>
  );
};

export default MenuItem;
