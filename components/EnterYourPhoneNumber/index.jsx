import React from 'react'
import Link from 'next/link'
import styles from '../ProfilePhoneNumber/ProfilePhoneNumber.module.scss'

const EnterYourPhoneNumber = () => {

    return (
        <div className={styles.phoneNumber}>
            <div>
                <h2 className='font-montserrat-bold'>Номер телефона</h2>
                <input className='font-montserrat-regular' type="number" placeholder='Введите номер телефона' />

                <Link href='/enter_code_from_sms'>
                    <a className='font-montserrat-regular'>Далее</a>
                </Link>
            </div>
        </div>
    )
}

export default EnterYourPhoneNumber
