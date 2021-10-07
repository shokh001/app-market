import React, { useState } from "react";
import styles from "./SearchforTvStyle.module.scss";

const SearchforTV = () => {
  const [active, setActive] = useState(1);
  const [radioBox, setRadioBox] = useState(1);

  return (
    <div className={styles.SearchforTvWrap}>
      <h2 className="font-montserrat-bold">Цена, сум</h2>
      <div className={styles.summa + " d-flex align-items-center"}>
        <p className="font-montserrat-regular">от 50 000</p>
        <span />
        <p className="font-montserrat-regular">до 20 000 000</p>
      </div>
      <div className={styles.productsName}>
        <div
          className={
            active === 1
              ? styles.activeName + " font-montserrat-bold"
              : "font-montserrat-regular"
          }
          onClick={() => setActive(1)}
        >
          Телевизоры
        </div>
        <div
          className={
            active === 2
              ? styles.activeName + " font-montserrat-bold"
              : "font-montserrat-regular"
          }
          onClick={() => setActive(2)}
        >
          Видеотехника и фототехника
        </div>
        <div
          className={
            active === 3
              ? styles.activeName + " font-montserrat-bold"
              : "font-montserrat-regular"
          }
          onClick={() => setActive(3)}
        >
          Цифровое ТВ и аксуссуары
        </div>
        <div
          className={
            active === 4
              ? styles.activeName + " font-montserrat-bold"
              : "font-montserrat-regular"
          }
          onClick={() => setActive(4)}
        >
          Аудио и техника
        </div>
      </div>
      <div className={styles.brendNames}>
        <h2 className="font-montserrat-bold border-0 pt-0">Бренды</h2>
        <div
          className={styles.brendName + " d-flex align-item-center"}
          onClick={() => setRadioBox(1)}
        >
          <div
            className={
              radioBox === 1
                ? styles.square + " " + styles.activeRadio
                : styles.square
            }
          />
          <span className="font-montserrat-regular">Artel</span>
        </div>
        <div
          className={styles.brendName + " d-flex align-item-center"}
          onClick={() => setRadioBox(2)}
        >
          <div
            className={
              radioBox === 2
                ? styles.square + " " + styles.activeRadio
                : styles.square
            }
          />
          <span className="font-montserrat-regular">Shivaki</span>
        </div>
        <div
          className={styles.brendName + " d-flex align-item-center"}
          onClick={() => setRadioBox(3)}
        >
          <div
            className={
              radioBox === 3
                ? styles.square + " " + styles.activeRadio
                : styles.square
            }
          />
          <span className="font-montserrat-regular">Work-space</span>
        </div>
      </div>
    </div>
  );
};

export default SearchforTV;
