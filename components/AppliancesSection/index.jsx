import React from 'react'
import Link from 'next/link'
import styles from '../DepartmentOfElectronics/electronics.module.scss'

const AppliancesSection = ({setIsOpen}) => {

    const data = [
        {
            id: 1,
            section_title: 'Женщинам',
            link_1: 'Антибликовые очки',
            link_2: 'Скрыть',
        },
        {
            id: 2,
            section_title: 'Мужчинам',
            link_1: 'Мужские солнцезащитные очки',
            link_2: 'Скрыть',
        },
        {
            id: 3,
            section_title: 'Путишествие',
            link_1: 'Чемоданы',
            link_2: 'Скрыть',
        },
    ]

    return (
        <div className={styles.electronics}>
            <h3 className='font-montserrat-bold'>Бытовая техника</h3>
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

export default AppliancesSection
