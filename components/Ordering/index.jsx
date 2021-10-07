import React from 'react'
import styles from './Ordering.module.scss'

const Ordering = () => {
    return (
        <div className={styles.Ordering}>
            <h2 className='font-montserrat-semi-bold'>Для сотрудничества заполните все поля и
                мы в скором времени свяжемся с вами</h2>

            <input type="text" placeholder='Имя заявителя' />
            <input type="text" placeholder='Название компании' />
            <input type="text" placeholder='Эл.почта' />
            <input type="text" placeholder='Контактный номер' />
            <input type="text" placeholder='Адрес компании' />
        </div>
    )
}

export default Ordering
