import React, { useState } from 'react'
import Link from 'next/link'
import styles from './ProductDescription.module.scss'

const ProductDescription = () => {
    const [showTextarea, setShowTextarea] = useState(false)
    return (
        <div className={styles.ProductDescription}>
            <div className={styles.leftContent}>
                <h5 className='font-montserrat-semi-bold'>Описание</h5>
                <div className='d-flex'>
                    <div className=''>
                        <h6 className='font-montserrat-semi-bold'>Гарантия:</h6>
                        <h6 className='font-montserrat-semi-bold'>Цвет:</h6>
                        <h6 className='font-montserrat-semi-bold'>Страна производителя:</h6>
                        <h6 className='font-montserrat-semi-bold'>Аккумулятор:</h6>
                        <h6 className='font-montserrat-semi-bold'>Количество аккумуляторов:</h6>
                        <h6 className='font-montserrat-semi-bold'>Фокусное расстояние объектива:</h6>
                        <h6 className='font-montserrat-semi-bold'>Интерфейсы:</h6>
                        <h6 className='font-montserrat-semi-bold'>Тип камеры:</h6>
                    </div>
                    <div className="">
                        <p className='font-montserrat-regular'>6 месяцев</p>
                        <p className='font-montserrat-regular'>Чёрный</p>
                        <p className='font-montserrat-regular'>Китай</p>
                        <p className='font-montserrat-regular'>рнесъёмный Li-Ion</p>
                        <p className='font-montserrat-regular'>1</p>
                        <p className='font-montserrat-regular'>8-135 мм</p>
                        <p className='font-montserrat-regular'>Wi-Fi, USB, Bluetooth, HDMI, NFC, микрофонный вход, разъем для пульта ДУ</p>
                        <p className='font-montserrat-regular'>Зеркальная</p>
                    </div>
                </div>
                <Link href="/">
                    <a className='font-montserrat-semi-bold'>Показать больше...</a>
                </Link>
            </div>
            <div className={styles.rightContent}>
                <h5 className='font-montserrat-semi-bold'>Отзывы</h5>

                <div className={styles.box}>
                    <div className='d-flex align-items-center justify-content-between'>
                        <h4 className='font-montserrat-semi-bold'>Al Capone</h4>
                        <span className='font-montserrat-regular'>04 декбря 2021 года</span>
                    </div>

                    <p className='font-monserrat-regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non vel sed mattis ut etiam porta lobortis aliquam.</p>
                </div>

                <h5 className='font-montserrat-semi-bold'>Напишите свой отзыв</h5>

                <button onClick={() => setShowTextarea(true)} type='button'>Написать отзыв</button>

                <div style={{ display: showTextarea ? 'block' : 'none' }} className={styles.textareaWrap}>
                    <textarea name="" id="" cols="30" rows="10" placeholder='Введите текст...'></textarea>
                    <button onClick={() => setShowTextarea(false)} className='d-block ms-auto' type='button'>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription
