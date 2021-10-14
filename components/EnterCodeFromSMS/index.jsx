import React from 'react'
import Link from 'next/link'
import styles from '../ProfilePhoneNumber/ProfilePhoneNumber.module.scss'

const EnterCodeFromSMS = () => {

    return (
        <div className={styles.phoneNumber}>
            <div>
                <h2 className='font-montserrat-bold'>Номер телефона</h2>
                <p className='font-montserrat-regular'>На номер +998 90 999 60 54 было выслано СМС сообщение с кодом </p>
                <input className='font-montserrat-regular' type="number" placeholder='Введите код из SMS' />

                <h5 className='font-montserrat-regular'>Отправить повторный код можно через: ** : **</h5>

                <Link href='#'>
                    <a className='font-montserrat-regular'>Подтвердить</a>
                </Link>
            </div>
        </div>
    )
}

export default EnterCodeFromSMS
