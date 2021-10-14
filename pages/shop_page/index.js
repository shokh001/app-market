import React from 'react'
import CatalogList from '../../components/CatologList'
import LinksOfPages from '../../components/LinksOfPages'
import Lorem from '../../components/Lorem'
import PaginationSection from '../../components/PaginationSection'
import styles from './shop_page.module.scss';

const Index = () => {

    return (
        <div className={styles.shopPage}>
            <div className='main'>
                <LinksOfPages />
                <Lorem />
                <div className='d-flex container align-items-start'>
                    <CatalogList />

                    <div>
                        <h3>Все товары магазина</h3>
                        <PaginationSection />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Index;
