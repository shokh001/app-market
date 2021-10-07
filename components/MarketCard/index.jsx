import React from 'react'
import styles from './MarketCard.module.scss'

const MarketCard = ({value}) => {
    return (
        <div className={styles.MarketCard}>
            <img src={value.url} alt="magazine" />
            <div className={styles.cardBody}>
                <p className='text-center'>{value.text}</p>
            </div>        
        </div>
    )
}

export default MarketCard
