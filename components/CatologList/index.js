import React, { useState } from "react";
import styles from "./CatalogList.module.scss";

const CatalogList = () => {
  const [activeBlock, setActiveBlock] = useState(1);

  return (
    <div className={styles.catalogListWrap}>
      <h2 className="font-montserrat-semi-bold">Каталог</h2>
      <div onClick={() => setActiveBlock(1)}>
        <span
          className={
            activeBlock === 1
              ? " icon icon-electronics"
              : styles.colorChange + " icon icon-electronics"
          }
        />
        <span
          className={
            activeBlock === 1
              ? styles.text +
                " " +
                styles.colorChangeText +
                " font-montserrat-medium"
              : styles.text + " font-montserrat-regular"
          }
        >
          Электроника
        </span>
      </div>
      <div onClick={() => setActiveBlock(2)}>
        <span
          className={
            activeBlock === 2
              ? "icon icon-washer"
              : "icon icon-washer " + styles.darkIcon
          }
        />
        <span
          className={
            activeBlock === 2
              ? styles.text +
                " " +
                styles.colorChangeText +
                " font-montserrat-medium"
              : styles.text + " font-montserrat-regular"
          }
        >
          Бытовая техника
        </span>
      </div>
    </div>
  );
};

export default CatalogList;
