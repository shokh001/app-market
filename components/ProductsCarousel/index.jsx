import React from 'react'
import ProductCard from '../ProductCard';
import Slider from "react-slick";
import styles from './ProductsCarousel.module.scss'

const ProductsCarousel = ({ title, product }) => {

    let settings = {
        dots: false,
        arrows: product? false : true,
        infinite: product? false : true,
        speed: 500,
        draggable: product? false : true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: product? false : true,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className={styles.ProductsCarousel + ' container'}>
            <div className={styles.title + ' font-montserrat-bold'}>
                {title}
            </div>

            <Slider className='d-flex justify-content-between' {...settings}>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Slider>

            <button type='button' className={styles.moreInfo}>Посмотреть всё</button>
        </div>
    )
}

export default ProductsCarousel
