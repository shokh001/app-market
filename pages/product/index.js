import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import ProductSlide from '../../components/ProductSlide'
import styles from './product.module.scss'
import ProductDetails from '../../components/ProductDetails'
import ProductDescription from '../../components/ProductDescription'
import ProductsCarousel from '../../components/ProductsCarousel'


const Index = () => {
    return (
        <div className={styles.product}>
            <div className='main'>
                <LinksOfPages />
                <div className={styles.wrapper + ' container'}>
                    <div className='d-flex'>
                        <ProductSlide />
                        <ProductDetails />
                    </div>

                    <div className={styles.lineOne}></div>

                    <ProductDescription />

                    <div className={styles.lineOne} style={{background:'#fff', marginTop:'30px', marginBottom:"186px"}}></div>                
                </div>

                <ProductsCarousel title='Предложения других магазинов' product />
            </div>
        </div>
    )
}

export default Index
