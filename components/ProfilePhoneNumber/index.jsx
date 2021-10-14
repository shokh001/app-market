import React, { useState } from 'react'
import Link from 'next/link'
import styles from './ProfilePhoneNumber.module.scss'

const ProfilePhoneNumber = () => {

    return (
        <div className={styles.phoneNumber}>
            <div>
                <h2 className='font-montserrat-bold'>Номер телефона</h2>
                <input className='font-montserrat-regular' type="number" placeholder='+99890 721 83 31' />

                <Link href='/enter_your_phone_number'>
                    <a className='font-montserrat-regular'>Изменить</a>
                </Link>
            </div>
        </div>
    )
}

export default ProfilePhoneNumber
