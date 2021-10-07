import React, { useState } from 'react'
import Link from 'next/link'
import styles from './HeaderTop.module.scss';

const HeaderTop = () => {

    const [defaultLan, setDefaultLan] = useState('Русский')
    const [select, setSelect] = useState(false)

    const chooseLanguage = (param) => {
        setDefaultLan(param)
        setSelect(false)
    }
    const onSelect = () => {
        setSelect(!select)
    }

    return (
        <div className={styles.headerTop}>
            <div className={styles.container + ' container d-flex align-items-center justify-content-between'}>
                <div className={styles.dropDown + ' position-relative'}>
                    <div className={styles.select + ' font-montserrat-regular'} onClick={() => onSelect()}>
                        {defaultLan}
                        <span className={styles.icon_chevronDown + ' icon icon-chevronDown'}></span>
                    </div>

                    <div onClick={() => chooseLanguage('Русский')} className={select ? styles.russian + ' font-montserrat-regular d-flex' : styles.russian + ' font-montserrat-regular'}>Русский</div>
                    <div onClick={() => chooseLanguage('Узбекиский')} className={select ? styles.uzbek + ' font-montserrat-regular d-flex' : styles.uzbek + ' font-montserrat-regular'}>Узбекиский</div>
                </div>

                <div className='d-flex align-items-center'>
                    <Link href='/shop'>
                        <a className='d-flex align-items-center text-decoration-none font-montserrat-regular'>
                            <span className={styles.icon + ' icon icon-trolley'}></span>
                            Магазины
                        </a>
                    </Link>
                    <Link href='#'>
                        <a className={styles.group + ' d-flex align-items-center text-decoration-none font-montserrat-regular'}>
                            <span className={styles.icon + ' icon icon-group'}></span>
                            Стать парнёром
                        </a>
                    </Link>
                    <Link href='#'>
                        <a className='d-flex align-items-center text-decoration-none font-montserrat-regular'>
                            <span className={styles.icon + ' icon icon-phone'}></span>
                            +998 90 973 40 25
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop
