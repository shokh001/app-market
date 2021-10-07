import React from 'react'
import MyOrdersCard from '../MyOrdersCard';
import PersonalDataCard from '../PersonalDataCard';
// import ProfilePhoneNumber from '../ProfilePhoneNumber';
import styles from './Profile.module.scss'

const Profile = () => {
    

    return (
        <div className={styles.profile + ' container'}>
            <h3 className='font-montserrat-bold'>Профиль</h3>
            <div className={styles.user}>
                <div className={styles.userImg}>EH</div>
                <div className={styles.userName}>
                    <h4 className='font-montserrat-semi-bold'>Esther Howard</h4>
                    <p className='font-montserrat-regular'>
                        <span className='icon icon-user'></span>
                        Статус: <span className='font-montserrat-semi-bold'>пользователь</span>
                    </p>
                    <p className='font-montserrat-regular'>
                        <span className='icon icon-calendar'></span>
                        Дата регистрации: <span className='font-montserrat-semi-bold'>23.03.2020</span>
                    </p>
                </div>
            </div>

            <div className='d-flex'>
                <div className={styles.personalCard}>
                    <p className='font-montserrat-semi-bold'>
                        <span className='icon icon-user'></span>
                        Личные данные
                    </p>
                    <p className='font-montserrat-regular'>
                        <span className='icon icon-phone'></span>
                        Изменить номер телефона
                    </p>
                    <p className='font-montserrat-regular'>
                        <span className='icon icon-truck'></span>
                        Мои заказы
                    </p>

                    <p className='font-montserrat-regular'>Заказы в рассрочку</p>

                    <button type='button'>
                        <span className='icon icon-logout'></span>
                        ВЫЙТИ
                    </button>
                </div>

                <MyOrdersCard />                

                {/* <ProfilePhoneNumber /> */}

                {/* <PersonalDataCard /> */}
            </div>
        </div>
    )
}

export default Profile
