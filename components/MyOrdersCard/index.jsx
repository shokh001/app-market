import React from 'react'
import styles from './MyOrdersCard.module.scss';

const MyOrdersCard = () => {
    return (
        <div className={styles.MyOrdersCard}>
            <h2 className='font-montserrat-bold'>Мои заказы</h2>
            {/* <div className={styles.card}>
                <div className={styles.product}>
                    <img src="./assets/images/camera.png" alt="product-img" />
                    <ul>
                        <li>Номер заказа:  <span className='font-montserrat-semi-bold'>50687</span></li>
                        <li>Название:  <span className='font-montserrat-semi-bold'>Lorem Ipsum</span></li>
                        <li>Дата заказа:  <span className='font-montserrat-semi-bold'>02/07/2021</span></li>
                        <li>Вид покупки: <span className='font-montserrat-semi-bold'> Наличка/рассрочка</span></li>
                    </ul>
                </div>

                <div className={styles.productPrice}>
                    <h3 className='font-montserrat-bold'>2 000 000 сум</h3>
                    <button type='button'>Куплено</button>
                </div>
            </div> */}

            <div className={styles.cardInfo}>
                <div className={styles.cardHeader}>
                    <h4 className='font-montserrat-bold'>
                        Номер заказа №777888
                    </h4>

                    <button className='font-montserrat-regular' type='button'>
                        <span className='icon icon-trolley'></span>
                        Написать отзыв
                    </button>
                </div>

                <div className={styles.cardBody}>
                    <div className="">
                        <div className={styles.product}>
                            <img src="./assets/images/camera.png" alt="product-img" />
                            <h3 className='font-montserrat-regular'>Название товара</h3>
                        </div>
                        <div className={styles.product}>
                            <img src="./assets/images/camera.png" alt="product-img" />
                            <h3 className='font-montserrat-regular'>Название товара</h3>
                        </div>
                        <div className={styles.product}>
                            <img src="./assets/images/camera.png" alt="product-img" />
                            <h3 className='font-montserrat-regular'>Название товара</h3>
                        </div>
                    </div>

                    <ul>
                        <li>Номер заказа:  <span className='font-montserrat-semi-bold'>153251</span></li>
                        <li>Время заказа:  <span className='font-montserrat-semi-bold'>12:00</span></li>
                        <li>Общая стоимость:  <span className='font-montserrat-semi-bold'>2 000 000 сум</span></li>
                        <li>Контактное лицо: <span className='font-montserrat-semi-bold'> John Washington</span></li>
                        <li>Телефон: <span className='font-montserrat-semi-bold'> +99890 555 65 14</span></li>
                        <li>Адрес: <span className='font-montserrat-semi-bold'> 4517 Washington Ave. Manchester, Kentucky 39495</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MyOrdersCard
