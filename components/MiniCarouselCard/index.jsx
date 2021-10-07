import React from 'react'
import styles from './MiniCarouselCard.module.scss'
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

const MiniCarouselCard = () => {

    let settings = {
        dots: false,
        arrows: true,
        infinite: true,
        draggable: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 600,
        autoplaySpeed: 3000,
        cssEase: "linear",    
    };

    return (
        <div className={styles.miniCarouselCard + ' col-3 miniCarouselCard'}>
            <div className={styles.title + ' font-montserrat-semi-bold'}>Товар дня!</div>

            <Slider className={styles.banner + ' d-flex justify-content-between'} {...settings}>
                {
                    items.map((item) => {
                        return (
                            <div
                                key={item.caption}
                            >
                                <div className={styles.carouselItem}>
                                    <img src={item.src} alt={item.altText} />
                                    <div className={styles.caption}>
                                        <h5 className={styles.productName + ' font-montserrat-medium'}>Камера</h5>
                                        <p className={styles.descr + ' font-montserrat-regular'}>58 A-Mount camera</p>
                                        <h2 className={styles.title + ' font-montserrat-bold d-flex align-items-center'}>
                                            The Power of <br /> imaging
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </Slider>

            <div className={styles.footer}>
                <div className={styles.discount}>
                    <span className='font-montserrat-regular m-0'>
                        <p className='font-montserrat-bold m-0 d-block'>20%</p> скидка
                    </span>
                </div>

                <div>
                    <span className={styles.deletePay + ' font-montserrat-medium text-decoration-line-through'}>1 000 000</span>
                    <p className={styles.number + ' font-montserrat-medium mb-0'}>900 000</p>
                </div>

                <div className={styles.wrapIcon}>
                    <span className='icon icon-trolley bg-white'></span>
                </div>
            </div>
        </div>
    )
}

export default MiniCarouselCard
