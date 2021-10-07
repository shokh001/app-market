import React, { useState } from 'react'
import Link from 'next/link'
import styles from './pickUp.module.scss'

const PickUpForm = () => {
    const [check, setCheck] = useState(0);

    return (
        <div className={styles.pickUpForm}>
            <div className={styles.headerCard}>
                <h2 className='font-montserrat-semi-bold'>Адрес доставки</h2>
                <div className="d-flex">
                    <input type="text" className='font-montserrat-regular w-50' placeholder='Имя' />
                    <input type="text" className='font-montserrat-regular w-50' placeholder='Номер' />
                </div>
            </div>

            <Link href="/">
                <a className={styles.link + ' font-montserrat-medium text-decoration-none'}>Сеть магазинов бытовой техники и электроники.</a>
            </Link>

            <div className={styles.bodyCard}>

                <ul className='list-unstyled'>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(1)} className="d-flex align-items-center">
                            <div className={styles.check}>
                                {
                                    check === 1 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span> Ул.Бунедкор 52/2 (ориентир м.Чиланзар, KFC)</span>
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(2)} className="d-flex align-items-center">
                            <div className={styles.check}>
                                {
                                    check === 2 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>ТРЦ "Mega Planet" - Юнусабадский район, ул. А. Дониша, дом № 2-Б</span>
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(3)} className="d-flex align-items-center">
                            <div className={styles.check}>
                                {
                                    check === 3 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>ул.Тошкент йули д.80, Тойтепа, Нурафшон 100004</span>
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(4)} className='d-flex align-items-center'>
                            <div className={styles.check}>
                                {
                                    check === 4 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>Юнусабадский район, ул. А. Амира Темура 141, ТЦ "Kefayat"</span>
                        </div>
                    </li>
                    <li className='d-flex align-items-center'>
                        <div onClick={() => setCheck(5)} className='d-flex align-items-center'>
                            <div className={styles.check}>
                                {
                                    check === 5 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span> ул.Буюк Ипак Йули, 105А Ор-р: станция м.Буюк Ипак Йули. ор-р KFC.</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PickUpForm
