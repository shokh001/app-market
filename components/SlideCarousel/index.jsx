import React from 'react';
import styles from './SlideCarousel.module.scss'
import Slider from "react-slick";

const items = [
    {
        src: './assets/images/camera.png',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: './assets/images/camera.png',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: './assets/images/camera.png',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const SlideCarousel = () => {

    let settings = {
        dots: true,
        arrows: true,
        infinite: true,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 800,
        autoplaySpeed: 3000,
        cssEase: "linear",    
    };

    return (

        <div className={styles.SlideCarousel + ' slideCasousel'}>

            <Slider className= {styles.banner + ' d-flex justify-content-between'} {...settings}>
                {
                    items.map((item) => {
                        return (
                            <div                                                                
                                key={item.caption}                                
                                >
                                    <div className={styles.carouselItem}>
                                    <div className={styles.caption}>
                                        <p className={styles.descr + ' font-montserrat-regular'}>58 A-Mount camera</p>
                                        <h2 className={styles.title + ' font-montserrat-bold d-flex align-items-center'}>
                                            The Power of <br /> imaging
                                            <div className={styles.discount}><span className='font-montserrat-regular m-0'><span className='font-montserrat-bold m-0 d-block'><p className='mb-0'>20%</p></span> скидка</span></div>
                                        </h2>
                                        <h2 className={styles.title + ' font-montserrat-bold mb-0'}>900 000 сум
                                            <span className='font-montserrat-regular text-decoration-line-through'>1 000 0000</span>
                                        </h2>
                                    </div>
                                    <img src={item.src} alt={item.altText} />
                                    </div>
                            </div>
                        );
                    })                                    
                }
            </Slider>
        </div>
    );
}

export default SlideCarousel;