import React from "react";
import { navBarItems } from "../../data/NavBarItems";
import MenuItem from "./MenuItem";
import styles from "../../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles["nav-area"]}>
      <nav>
        <ul className={styles.menus}>
          {navBarItems.map((item, index) => {
            const depthLevel = 0;
            return (
              <MenuItem
                item={item}
                key={index}
                parentLink={item.link}
                depthLevel={depthLevel}
              />
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

// https://blog.logrocket.com/creating-multilevel-dropdown-menu-react/
// https://github.com/Ibaslogic/react-multilevel-dropdown-menu/blob/main/src/App.css
