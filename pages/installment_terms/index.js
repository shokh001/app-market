import React, { useState } from "react";
import Link from "next/link";
import InstallmentTermsForm from "../../components/InstallmentTermsForm";
import DeliveryAddress from "../../components/DeliveryAddress";
import styles from "./installment_terms.module.scss";
import YourOrderSection from "../../components/YourOrderSection";
import LinksOfPages from "../../components/LinksOfPages";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const Index = () => {
  const [controlItems, setControlItems] = useState(false);

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="main">

        <LinksOfPages />

        <div className={styles.fromWarp + " container d-flex"}>
          <div>
            <InstallmentTermsForm setControlItems={setControlItems} />
            <DeliveryAddress />
          </div>
          <YourOrderSection
            controlItems={controlItems}
            onHandClick={onOpenModal}
          />
        </div>

        <div className="container">
          <Link href="/">
            <a
              className={
                styles.back +
                " font-montserrat-regular text-decoration-none d-flex align-items-center"
              }
            >
              <span className="icon icon-back"></span>
              Вернуться в магазин
            </a>
          </Link>
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="modal-wrapper d-flex align-items-center">
          <img src="../assets/images/modal-img-one.png" alt="Happy Girl Img" />
          <div>
            <h3 className="modal-title font-montserrat-semi-bold ">
              Ваша заявка принята
            </h3>
            <p className="modal-text font-montserrat-regular">
              Ваша заявка принята, с вами свяжется оператор в течении 3-4 часов.
              Пожалуйста подождите!
            </p>
            <button
              className="modul-content__btn"
              type="button"
              onClick={onCloseModal}
            >
              Готово
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Index;
