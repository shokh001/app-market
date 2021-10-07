import React from "react";
import CatalogSectionItem from "./CatalogSectionItem";
import styles from "./CatalogStyle.module.scss";

const CatalogSection = () => {
  const CatalogData = [
    {
      id: "1",
      src: "../assets/images/catalog-img-one.png",
      text: "ЭЛЕКТРОНИКА",
    },
    {
      id: "2",
      src: "../assets/images/catalog-img-two.png",
      text: "СТРОЙТЕЛЬСТВО",
    },
    {
      id: "3",
      src: "../assets/images/catalog-img-three.png",
      text: "ИГРЫ",
    },
    {
      id: "4",
      src: "../assets/images/catalog-img-four.png",
      text: "ДОМ И САД",
    },
    {
      id: "5",
      src: "../assets/images/catalog-img-five.png",
      text: "БЫТОВАЯ ТЕХНИКА",
    },
    {
      id: "6",
      src: "../assets/images/catalog-img-six.png",
      text: "АВТОТОВАРЫ",
    },
    {
      id: "7",
      src: "../assets/images/catalog-img-seven.png",
      text: "МЕБЕЛЬ",
    },
  ];

  return (
    <div className={styles.catalogSectionWrap}>
      <h2 className={styles.catalogSectionTitle + " font-montserrat-bold "}>
        Каталог
      </h2>

      <div className={styles.catalogSectionItemWrap}>
        {CatalogData.map((value) => {
          return <CatalogSectionItem value={value} key={value.id} />;
        })}
      </div>
    </div>
  );
};

export default CatalogSection;
