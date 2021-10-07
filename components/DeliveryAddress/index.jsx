import React, { useState } from 'react'
import styles from './DeliveryAddress.module.scss'

const DeliveryAddress = () => {
    const [check, setCheck] = useState(0);

    return (
        <div className={styles.DeliveryAddress}>
            <div className={styles.headerCard}>
                <h2 className='font-montserrat-semi-bold'>Адрес доставки</h2>
                <div className={styles.selects}>
                    <div className="d-flex">
                        <div className="position-relative">
                            <select className='font-montserrat-regular'>
                                <option value="" disabled>Город</option>
                                <option value="">Город</option>
                                <option value="">Город</option>
                                <option value="">Город</option>
                            </select>
                            <span className='icon icon-chevronDown'></span>
                        </div>
                        <div className="position-relative">
                            <select className='font-montserrat-regular'>
                                <option value="" disabled>Город</option>
                                <option value="">Город</option>
                                <option value="">Город</option>
                                <option value="">Город</option>
                            </select>
                            <span className='icon icon-chevronDown'></span>
                        </div>
                    </div>
                    <input type="text" className='mt-4' placeholder='Улица' />
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.bodyCard}>
                <h2 className='font-montserrat-semi-bold'>Способ доставки</h2>

                <ul className='list-unstyled'>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(1)} className="d-flex align-items-center">
                            <div className={styles.check}>
                                {
                                    check === 1 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>Быстрая доставка</span>
                        </div>
                        <span className={styles.cirgle + ' icon icon-cirgle'}></span>
                        <div className={styles.descr}>
                            Доставка в пределах Ташкента в течение 24 часов
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(2)} className="d-flex align-items-center">
                            <div className={styles.check}>
                                {
                                    check === 2 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>Стандартная доставка</span>
                        </div>
                        <span className={styles.cirgle + ' icon icon-cirgle'}></span>
                        {/* <div className={styles.descr}>
                            Доставка в пределах Ташкента в течение 24 часов
                        </div> */}
                    </li>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(3)} className="d-flex align-items-center">
                            <div className={styles.check}>
                                {
                                    check === 3 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>Экспресс доставка</span>
                        </div>
                        <span className={styles.cirgle + ' icon icon-cirgle'}></span>
                        {/* <div className={styles.descr}>
                            Доставка в пределах Ташкента в течение 24 часов
                        </div> */}
                    </li>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(4)} className='d-flex align-items-center'>
                            <div className={styles.check}>
                                {
                                    check === 4 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>Доставка купленных товаров в рассрочку</span>
                        </div>
                        <span className={styles.cirgle + ' icon icon-cirgle'}></span>
                        {/* <div className={styles.descr}>
                            Доставка в пределах Ташкента в течение 24 часов
                        </div> */}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default DeliveryAddress
