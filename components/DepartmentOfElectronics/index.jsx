import React from 'react'
import Link from 'next/link'
import styles from './electronics.module.scss'

const DepartmentOfElectronics = ({setIsOpen}) => {

    const data = [
        {
            id: 1,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 2,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 3,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 4,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 5,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 6,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 7,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 8,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 9,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
        {
            id: 10,
            section_title: 'Телефоны и смарт часы',
            link_1: 'Смартфоны',
            link_2: 'Кнопочные телефоны',
            link_3: 'Умные часы',
            link_4: 'Стационарные телефоны',
            link_5: 'Телефоны и смарт часы'
        },
    ]


    return (
        <div className={styles.electronics}>
            <h3 className='font-montserrat-bold'>Электроника</h3>
            <div className={styles.row + " row"}>

                {
                    data.map((value) => {
                        return (
                            <div key={value.id} className="col-3 mt-4">
                                <Link href="/phones_and_smart_watches" >
                                    <a onClick={()=>setIsOpen(false)} className={styles.partTitle + ' font-montserrat-semi-bold'}>
                                        {value.section_title}
                                    </a>
                                </Link>
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a onClick={()=>setIsOpen(false)} className='font-montserrat-regular'>{value.link_1}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a onClick={()=>setIsOpen(false)} className='font-montserrat-regular'>{value.link_2}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a onClick={()=>setIsOpen(false)} className='font-montserrat-regular'>{value.link_3}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a onClick={()=>setIsOpen(false)} className='font-montserrat-regular'>{value.link_4}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a onClick={()=>setIsOpen(false)} className='font-montserrat-regular'>{value.link_5}</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }                
            </div>
        </div>
    )
}

export default DepartmentOfElectronics
