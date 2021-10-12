import React, { useState } from 'react'
import Link from 'next/link'
import styles from './Category.module.scss'
import DepartmentOfElectronics from '../DepartmentOfElectronics';
import ConstructionSection from '../ConstructionSection';
import CarProductsSection from '../CarProductsSection';
import HomeAndGardenSection from '../HomeAndGardenSection';
import FurnitureSection from '../FurnitureSection';
import AppliancesSection from '../AppliancesSection';
import ClothesShoesAndAccessories from '../ClothesShoesAndAccessories';

const Category = () => {
    const [active, setActive] = useState(0);
    const [activePart, setActivePart] = useState(1);
    const [isOpen, setIsOpen] = useState(false);

    const activeLink = (param) => {
        setActive(param)
    }
    const open = (e) => {
        setIsOpen(true)
    }

    const onClose = (e) => {
        setIsOpen(false)
    }

    const dataSections = [
        {
            id: 1,
            title: 'Электроника',
            icon: 'icon icon-notebook',
        },
        {
            id: 2,
            title: 'Строительство',
            icon: 'icon icon-paint',
        },
        {
            id: 3,
            title: 'Автотовары',
            icon: 'icon icon-car',
        },
        {
            id: 4,
            title: 'Дом и сад',
            icon: 'icon icon-home',
        },
        {
            id: 5,
            title: 'Мебель',
            icon: 'icon icon-couch',
        },
        {
            id: 6,
            title: 'Бытовая техника',
            icon: 'icon icon-washing-machine',
        },
        {
            id: 7,
            title: 'Одежда, обувь и аксессуары',
            icon: 'icon icon-casual-t-shirt',
        },
    ]
    const dataCategories = [
        {
            id: 1,
            link_: 'Электроника'
        },
        {
            id: 2,
            link_: 'Компьютера'
        },
        {
            id: 3,
            link_: 'Развлечения'
        },
        {
            id: 4,
            link_: 'Бытовая техника'
        },
        {
            id: 5,
            link_: 'Авто'
        },
        {
            id: 6,
            link_: 'Спорт и отдых'
        },
        {
            id: 7,
            link_: 'Красота и здоровье'
        },
        {
            id: 8,
            link_: 'Одежда и обувь'
        },
    ]

    const getComponent = () => {
        switch (activePart) {
            case 1: return <DepartmentOfElectronics setIsOpen={setIsOpen} />
            case 2: return <ConstructionSection setIsOpen={setIsOpen} />
            case 3: return <CarProductsSection setIsOpen={setIsOpen} />
            case 4: return <HomeAndGardenSection setIsOpen={setIsOpen} />
            case 5: return <FurnitureSection setIsOpen={setIsOpen} />
            case 6: return <AppliancesSection setIsOpen={setIsOpen} />
            case 7: return <ClothesShoesAndAccessories setIsOpen={setIsOpen} />
        }
    }

    return (
        <div style={{ background: isOpen && '#1D3783', padding: isOpen && '13px 0' }} className={styles.category}>
            {
                isOpen &&
                <div
                    style={{ height: document.body.scrollHeight, zIndex: isOpen ? '4' : '-1' }}
                    className={styles.menuList}
                    onClick={() => onClose()}
                >
                    <div
                        className={styles.content}
                        onClick={e => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="container d-flex align-items-start">
                            <ul className={styles.parts}>
                                {
                                    dataSections.map((value) =>
                                        <li key={value.id} onClick={() => setActivePart(value.id)} className={activePart === value.id ? styles.activeLI + ' font-montserrat-regular' : 'font-montserrat-regular'}>
                                            <div>
                                                <span className={value.icon}></span>
                                                {value.title}
                                            </div>
                                            <span className='icon icon-arrowRight'></span>
                                        </li>)
                                }
                            </ul>

                            <div className={styles.info}>
                                {
                                    getComponent()
                                }
                            </div>
                        </div>
                    </div>
                </div>}

            <div className={styles.container + " container d-flex align-items-center"}>

                {
                    !isOpen ?
                        (<>
                            <div className={styles.line}></div>

                            <div
                                onClick={(e) => open(e)}
                                className={styles.menu + ' d-flex align-items-center font-montserrat-bold'}
                            >
                                <span className={styles.icon + ' icon icon-burgerMenu'}></span>
                                <a className='font-montserrat-bold'>Каталог</a>
                            </div>
                        </>)
                        :
                        <div
                            onClick={(e) => onClose(e)}
                            className={styles.menu + ' d-flex align-items-center font-montserrat-bold'}
                        >
                            <span className={styles.icon + ' icon icon-close bg-white'}></span>
                            <a className='font-montserrat-bold' style={{ color: '#fff' }}>Каталог</a>
                        </div>
                }



                {
                    !isOpen && <div className={styles.categories + ""}>
                        <ul className='list-unstyled d-flex align-items-center mb-0'>
                            {
                                dataCategories.map((value) =>
                                    <li key={value.id}>
                                        <Link href="/electronics">
                                            <a onClick={() => activeLink(value.id)} className={active === value.id ? styles.bnLink + ' text-decoration-none font-montserrat-regular' : 'text-decoration-none font-montserrat-regular'}>{value.link_}</a>
                                        </Link>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Category
