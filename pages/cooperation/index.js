import React from 'react'
import Link from 'next/link'
import AttachFiles from '../../components/AttachFilesForm'
import Ordering from '../../components/Ordering'
import styles from './Cooperation.module.scss'
import LinksOfPages from '../../components/LinksOfPages'

const Index = () => {
    return (
        <div className={styles.cooperation}>
            <div className='main'>
                <LinksOfPages />

                <div className={styles.fromWrap + ' container'}>
                    <div className='d-flex'>
                        <Ordering />
                        <AttachFiles />
                    </div>

                    <Link href='/'>
                        <a className={styles.back + ' font-montserrat-regular text-decoration-none d-flex align-items-center'}>
                            <span className='icon icon-back'></span>
                            Вернуться в магазин
                        </a>
                    </Link>

                    <button type='button'>Отправить форму</button>
                </div>
            </div>
        </div>
    )
}

export default Index
