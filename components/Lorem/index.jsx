import React from 'react'
import styles from './Lorem.module.scss'

const Lorem = () => {
    return (
        <div className={styles.Lorem + ' container'}>
            <h3 className='font-montserrat-bold'>LOREM IPSUM</h3>

            <div className="d-flex">
                <button type='button' className='font-montserrat-bold'>LOGO</button>

                <div className="">
                    <div className={styles.btn + ' font-montserrat-bold'}>
                        Сеть магизинов бытовой техники
                    </div>
                    <ul>
                        <li>
                            <span className='icon icon-location'></span>
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </li>
                        <li>
                            <span className='icon icon-location'></span>
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </li>
                        <li>
                            <span className='icon icon-location'></span>
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </li>
                        <li>
                            <span className='icon icon-location'></span>
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </li>
                        <li>
                            <span className='icon icon-location'></span>
                            4517 Washington Ave. Manchester, Kentucky 39495
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Lorem
