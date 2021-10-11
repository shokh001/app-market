import React, { useState } from 'react'
import Link from 'next/link'
import FillTheFormSection from '../../components/FillTheFormSection'
import YourOrderSection from '../../components/YourOrderSection'
import PickUpForm from '../../components/PickupForm'
import styles from './ordering.module.scss'
import LinksOfPages from '../../components/LinksOfPages'

const Index = () => {
    const [selectedForm, setSelectedForm] = useState(true);

    return (
        <div className='main'>
            <LinksOfPages />

            <div className='container'>
                <div className={styles.actionButtons + ' font-montserrat-regular'}>
                    <button type='button' onClick={() => setSelectedForm(true)} className={selectedForm? styles.activeButton : ''}>Доставка</button>
                    <button type='button' onClick={() => setSelectedForm(false)} className={!selectedForm? styles.activeButton : ''}>Самовывоз</button>
                </div>
            </div>

            <div className={styles.formsWarp + ' d-flex container'}>
                {/* {selectedForm ?
                    <FillTheFormSection /> : <PickUpForm />} */}
                <YourOrderSection />
            </div>

            <div className='container'>
                <Link href='/'>
                    <a className={styles.back + ' font-montserrat-regular text-decoration-none d-flex align-items-center'}>
                        <span className='icon icon-back'></span>
                        Вернуться в магазин
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Index
