import React from "react";
import styles from "./BasketStyle.module.scss";

const Basket = () => {
  return (
    <div className="container">
      <div className={styles.basketSectionWrapper}>
        <div
          className={styles.basketSectionHeader + " d-flex align-items-center"}
        >
          <p className="mb-0 font-montserrat-regular">Все категории</p>
          <img
            src="../assets/icons/icon-left-arrow.svg"
            alt=">"
            width="6.46"
            height="11"
          />
          <span className="font-montserrat-semi-bold">Корзина</span>
        </div>
        <div
          className={
            styles.basketSectionBody + " d-flex justify-content-center"
          }
        >
          <div className={styles.basketImg}>
            <img
              src="../assets/images/basketImg.png"
              alt="Basket"
              width="703.89"
              height="698"
            />
          </div>
          <div className={styles.basketContent}>
            <h2 className={styles.h2 + " font-montserrat-semi-bold"}>
              Корзина пуста
            </h2>
            <p className="font-montserrat-regular">
              Чтобы добавить в корзину , выберите из катиалога
            </p>
            <button type="button">В каталог</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
