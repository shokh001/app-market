import React from "react";
import styles from "./footerStyle.module.scss";
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.footerWrappper}>
      <div className="container d-flex justify-content-between">
        <div className={styles.footerLeft}>
          <a href="#" className={styles.footerLogo}>
            <img
              src="../assets/images/logo.svg"
              alt="LOGO"
              width="77"
              height="37"
            />
          </a>
          <div className={styles.socials + " d-flex align-items-center"}>
            <a href="#" className={styles.iconInstagram}>
              <img src="../assets/icons/instagram.svg" alt="Instagram" />
            </a>
            <a href="#" className={styles.iconFacebook}>
              <img src="../assets/icons/facebook.svg" alt="Facebook" />
            </a>
            <a href="#" className={styles.iconTelegram}>
              <img src="../assets/icons/telegram.svg" alt="Telegram" />
            </a>
          </div>
        </div>
        <div className={styles.footerCenter + " d-flex align-items-center"}>
          <div className={styles.footerLinks}>
            <ul>
              <li>
                <Link href="/about">
                  <a className="font-montserrat-medium">
                    О нас
                  </a>
                </Link>
              </li>
              <li>
                <a className="font-montserrat-medium" href="#">
                  Публичная оферта
                </a>
              </li>
              <li>
                <a className="font-montserrat-medium" href="#">
                  Условия рассрочки
                </a>
              </li>
              <li>
                <a className="font-montserrat-medium" href="#">
                  Условия доставки
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.footerCenterRight}>
            <Link href="/shop">
              <a className="font-montserrat-semi-bold">
                <img
                  src="../assets/icons/market.svg"
                  alt="Market"
                  width="17"
                  height="17"
                />
                Магазины
              </a>
            </Link>
            <a href="#" className="font-montserrat-semi-bold">
              <img
                src="../assets/icons/entrance.svg"
                alt="Market"
                width="17"
                height="17"
              />
              Войти в кабинет продавца
            </a>
          </div>
        </div>
        <Link href='/catalog'>
          <a className={styles.footerRight}>
            <button type="button" className={styles.footerBtn}>
              В каталог
            </button>
          </a>
        </Link>
      </div>
      <p className={styles.footerBottom + " font-montserrat-medium"}>
        2020 © Byshop. uz
      </p>
    </footer>
  );
};

export default Footer;
