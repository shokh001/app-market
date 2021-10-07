import React from 'react'
import Link from 'next/link';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <div className={styles.AboutUs}>
            <div className="container d-flex align-items-center">
                <img src="./assets/images/aboutUs.png" alt="aboutUs" />
                <div className={styles.info}>
                    <h3 className='font-montserrat-semi-bold'>О нас</h3>
                    <p className='font-monserrat-regular'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis pharetra nascetur integer aliquet. Massa tincidunt enim fermentum consectetur condimentum. Ut orci fermentum nulla varius pellentesque nulla lectus ut. Dictum nisl, morbi tortor eu erat imperdiet. Vitae id blandit tempus amet in consectetur vestibulum suspendisse. Sed nulla lorem risus elit bibendum leo lorem volutpat viverra. Bibendum lobortis amet eget vulputate. Odio praesent iaculis dignissim mus tincidunt felis. Dictum viverra ligula purus egestas a. Sed odio morbi dolor tincidunt interdum ornare. Tellus, vestibulum morbi platea ipsum odio ornare accumsan phasellus. Magna id diam venenatis magna mauris sit habitant donec. Tincidunt eu vulputate pretium sollicitudin nisl aliquam nulla suspendisse convallis. Hac enim pharetra sodales egestas id donec id.

                        Nascetur id id pharetra sed imperdiet viverra pharetra neque adipiscing. Integer elementum lectus mollis amet, diam ornare turpis hac. Elit non non, tellus vel leo tempor urna. Facilisis nulla lacus ac id diam sapien, vel vestibulum maecenas. Aliquam id tellus velit malesuada egestas elit. Pulvinar a accumsan arcu sed blandit feugiat ultrices. Tellus maecenas eget consectetur vel ut.

                        Congue aliquam malesuada aliquet sed eget. Tortor non in non luctus velit. Ut leo, ipsum pellentesque sed ullamcorper ullamcorper. Lorem gravida fringilla donec ornare elit. Faucibus et commodo tellus nibh sed integer id. Vel volutpat lectus ac donec ac massa mauris egestas. Lorem tincidunt lorem ac orci pharetra vulputate leo, amet. Morbi auctor semper convallis venenatis eu. Tempor in tortor, habitasse velit suspendisse neque. Dui scelerisque arcu mus eget tristique diam. Mattis sociis justo, amet egestas in etiam vivamus dui viverra. Vitae in suspendisse etiam turpis nulla volutpat quis rutrum habitasse. Porttitor quam eget tincidunt feugiat.
                    </p>

                    <Link href='/'>
                        <a className='text-decoration-none'>Главная страница</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
