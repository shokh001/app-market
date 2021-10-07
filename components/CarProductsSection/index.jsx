import React from 'react'
import Link from 'next/link'
import styles from '../DepartmentOfElectronics/electronics.module.scss'

const CarProductsSection = ({setIsOpen}) => {

    const data = [
        {
            id: 1,
            section_title: 'Электроника для авто',
            link_1: 'Автосигнализация',
            link_2: 'Антирадар',
            link_3: 'Электронасосы',
        },
        {
            id: 2,
            section_title: 'Аудио система авто',
            link_1: 'Автомагнитолы',
            link_2: 'Усилитель',
        },
        {
            id: 3,
            section_title: 'Аккумулятор и аксессуары',
            link_1: 'Аккумулятор',
        },
    ]

    return (
        <div className={styles.electronics}>
            <h3 className='font-montserrat-bold'>Автотовары</h3>
            <div className="row">
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
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CarProductsSection
