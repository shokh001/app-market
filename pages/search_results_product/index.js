import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import SearchforTV from '../../components/SearchforTV'
import PaginationSection from '../../components/PaginationSection'
import styles from './search_results_product.module.scss';

const Index = () => {
    return (
        <div>
            <div className='main'>
                <LinksOfPages />
                <h3 className={styles.title + ' font-montserrat-bold container'}>Результаты поиска “Телевизор”</h3>
                <div className='d-flex container'>
                    <SearchforTV />
                    <PaginationSection />
                </div>
            </div>

        </div>
    )
}

export default Index;
