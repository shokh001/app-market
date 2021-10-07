import React from 'react'
import styles from './linksOfPages.module.scss'
import Link from 'next/link'

const LinksOfPages = () => {
    return (
        <div className={styles.LinksOfPages + ' container'}>
            <Link href="/">
                <a className='text-decoration-none font-monserrat-regular'>Всё категории</a>
            </Link>
            <span className='icon icon-arrowRight'></span>
            <Link href="/">
                <a className='text-decoration-none font-monserrat-regular'>Электроника</a>
            </Link>
            <span className='icon icon-arrowRight'></span>
            <Link href="/">
                <a className='text-decoration-none font-monserrat-regular'>Камеры</a>
            </Link>
        </div>
    )
}

export default LinksOfPages
