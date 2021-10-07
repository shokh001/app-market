import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import CategoryCard from '../../components/CategoryCard'
import PaginationSection from '../../components/PaginationSection'
import styles from '../search_results_product/search_results_product.module.scss';

const Index = () => {
    const data = [
        {
            id: 1,
            text: 'Телефоны и смарт часы'
        },
        {
            id: 2,
            text: 'Ноутбуки и планшеты, электронные книги'
        },
        {
            id: 3,
            text: 'Компьютеры и комплектующие'
        },
        {
            id: 4,
            text: 'Телевизоры и видеотехника'
        },
        {
            id: 5,
            text: 'Игровые приставки и компьютеры'
        },
        {
            id: 6,
            text: 'Офисная техника'
        },
        {
            id: 7,
            text: 'Наушники и аудиотехника'
        },
        {
            id: 8,
            text: 'Аксессуары для электроники'
        },
        {
            id: 9,
            text: 'Моноблоки и системные блоки'
        },
        {
            id: 10,
            text: 'Умный дом и безопасность'
        }
    ]
    return (
        <div>
            <div className='main'>
                <LinksOfPages />
                <h3 className={styles.title + ' font-montserrat-bold container'}>Электроника</h3>
                <div className='d-flex container align-items-start'>
                    <CategoryCard data={data} title='Подкатегории' />
                    <PaginationSection />
                </div>
            </div>

        </div>
    )
}

export default Index;
