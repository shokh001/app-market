import React from "react";
import styles from "./CatalogSectionItemStyle.module.scss";

const CatalogSectionItem = ({ value }) => {
  return (
    <div className={styles.catalogSectionItem}>
      <img src={value.src} alt="Natural" width="300" height="300" />
      <div className={styles.catalogSectionItemText}>
        <span className="font-montserrat-medium">{value.text}</span>
      </div>
    </div>
  );
};

export default CatalogSectionItem;
