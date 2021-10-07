import React from 'react'
import styles from './BasketsContentCard.module.scss'

const BasketsContentCard = () => {
    return (
        <div className={styles.BasketsContentCard}>
            <h3 className='font-montserrat-semi-bold'>Содержимое корзины</h3>
            <h6 className='font-montserrat-regular'>
                Товары:
                <span className='font-montserrat-semi-bold'>4</span>
            </h6>
            <h6 className='font-montserrat-regular'>
                Итог:
                <p className='font-montserrat-semi-bold mb-0 d-inline-block'>4 500 000сум</p>
            </h6>
            <div>
                <button type='button'>Купить сразу</button>
                <button type='button'>Купить в рассрочку</button>
            </div>

            <h6 className='font-montserrat-semi-bold mb-0'>от  300 000 сум/мес</h6>
            <h2 className='text-center mb-0'>Оплата производится по частям <br /> ежемесячно</h2>
        </div>
    )
}

export default BasketsContentCard
