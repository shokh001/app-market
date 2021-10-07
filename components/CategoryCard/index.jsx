import React, { useState } from 'react'
import Link from 'next/link'
import styles from './CategoryCard.module.scss'

const CategoryCard = ({ data, title }) => {
    const [activeLi, setActiveLi] = useState(0);

    return (
        <div className={styles.CategoryCard}>
            <h3 className='font-montserrat-bold'>{title}</h3>
            <ul className='list-unstyled'>
                {
                    data.map((value) =>
                        <li onClick={() => setActiveLi(value.id)} className={activeLi === value.id && styles.active}>
                            <Link href="#">
                                <a className='font-montserrat-regular'>
                                    <span></span>
                                    {value.text}
                                </a>
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

export default CategoryCard
