import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import CategoryCard from '../../components/CategoryCard'
import Lorem from '../../components/Lorem'
import PaginationSection from '../../components/PaginationSection'
import styles from './electronic_page.module.scss';

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
        }
    ]

    return (
        <div className={styles.electronicPage}>
            <div className='main'>
                <LinksOfPages />
                <Lorem />
                <div className='d-flex container align-items-start'>
                    <CategoryCard data={data} title='Электроника' />
                    <PaginationSection />
                </div>
            </div>

        </div>
    )
}

export default Index;
