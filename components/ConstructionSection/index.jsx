import React from 'react'
import Link from 'next/link'
import styles from '../DepartmentOfElectronics/electronics.module.scss'
const ConstructionSection = ({setIsOpen}) => {

    const data = [
        {
            id: 1,
            section_title: 'Сантехника',
            link_1: 'Раковины',
            link_2: 'Сместители',
        }
    ]

    return (
        <div className={styles.electronics}>
            <h3 className='font-montserrat-bold'>Строительство и ремонт</h3>
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
                                        <Link href="/product">
                                            <a onClick={()=>setIsOpen(false)} className='font-montserrat-regular'>{value.link_1}</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a onClick={()=>setIsOpen(false)} className='font-montserrat-regular'>{value.link_2}</a>
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

export default ConstructionSection
