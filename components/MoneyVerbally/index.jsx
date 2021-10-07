import React, { useState } from "react";
import styles from "./moneyVerballyStyle.module.scss";

const MoneyVerbally = () => {
  const [startValue, setStartValue] = useState(0);
  const [endValue, setEndValue] = useState(0);
  return (
    <div className={styles.moneyVerballyWrap}>
      <h2 className="font-montserrat-bold">Цена</h2>

      <div className="d-flex align-items-center mb-3">
        <div className="me-4">
          <label className="d-block font-montserrat-regular">От</label>
          <input
            type="text"
            placeholder="130 000"
            className="font-montserrat-regular"
            onChange={(e) => setStartValue(e.target.value)}
          />
        </div>
        <div>
          <label className="d-block font-montserrat-regular">До</label>
          <input
            type="text"
            placeholder="130 000"
            onChange={(e) => setEndValue(e.target.value)}
            className="font-montserrat-regular"
          />
        </div>
      </div>
      <input
        //    onChange={(e) => setEndValue(endValue * e.target.value)}
        type="range"
        className={styles.rangeType + " d-block"}
      />
      <div
        className={
          styles.value + " d-flex align-items-center justify-content-between"
        }
      >
        <h3 className="font-montserrat-regular">{startValue}</h3>
        <h3 className="font-montserrat-regular">{endValue}</h3>
      </div>
    </div>
  );
};

export default MoneyVerbally;
