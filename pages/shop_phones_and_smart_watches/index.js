import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import CategoryCard from '../../components/CategoryCard'
import PaginationSection from '../../components/PaginationSection'
import MoneyVerbally from '../../components/MoneyVerbally'
import Lorem from '../../components/Lorem'

const Index = () => {
    const data = [
        {
            id: 1,
            text: 'Смартфоны'
        },
        {
            id: 2,
            text: 'Кнопочные телефоны'
        },
        {
            id: 3,
            text: 'Умные часы'
        },
        {
            id: 4,
            text: 'Стационарные телефоны'
        },
        {
            id: 5,
            text: 'Телефоны и смарт часы'
        },
        {
            id: 6,
            text: 'Радиотелефоны'
        },
    ]
    const data2 = [
        {
            id: 1,
            text: 'Показать все'
        },
        {
            id: 2,
            text: 'Apple'
        },
        {
            id: 3,
            text: 'Xiaomi'
        },
        {
            id: 4,
            text: 'Asus'
        },
        {
            id: 5,
            text: 'Honor'
        },
        {
            id: 6,
            text: 'Vivo'
        },
    ]
    const data3 = [
        {
            id: 1,
            text: 'Показать все'
        },
        {
            id: 2,
            text: 'Дешевые выше'
        },
        {
            id: 3,
            text: 'Дорогие выше'
        }
    ]
    return (
        <div>
            <div className='main'>
                <LinksOfPages />
                <Lorem />
                <div className='d-flex container align-items-start'>
                    <div>
                        <CategoryCard data={data} title='Выберите тип' />
                        <CategoryCard data={data2} title='Производитель' />
                        <CategoryCard data={data3} title='Сортировать' />
                        <MoneyVerbally />
                    </div>
                    <PaginationSection />
                </div>
            </div>

        </div>
    )
}

export default Index;
