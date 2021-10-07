import React from "react";
import styles from "./SelectedItemStyle.module.scss";

const SelectedItem = ({ value }) => {
  return (
    <div
      className={
        styles.SelectedItemBox +
        " d-flex align-items-center justify-content-between"
      }
    >
      <div
        className={styles.SelectedItemBoxLeft + " d-flex align-items-center"}
      >
        <img
          className={styles.productImg}
          src="../assets/images/earphones.png"
          alt="Product-img"
          width="114"
          height="118.56"
        />
        <p className={styles.productName + " mb-0 font-montserrat-medium"}>
          {value.name}
        </p>
        <button
          type="button"
          className={
            styles.seeBtn + " font-montserrat-medium d-flex align-items-center"
          }
        >
          Просмотр <span className={styles.egeIcon + " icon icon-ege"} />
        </button>
      </div>
      <div
        className={styles.SelectedItemBoxRight + " d-flex align-items-center"}
      >
        <p className={styles.productMoney + " mb-0 font-montserrat-medium"}>
          {value.money} сум
        </p>
        <div
          className={
            styles.shopCartImgWrap +
            " d-flex align-items-center justify-content-center"
          }
        >
          <span className={styles.shopCartImg + " icon icon-trolley d-block"} />
        </div>
        <div className={styles.deleteBtn}>
          <img
            src="../assets/icons/delete-icon.svg"
            alt="Delete"
            width="15.44"
            height="19"
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedItem;
