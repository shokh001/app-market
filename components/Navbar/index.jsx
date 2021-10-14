import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.scss'


const Navbar = () => {
    const [select, setSelect] = useState(false)

    const choose = () => {
        setSelect(false)
    }

    const onSelect = () => {
        setSelect(!select)
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.container + " container d-flex align-items-center justify-content-between"}>
                <div className={styles.logo + " d-flex align-items-center"}>
                    <Link href='/'>
                        <a>
                            <img src="./assets/images/logo.svg" alt="logo" />
                        </a>
                    </Link>

                    <div className={styles.inputGroup + " input-group col-5"}>
                        <input type="text" className="form-control font-montserrat-regular shadow-none rounded-0" placeholder="Поиск" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <span className={styles.inputGroupText + " input-group-text rounded-0 border-0"} id="basic-addon2">
                            <span className={styles.icon + ' icon icon-search bg-white'}></span>
                        </span>
                    </div>
                </div>

                <div className={styles.navLeft + " d-flex align-items-center"}>
                    <Link href='/favourites'>
                        <a className='d-flex align-items-center text-decoration-none position-relative'>
                            <span className={styles.icon + ' icon icon-heart'}></span>
                            Избранное
                            <div className={styles.badge + ' font-montserrat-regular'}>1</div>
                        </a>
                    </Link>
                    <Link href='/full_basket'>
                        <a className={styles.basket + ' d-flex align-items-center text-decoration-none position-relative'}>
                            <span className={styles.icon + ' icon icon-trolley'}></span>
                            Корзина
                            <div className={styles.badge + ' font-montserrat-regular'}>18</div>
                        </a>
                    </Link>

                    <div className={styles.dropDown + ' position-relative'}>
                        <div className={styles.select + ' font-montserrat-regular'} onClick={() => onSelect()}>
                            <span className={styles.icon + ' icon icon-profile'}></span>
                            Профиль
                        </div>

                        <Link href='/login'>
                            <a onClick={() => choose()} className={select ? styles.enter + ' font-montserrat-regular d-flex' : styles.enter + ' font-montserrat-regular'}>Войти</a>
                        </Link>
                        <Link href='/create_account'>
                        <a onClick={() => choose()} className={select ? styles.account + ' font-montserrat-regular d-flex' : styles.account + ' font-montserrat-regular'}>Создать аккаунт</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
