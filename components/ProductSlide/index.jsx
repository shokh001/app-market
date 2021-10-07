import React, { useState } from 'react'
import styles from './productSlide.module.scss'

const ProductSlide = () => {

    const data = [
        {
            id: 1,
            url: './assets/images/camera.png',
        },
        {
            id: 2,
            url: './assets/images/earphones.png',
        },
        {
            id: 3,
            url: './assets/images/camera.png',
        },
        {
            id: 4,
            url: './assets/images/earphones.png',
        }
    ]

    const [changeImg, setChangeImg] = useState('./assets/images/camera.png')
    const [active, setActive] = useState(1)

    const chooseProduct = (id) => {
        data.filter((value) => value.id === id && setChangeImg(value.url));
        setActive(id);
    }

    return (
        <div className={styles.productSlide}>
            <div className={styles.cardHeader}>
                <img src={changeImg} alt="productImg" />
            </div>

            <div className='d-flex justify-content-center'>
                {
                    data.map(({ id, url }) => {
                        return (
                            <div
                                key={id}
                                onClick={() => chooseProduct(id)}
                                className={
                                    active === id? styles.active : styles.cardImg
                                }
                            >
                                <img src={url} alt="product-img" />
                            </div>
                        )
                    })
                }
            </div>


        </div>
    )
}

export default ProductSlide
