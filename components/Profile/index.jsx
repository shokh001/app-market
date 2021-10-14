import React from 'react'
import MyOrdersCard from '../MyOrdersCard';
import PersonalDataCard from '../PersonalDataCard';
import ProfilePhoneNumber from '../ProfilePhoneNumber';
import styles from './Profile.module.scss'
import Link from 'next/link'
import EnterYourPhoneNumber from '../EnterYourPhoneNumber';
import EnterCodeFromSMS from '../EnterCodeFromSMS';

const Profile = (
    { change_phone_number,
        enter_code_from_sms,
        enter_phone_number,
        create_account,
        my_orders }
) => {

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

            <div className='d-flex align-items-start position-relative'>
                <div className={styles.personalCard}>
                    <Link href='/create_account'>
                        <a style={{ fontWeight: create_account && 600 }} className='font-montserrat-regular'>
                            <span className='icon icon-user'></span>
                            Личные данные
                        </a>
                    </Link>
                    <Link href='/change_phone_number'>
                        <a style={{ fontWeight: change_phone_number && 600 }} className='font-montserrat-regular'>
                            <span className='icon icon-phone'></span>
                            Изменить номер телефона
                        </a>
                    </Link>
                    <Link href='/my_orders'>
                        <a style={{ fontWeight: my_orders && 600 }} className='font-montserrat-regular'>
                            <span className='icon icon-truck'></span>
                            Мои заказы
                        </a>
                    </Link>
                    <Link href='/'>
                        <a className='font-montserrat-regular'>
                            Заказы в рассрочку
                        </a>
                    </Link>

                    <button type='button'>
                        <span className='icon icon-logout'></span>
                        ВЫЙТИ
                    </button>
                </div>

                {
                    create_account ? <PersonalDataCard />
                        : change_phone_number ? <ProfilePhoneNumber />
                            : enter_phone_number ? <EnterYourPhoneNumber /> :
                                enter_code_from_sms ? <EnterCodeFromSMS />
                                    : my_orders && <MyOrdersCard />
                }

            </div>
        </div>
    )
}

export default Profile
