import React from "react";
import SelectedItem from "./SelectedItem";
import styles from "./SelectedListStyle.module.scss";

const SelectedList = () => {
  const SelectedProductsData = [
    { id: 1, name: "Gold HeadPhones", money: "100 000" },
    { id: 2, name: "Gold HeadPhones", money: "100 000" },
    { id: 3, name: "Gold HeadPhones", money: "100 000" },
    { id: 4, name: "Gold HeadPhones", money: "100 000" },
    { id: 5, name: "Gold HeadPhones", money: "100 000" },
  ];

  return (
    <div className={styles.SelectedListWrapper}>
      <div className='container'>
        <h2 className={styles.SelectedListTitle + " font-montserrat-bold"}>
          Избранное
        </h2>

        <div className={styles.SelectedProducts}>
          <div className={styles.SelectedProductsHeader + " d-flex text-center"}>
            <div className={styles.SelectedProductsHeaderLeft}>
              <p className="font-montserrat-medium mb-0">Товар</p>
            </div>
            <div className={styles.SelectedProductsHeaderRight}>
              <p className="font-montserrat-medium mb-0">Цена</p>
            </div>
          </div>
          <div className={styles.SelectedProductBody}>
            {SelectedProductsData.map((item) => {
              return <SelectedItem value={item} key={item.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedList;
