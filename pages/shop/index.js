import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import TheShop from '../../components/TheShop'
import styles from './shop.module.scss'

const Index = () => {
    return (
        <div className={styles.product}>
            <div className='main'>
                <LinksOfPages />                
                <TheShop />
            </div>
        </div>
    )
}

export default Index
