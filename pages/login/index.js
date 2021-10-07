import React from 'react'
import styles from './login.module.scss'
import Registration from '../../components/Registration'

const Index = () => {
    return (
        <div className={styles.login}>
            <div className={styles.main + ' main'}>
                <Registration />
            </div>
        </div>
    )
}

export default Index
