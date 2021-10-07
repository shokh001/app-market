import React from 'react'
import Link from 'next/link'
import TableBasket from '../../components/TableBasket'
import LinksOfPages from '../../components/LinksOfPages'
import styles from './full_basket.module.scss'
import BasketsContentCard from '../../components/BasketsContentCard'

const Index = () => {
    return (
        <div className={styles.full_basket}>
            <div className='main'>
                <LinksOfPages />
                <div className={styles.wrapper + ' container d-flex align-items-center justify-content-between'}>
                    <TableBasket />
                    <BasketsContentCard />
                </div>
                <div className='container'>
                    <Link href='/'>
                        <a className={styles.back + ' font-montserrat-regular text-decoration-none d-flex align-items-center'}>
                            <span className='icon icon-back'></span>
                            Вернуться в магазин
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Index
