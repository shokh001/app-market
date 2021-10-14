import React from "react";
import Link from 'next/link'
import styles from "./ProductCard.module.scss";

const ProductCard = ({ value }) => {
  // const { postId, id, name, email, body } = value;
  // console.log(value);
  return (
    <Link href='/product'>
      <a className={styles.ProductCard}>
        <div className={styles.cardHeader}>
          <p className="mb-0 font-montserrat-regular">
            <span></span> В рассрочку
          </p>
          <div className={styles.favourite}>
            <span className="icon icon-heart"></span>
            <div className={styles.toltip}>
              <p className="mb-0">Избранное</p>
            </div>
          </div>
        </div>

        <div className={styles.trolley}>
          <span className="icon icon-trolley"></span>
        </div>

        <div className={styles.cardBody}>
          <div className={styles.discount}>
            <span className="font-montserrat-regular m-0">
              <p className="font-montserrat-bold m-0 d-block">-20%</p> скидка
            </span>
          </div>
          <img
            className="img-fluid"
            src="./assets/images/camera.png"
            alt="productImg"
          />

          <p
            className={
              styles.deleteSum +
              " text-decoration-line-through mb-0 font-montserrat-medium"
            }
          >
            1 000 000 сум
          </p>
          <h4 className="mb-0 font-montserrat-medium"> 5 000 000 сум</h4>
          <h5 className="mb-0 font-montserrat-bold">AA EliteBook G2</h5>
        </div>
      </a>
    </Link>
  );
};

export default ProductCard;
