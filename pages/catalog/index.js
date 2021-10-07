import React from 'react'
import CatalogSection from '../../components/CatalogSection'
import styles from './catalog.module.scss'

const Index = () => {
    return (
        <div className={styles.catalog}>
            <div className='main'>
                <CatalogSection />
            </div>
        </div>
    )
}

export default Index;
