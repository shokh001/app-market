import React from 'react'
import styles from './create_account.module.scss'
import Profile from '../../components/Profile'
import LinksOfPages from '../../components/LinksOfPages'


const Index = () => {
    return (
        <div className={styles.catalog}>
            <div className='main'>
                <LinksOfPages />
                <Profile create_account />
            </div>
        </div>
    )
}

export default Index;
