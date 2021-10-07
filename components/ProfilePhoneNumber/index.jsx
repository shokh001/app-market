import React from 'react'
import styles from './ProfilePhoneNumber.module.scss'

const ProfilePhoneNumber = () => {
    return (
        <div className={styles.phoneNumber}>
            <div>
                <h2 className='font-montserrat-bold'>Номер телефона</h2>
                <input className='font-montserrat-regular' type="number" placeholder='+99890 721 83 31' />

                <button type='button'>Изменить</button>
            </div>

            {/* <div>
                <h2 className='font-montserrat-bold'>Номер телефона</h2>
                <p className='font-montserrat-regular'>На номер +998 90 999 60 54 было выслано СМС сообщение с кодом </p>
                <input className='font-montserrat-regular' type="number" placeholder='Введите код из SMS' />

                <h5 className='font-montserrat-regular'>Отправить повторный код можно через: ** : **</h5>

                <button type='button'>Изменить</button>
            </div> */}
        </div>
    )
}

export default ProfilePhoneNumber
