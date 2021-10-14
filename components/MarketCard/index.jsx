import React from 'react'
import Link from 'next/link'
import styles from './MarketCard.module.scss'

const MarketCard = ({ value }) => {
    return (
        <Link href={value.path}>
            <a className={styles.MarketCard}>
                <img src={value.url} alt="magazine" />
                <div className={styles.cardBody}>
                    <p className='text-center'>{value.text}</p>
                </div>
            </a>
        </Link>
    )
}

export default MarketCard
