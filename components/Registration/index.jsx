import React from "react";
import styles from "./registrationStyle.module.scss";

const RegistrationSection = () => {
  return (
    <div className={styles.registrationWrap + " d-flex"}>
      <div className={styles.registrationImg}>
        <img
          src="../assets/images/history.png"
          className="img-fluid"
          alt="History"
        />
      </div>
      <div className={styles.registrationContent}>
        <h2 className="font-montserrat-semi-bold">Вход</h2>
        <p className="font-montserrat-regular">
          Добро пожаловать , пожалуйста войдите
        </p>

        <form>
          <div>
            <input type="text" placeholder="Логин..." />
            <img src="./assets/icons/user.svg" alt="User" />
          </div>
          <div>
            <input type="password" placeholder="Пароль..." />
            <img src="./assets/icons/lock.svg" alt="Lock" />
          </div>
          <button type="submit" className="font-montserrat-regular">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationSection;
