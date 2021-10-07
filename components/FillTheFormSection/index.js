import React from "react";
import styles from "./FillTheFormStyle.module.scss";

const FillTheFormSection = () => {
  return (
    <div className={styles.formWrapper}>
      <h3 className={styles.formTitle + " font-montserrat-semi-bold"}>
        Заполните форму
      </h3>

      <form>
        <div className={styles.inputWrap}>
          <label className="font-montserrat-regular">Имя</label>
          <input type="text" />
        </div>
        <div className={styles.inputWrap}>
          <label>Номер</label>
          <input type="number" />
        </div>
        <div className={styles.inputWrap}>
          <label className="font-montserrat-regular">Город</label>
          <select>
            <option value=""></option>
            <option value="">Tashkent</option>
            <option value="">Bukhara</option>
            <option value="">Termiz</option>
            <option value="">Xiva</option>
          </select>
          <img
            src="../assets/icons/selectArrowIcon.svg"
            alt=">"
            width="11"
            height="6.46"
          />
        </div>
        <div className={styles.inputWrap}>
          <label className="font-montserrat-regular">Район</label>
          <select>
            <option value=""></option>
            <option value="">Tashkent</option>
            <option value="">Bukhara</option>
            <option value="">Termiz</option>
            <option value="">Xiva</option>
          </select>
          <img
            src="../assets/icons/selectArrowIcon.svg"
            alt=">"
            width="11"
            height="6.46"
          />
        </div>
        <div className={styles.inputWrap}>
          <label className="font-montserrat-regular">Адрес</label>
          <input type="text" />
        </div>
        <div className={styles.inputWrap}>
          <label className="font-montserrat-regular">Доставка</label>
          <select>
            <option value=""></option>
            <option value="toshkent">Tashkent</option>
            <option value="buxoro">Bukhara</option>
            <option value="termiz">Termiz</option>
            <option value="xiva">Xiva</option>
          </select>
          <img
            src="../assets/icons/selectArrowIcon.svg"
            alt=">"
            width="11"
            height=" 6.46"
          />
        </div>
      </form>
    </div>
  );
};

export default FillTheFormSection;
