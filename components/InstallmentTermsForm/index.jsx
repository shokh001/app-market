import React, { useState } from 'react'
import styles from './InstallmentTerms.module.scss'

const InstallmentTermsForm = ({setControlItems}) => {

    const [active, setActive] = useState(1);

    const handleState = (param) => {
        setActive(param)
        if(param === 1) {
            setControlItems(false)
        } else {
            setControlItems(true)
        }
    }

    return (
        <div className={styles.InstallmentTermsForm}>
            <div className={styles.buttons + ' d-flex'}>
                <button type='button' onClick={()=>handleState(1)} className={active === 1 ? styles.yesCard + ' font-montserrat-regular ' + styles.active : styles.yesCard + ' font-montserrat-regular'}>У меня есть карта</button>
                <button type='button' onClick={()=>handleState(2)} className={active === 2 ? styles.noCard + ' font-montserrat-regular ' + styles.active : styles.noCard + ' font-montserrat-regular'}>У меня нет карты</button>
            </div>

            <div className={styles.formBody}>
                <h3 className='font-montserrat-semi-bold'>Условия рассрочки</h3>
                <div className={styles.boxs + ' mt-4'}>
                    <div className="d-flex justify-content-between">
                        <div className={styles.box + ' col me-4'}>
                            <p className='mb-0 font-montserrat-regular'>254 635 сум / 3 мес.</p>
                            <p className='mb-0 font-montserrat-regular mt-1'>Предоплата - 0%. Наценка - 324 810 сум</p>
                        </div>
                        <div className={styles.box + ' col'}>
                            <p className='mb-0 font-montserrat-regular'>254 635 сум / 3 мес.</p>
                            <p className='mb-0 font-montserrat-regular mt-1'>Предоплата - 0%. Наценка - 324 810 сум</p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <div className={styles.box + ' col me-4'}>
                            <p className='mb-0 font-montserrat-regular'>254 635 сум / 3 мес.</p>
                            <p className='mb-0 font-montserrat-regular mt-1'>Предоплата - 0%. Наценка - 324 810 сум</p>
                        </div>
                        <div className={styles.box + ' col'}>
                            <p className='mb-0 font-montserrat-regular'>254 635 сум / 3 мес.</p>
                            <p className='mb-0 font-montserrat-regular mt-1'>Предоплата - 0%. Наценка - 324 810 сум</p>
                        </div>
                    </div>
                </div>

                {
                    active === 1 && <div className={styles.line}></div>
                }

                {
                    active === 1 &&
                    <div>
                        <h3 className='font-montserrat-semi-bold'>Карта</h3>

                        <div className={styles.inputsCard}>
                            <label htmlFor="">
                                <span className='d-block font-montserrat-regular'>Номер карты</span>
                                <input type="text" className={styles.numberCardInput + ' font-montserrat-regular'} placeholder='XXXX XXXX XXXX XXXX' />
                            </label>
                            <label htmlFor="">
                                <span className='d-block font-montserrat-regular'>Срок</span>
                                <input type="text" className={styles.term + ' font-montserrat-regular'} placeholder='ХХ/ХХ' />
                            </label>
                        </div>
                    </div>
                }

                <div className={styles.line}></div>

                <h3 className='font-montserrat-semi-bold'>Личные данные</h3>

                <div className={styles.personalData}>
                    <input type="text" placeholder='ФИО' className='w-100' />

                    <div className='d-flex align-items-center mt-4'>
                        <input type="text" placeholder='ИНН' className={styles.inn} />

                        <div className="ms-3">
                            <p className='mb-1 font-montserrat-regular'>Выберите пол</p>
                            <div className="">
                                <button type='button' className={styles.man}>Мужчина</button>
                                <button type='button' className={styles.woman}>Женщина</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.line}></div>

                <h3 className='font-montserrat-semi-bold'>Паспортные данные</h3>

                <div className={styles.passportData + " d-flex justify-content-between"}>
                    <div className="col">
                        <div className={"d-flex"}>
                            <input type="text" className={styles.inputSeria} placeholder='Серия' />
                            <input type="text" className={styles.inputNumber} placeholder='Номер' />
                        </div>
                        <input type="text" className={styles.inputInfo} placeholder='Дата рождения' />
                        <input type="text" className={styles.inputInfo} placeholder='Дата выдачи' />
                    </div>
                    <div className="col">
                        <input type="text" className={styles.inputInfo} placeholder='Дата рождения' />
                        <input type="text" className={styles.inputInfo} placeholder='Дата выдачи' />
                    </div>
                </div>

                <div className={styles.line}></div>

                <h3 className='font-montserrat-semi-bold'>Прикрепите файлы</h3>

                <div className={styles.attachFiles}>
                    <div className="row align-items-center justify-content-between">
                        <div className={styles.descrInfo + " col-8 position-relative"}>
                            <span className={styles.number}>1</span>
                            <h4 className='font-montserrat-medium'>Паспорт</h4>
                            <p>Информация из паспорта и фото, должны быть читабельны </p>
                        </div>
                        <div className="col-4 d-flex align-items-center">
                            <button type='button'>Выберите файл</button>
                            <span className='icon icon-ege'></span>
                        </div>
                    </div>
                    <div className="row mt-4 align-items-center justify-content-between">
                        <div className={styles.descrInfo + " col-8 position-relative"}>
                            <span className={styles.number}>1</span>
                            <h4 className='font-montserrat-medium'>Паспорт</h4>
                            <p>Информация из паспорта и фото, должны быть читабельны </p>
                        </div>
                        <div className="col-4 d-flex align-items-center">
                            <button type='button'>Выберите файл</button>
                            <span className='icon icon-ege'></span>
                        </div>
                    </div>
                    <div className="row mt-4 align-items-center justify-content-between">
                        <div className={styles.descrInfo + " col-8 position-relative"}>
                            <span className={styles.number}>1</span>
                            <h4 className='font-montserrat-medium'>Паспорт</h4>
                            <p>Информация из паспорта и фото, должны быть читабельны </p>
                        </div>
                        <div className="col-4 d-flex align-items-center">
                            <button type='button'>Выберите файл</button>
                            <span className='icon icon-ege'></span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default InstallmentTermsForm
