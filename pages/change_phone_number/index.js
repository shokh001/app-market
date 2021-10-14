import React from 'react'
import styles from './change_phone_number.module.scss'
import Profile from '../../components/Profile'
import LinksOfPages from '../../components/LinksOfPages'


const Index = () => {
    return (
        <div className={styles.catalog}>
            <div className='main'>
                <LinksOfPages />
                <Profile change_phone_number />
            </div>
        </div>
    )
}

export default Index;
