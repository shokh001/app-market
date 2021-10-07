import React, { useState } from 'react'
import styles from './ProductDetails.module.scss'

const ProductDetails = () => {
    const [check, setCheck] = useState(1);
    const [color, setColor] = useState('green');
    const [colorDress, setColorDress] = useState('black');
    const [count, setCounter] = useState(1);
    const [activeMec, setActiveMec] = useState(1);

    const decriment = () => {
        if (count > 0) {
            setCounter(count - 1);
        }
    }
    const increment = () => {
        setCounter(count + 1)
    }

    const getColor = () => {
        switch (color) {
            case 'green': return '#04D700';
            case 'yellow': return '#d7b800';
            case 'blue': return '#006fd77e';
            case 'pink': return '#d300d77c';
            case 'lightGreen': return '#00d74c';
        }
    }
    const getDressColor = () => {
        switch (colorDress) {
            case 'black': return '#000000';
            case 'yellow': return '#d7b800';
            case 'blue': return '#006fd77e';
            case 'pink': return '#d300d77c';
            case 'lightGreen': return '#00d74c';
        }
    }

    return (
        <div className={styles.ProductDetails}>
            <div className="">
                <h5 className='font-montserrat-semi-bold'>
                    <span className='font-montserrat-regular'>Камера:</span>
                    58 A-Mount camera
                </h5>

                <h3 className='font-montserrat-semi-bold'>The Power of imaging</h3>
            </div>

            <div className={styles.count}>
                <p className='font-montserrat-semi-bold mb-0'>
                    <span className='text-decoration-line-through'>1 000 000</span>
                    900 000 сум
                </p>

                <div className='d-flex align-items-center'>
                    <button type='button' className={styles.buyNowBtn + ' font-montserrat-regular'}>Купить сразу</button>
                    <div className={styles.counter}>
                        <button onClick={() => decriment()} type='button'>
                            <span className='icon icon-minus'></span>
                        </button>
                        <span className='mx-2'>{count}</span>
                        <button onClick={() => increment()} type='button'>
                            <span className='icon icon-add'></span>
                        </button>
                    </div>
                    <div className={styles.addBasket}>
                        <span className='icon icon-trolley'></span>
                    </div>
                </div>
            </div>

            <div style={{ paddingLeft: '20px' }}>
                <div className={styles.detail + ' d-flex align-items-center'}>
                    <h6 className='mb-0 font-montserrat-semi-bold'>
                        <span className='icon icon-user'></span>
                        Продавец:
                        <p className='mb-0 font-montserrat-regular'>Lorem Ipsum</p>
                    </h6>
                </div>

                <div className={styles.line}></div>

                <div className={styles.detail + ' mb-4 d-flex align-items-center'}>
                    <h6 className='mb-0 font-montserrat-semi-bold'>
                        <span style={{ width: '23px', height: '23px', marginRight: '6px' }} className='icon icon-truck'></span>
                        Продавец:
                        <p className='mb-0 font-montserrat-regular'>Lorem Ipsum</p>
                    </h6>
                </div>
                <div className={styles.detail + ' mb-4 d-flex align-items-center'}>
                    <h6 className='mb-0 font-montserrat-semi-bold'>
                        <span className='icon icon-phone-call'></span>
                        Продавец:
                        <p className='mb-0 font-montserrat-regular'>Lorem Ipsum</p>
                    </h6>
                </div>
                <div className={styles.detail + ' mb-4 d-flex align-items-center'}>
                    <h6 className='mb-0 font-montserrat-semi-bold'>
                        <span className='icon icon-credit-card'></span>
                        Продавец:
                        <p className='mb-0 font-montserrat-regular'>Lorem Ipsum</p>
                    </h6>
                </div>
                <div className={styles.detail + ' mb-4 d-flex align-items-center'}>
                    <h6 className='mb-0 font-montserrat-semi-bold'>
                        <span className='icon icon-refresh'></span>
                        Продавец:
                        <p className='mb-0 font-montserrat-regular'>Lorem Ipsum</p>
                    </h6>
                </div>
                <p className={styles.docs + ' mb-0'}>
                    Ознакомиться с правилами возврата
                    <span className='icon icon-docs'></span>
                </p>

                <div className={styles.line} style={{ margin: '30px 0' }} ></div>

                <h4 className='font-montserrat-semi-bold'>Выберите вариацию</h4>

                <div className={styles.chooseProductDetail}>
                    <div onClick={() => setCheck(1)} className="d-flex align-items-center">
                        <div className={styles.check}>
                            {
                                check === 1 && <span className='icon icon-check'></span>
                            }
                        </div>
                        <span>Чёрный, 4 GB</span>
                    </div>
                    <div onClick={() => setCheck(2)} className="d-flex align-items-center">
                        <div className={styles.check}>
                            {
                                check === 2 && <span className='icon icon-check'></span>
                            }
                        </div>
                        <span>Красный, 4 GB</span>
                    </div>
                </div>
                {/* <div className={styles.dressDetails}>
                    <h6 className='font-montserrat-regular'>Цвет модели: <span style={{ color: getDressColor() }} className='font-montserrat-semi-bold d-inline-block'>{colorDress}</span></h6>
                    <div className="d-flex">
                        <div onClick={() => setColorDress('black')} className={colorDress === 'black' ? styles.active + ' ' + styles.box : styles.box}>
                            <img src="./assets/images/small-p.png" alt="" />
                        </div>
                        <div onClick={() => setColorDress('yellow')} className={colorDress === 'yellow' ? styles.active + ' ' + styles.box : styles.box}>
                            <img src="./assets/images/small-p.png" alt="" />
                        </div>
                        <div onClick={() => setColorDress('blue')} className={colorDress === 'blue' ? styles.active + ' ' + styles.box : styles.box}>
                            <img src="./assets/images/small-p.png" alt="" />
                        </div>
                        <div onClick={() => setColorDress('pink')} className={colorDress === 'pink' ? styles.active + ' ' + styles.box : styles.box}>
                            <img src="./assets/images/small-p.png" alt="" />
                        </div>
                        <div onClick={() => setColorDress('lightGreen')} className={colorDress === 'lightGreen' ? styles.active + ' ' + styles.box : styles.box}>
                            <img src="./assets/images/small-p.png" alt="" />
                        </div>
                    </div>
                    <p className='font-montserrat-regular'>Выберите размер</p>

                    <div className={styles.chooseProductDetail}>
                        <div style={{background:'#1D3783', color:'#fff'}} className={styles.dressSize}>S</div>
                        <div className={styles.dressSize}>M</div>
                        <div className={styles.dressSize}>L</div>
                        <div className={styles.dressSize}>XL</div>
                        <div className={styles.dressSize}>2XL</div>
                    </div>
                </div> */}
                {/* <div className={styles.telefonDetails}>
                    <h6 className='font-montserrat-regular'>Цвет модели: <span style={{ color: getColor() }} className='font-montserrat-semi-bold d-inline-block'>{color}</span></h6>
                    <div className="d-flex">
                        <div onClick={() => setColor('green')} className={color === 'green' ? styles.active + ' ' + styles.box + ' ' + styles.boxGreen : styles.box + ' ' + styles.boxGreen}></div>
                        <div onClick={() => setColor('yellow')} className={color === 'yellow' ? styles.active + ' ' + styles.box + ' ' + styles.boxYellow : styles.box + ' ' + styles.boxYellow}></div>
                        <div onClick={() => setColor('blue')} className={color === 'blue' ? styles.active + ' ' + styles.box + ' ' + styles.boxBlue : styles.box + ' ' + styles.boxBlue}></div>
                        <div onClick={() => setColor('pink')} className={color === 'pink' ? styles.active + ' ' + styles.box + ' ' + styles.boxPink : styles.box + ' ' + styles.boxPink}></div>
                        <div onClick={() => setColor('lightGreen')} className={color === 'lightGreen' ? styles.active + ' ' + styles.box + ' ' + styles.boxLightGreen : styles.box + ' ' + styles.boxLightGreen}></div>
                    </div>
                    <p className='font-montserrat-regular'>Память модели</p>

                    <div className={styles.chooseProductDetail}>
                        <div onClick={() => setCheck(1)} className="d-flex align-items-center">
                            <div className={styles.check}>
                                {
                                    check === 1 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>Чёрный, 4 GB</span>
                        </div>
                        <div onClick={() => setCheck(2)} className="d-flex align-items-center">
                            <div className={styles.check}>
                                {
                                    check === 2 && <span className='icon icon-check'></span>
                                }
                            </div>
                            <span>Красный, 4 GB</span>
                        </div>
                    </div>
                </div> */}

                <div className={styles.links}>
                    <p className='mb-0 font-montserrat-regular'>В рассрочку</p>
                    <span className='icon icon-arrowRight'></span>
                    <p className='mb-0 font-montserrat-regular'>Предоплата 0%</p>
                    <span className='icon icon-arrowRight'></span>
                    <p className='mb-0 font-montserrat-regular'>Наценка 50%</p>
                </div>

                <div className={styles.chooseMec}>
                    <p onClick={() => setActiveMec(1)} className='mb-0 font-montserrat-regular'>
                        <span className={activeMec === 1 && styles.active}></span> 3 мес
                    </p>
                    <p onClick={() => setActiveMec(2)} className='mb-0 font-montserrat-regular'>
                        <span className={activeMec === 2 && styles.active}></span> 6 мес
                    </p>
                    <p onClick={() => setActiveMec(3)} className='mb-0 font-montserrat-regular'>
                        <span className={activeMec === 3 && styles.active}></span> 9 мес
                    </p>
                    <p onClick={() => setActiveMec(4)} className='mb-0 font-montserrat-regular'>
                        <span className={activeMec === 4 && styles.active}></span> 12 мес
                    </p>
                </div>

                <p className={styles.cost + ' font-monserrat-bold'}>2 000 000 сум</p>

                <button type='button' className={styles.btn}>Купить в рассрочку</button>
            </div>
        </div>
    )
}

export default ProductDetails
