import React from "react";
import styles from "./favoritesStyle.module.scss";

const FavoritesSection = ({ title, text, srcc, toggle }) => {
  return (
    <div className={styles.favoritesSectionWrap}>
      <img src={srcc} alt="Empty box" />
      <div className={styles.favoritesContent}>
        <h2 className={styles.favoritesTitle + " font-montserrat-bold"}>
          {title}
        </h2>

        {toggle ? (
          <p className={styles.favoritesText + " font-montserrat-regular"}>
            {text}
          </p>
        ) : (
          <div>
            <p
              className={
                styles.favoritesText + " font-montserrat-semi-bold mb-2"
              }
            >
              По вашему запросу lorem ipsum ничего не найдено
            </p>
            <ul className={styles.favoritesText + " font-montserrat-regular"}>
              <li className="list-item">
                попробуйте изменить упростить запрос
              </li>
              <li className="list-item">
                старайтесь использовать только ключевые слова
              </li>
              <li className="list-item">проверьте правильность написания</li>
            </ul>
          </div>
        )}
        <button className={styles.favoritesBtn + " font-montserrat-regular"}>
          Вернуться в каталог
        </button>
      </div>
    </div>
  );
};

export default FavoritesSection;
