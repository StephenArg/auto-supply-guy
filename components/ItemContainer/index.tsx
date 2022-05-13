import React, { FC } from "react";
import styles from "../../styles/Item.module.css";
import { StoreItem } from "../../types/StoreItem";
import { categoriesToRoutesConversion } from "../../constants/categoryConversions";
import { getPriceRange } from "../../utils/utilFunctions";

type ItemContainerProps = {
  item: StoreItem;
};

const ItemContainer: FC<ItemContainerProps> = ({ item }) => {
  const imgSrc = item.Images?.split(", ")[0];
  const categoryNames = item.Categories?.split(" > ") || [];
  const categoryRoutes = categoryNames.map(
    (val) => categoriesToRoutesConversion[val]
  );

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
              <>
                <a
                  href={`/store/${categoryRoutes
                    .slice(0, index + 1)
                    .join("/")}`}
                >
                  {category}
                </a>
                /
              </>
            ))}
          </nav>
          <h2>{item.Name}</h2>
          {<p>{getPriceRange(item)}</p>}
          <div style={{ whiteSpace: "break-spaces" }}>
            <p>{item.Description}</p>
          </div>
        </div>
      </div>
      <section></section>
    </div>
  );
};

export default ItemContainer;
