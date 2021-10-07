import React, { useState } from "react";
import styles from "./yourOrderSectionStyle.module.scss";

const YourOrderSection = ({ controlItems, onHandClick }) => {
  const [checked, setChecked] = useState(false);

  const checkedFunc = () => {
    setChecked(!checked);
  };

  return (
    <div
      style={{ height: !controlItems ? "500px" : "654px" }}
      className={styles.yourOrderSectionWrapper}
    >
      <h2
        className={styles.yourOrderSectionTitle + " font-montserrat-semi-bold"}
      >
        Ваш заказ №54613
      </h2>

      <div className={styles.checkList}>
        <div className={styles.checkListHeader + " d-flex"}>
          <p className="font-montserrat-semi-bold mb-0">Товар</p>
          <p className="font-montserrat-semi-bold mb-0">Цена</p>
        </div>
        <div
          className={styles.checkListItem + " d-flex justify-content-between"}
        >
          <p className="font-montserrat-regular mb-0">
            Gold HeadPhones{" "}
            <span className="font-montserrat-semi-bold">x 1</span>
          </p>
          <p className="font-montserrat-regular mb-0">500 000 сум</p>
        </div>
        <div
          className={styles.checkListItem + " d-flex justify-content-between"}
        >
          <p className="font-montserrat-regular mb-0">
            Gold HeadPhones{" "}
            <span className="font-montserrat-semi-bold">x 2</span>
          </p>
          <p className="font-montserrat-regular mb-0">1 000 000 сум</p>
        </div>
        <div
          className={
            styles.checkListItem + " d-flex justify-content-between mb-3"
          }
        >
          <p className="font-montserrat-regular mb-0">
            Gold HeadPhones{" "}
            <span className="font-montserrat-semi-bold">x 1</span>
          </p>
          <p className="font-montserrat-regular mb-0">5 00 000 сум</p>
        </div>

        <div
          className={
            styles.checkListItem +
            " " +
            styles.generalSumma +
            " d-flex justify-content-between mb-0"
          }
        >
          <p className="font-montserrat-bold mb-0">Промежуточный итог</p>
          <p className="mb-0">2 000 000 сум</p>
        </div>
        <div
          className={
            styles.checkListItem +
            " " +
            styles.generalSumma +
            " d-flex justify-content-between mb-0"
          }
        >
          <p className="font-montserrat-bold mb-0">Сумма доставки</p>
          <p className="mb-0">0 сум</p>
        </div>
        <div
          className={
            styles.checkListItem +
            " " +
            styles.generalSumma +
            " d-flex justify-content-between mb-0"
          }
        >
          <p className="font-montserrat-bold mb-0">Итог</p>
          <p className="mb-0">2 000 000 сум</p>
        </div>
      </div>

      {controlItems && (
        <h2
          className={
            styles.yourOrderSectionTitle + " font-montserrat-semi-bold mb-3"
          }
        >
          Способ оплаты
        </h2>
      )}
      {controlItems && (
        <div
          className={styles.PaymentMethodWrap + " d-flex align-items-center"}
        >
          <div className={styles.PaymentMethodItem}>
            <div
              className={
                styles.paymentIconWrap +
                " " +
                styles.paymentIconWrapOne +
                " d-flex align-items-center justify-content-center"
              }
            >
              <img src="../assets/icons/payme.svg" alt="Payme" />
            </div>
            <span className="font-montserrat-regular">Payme</span>
          </div>
          <div className={styles.PaymentMethodItem}>
            <div
              className={
                styles.paymentIconWrap +
                " " +
                styles.paymentIconWrapTwo +
                " d-flex align-items-center justify-content-center"
              }
            >
              <img src="../assets/icons/click-logo.svg" alt="Apelsin" />
            </div>
            <span className="font-montserrat-regular">Click</span>
          </div>
          <div className={styles.PaymentMethodItem}>
            <div
              className={
                styles.paymentIconWrap +
                " " +
                styles.paymentIconWrapThree +
                " d-flex align-items-center justify-content-center"
              }
            >
              <img src="../assets/icons/apelsin.svg" alt="Apelsin" />
            </div>
            <span className="font-montserrat-regular">Apelsin</span>
          </div>
          <div className={styles.PaymentMethodItem}>
            <div
              className={
                styles.paymentIconWrap +
                " " +
                styles.paymentIconWrapFour +
                " d-flex align-items-center justify-content-center"
              }
            >
              <img src="../assets/icons/With-cash.svg" alt="Apelsin" />
            </div>
            <span className="font-montserrat-regular">Наличными</span>
          </div>
        </div>
      )}

      {controlItems && (
        <div className={styles.readTheTerms + " d-flex align-items-center"}>
          <p className="font-montserrat-regular mb-0">
            Ознакомился с условием публичной оферты
          </p>
          <div onClick={checkedFunc}>
            <img
              className={checked ? "d-block" : "d-none"}
              src="../assets/icons/icon-check.svg"
              alt="+"
            />
          </div>
        </div>
      )}

      <button
        type="button"
        className={styles.checkitOutBtn}
        onClick={onHandClick}
      >
        Оформить заказ
      </button>
    </div>
  );
};

export default YourOrderSection;
