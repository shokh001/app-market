import React, { useState } from 'react'
import styles from './PersonalDataCard.module.scss';

const PersonalDataCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.personalData}>
            <h2 className='font-montserrat-bold'>Личные данные</h2>

            <p className='font-montserrat-regular'>
                <span className='icon icon-user'></span>
                Имя: <div className='font-montserrat-semi-bold'>Esther Howard</div>
            </p>
            <p className='font-montserrat-regular'>
                <span className='icon icon-user'></span>
                Фамилия: <div className='font-montserrat-semi-bold'>Esther Howard</div>
            </p>

            <div className={styles.collapseInfo}>
                <div className={styles.collapse}>
                    <div onClick={() => setIsOpen(!isOpen)} className="d-flex justify-content-between">
                        <p className='font-montserrat-regular m-0'><span className='icon icon-passport'></span> Паспортные данные</p>
                        <span style={{ transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)' }} className={styles.arrow + ' icon icon-arrowRight'}></span>
                    </div>

                    {
                        isOpen && <div>
                            <p className='font-montserrat-regular d-flex'>
                                Серия паспорта: <div className='font-montserrat-semi-bold'>AC124519</div>
                            </p>
                            <p className='font-montserrat-regular'>
                                Дата выдачи: 23.03.2021
                            </p>
                        </div>
                    }

                </div>

                {
                    isOpen && <button type='button'>Изменить</button>
                }
            </div>
        </div>
    )
}

export default PersonalDataCard
