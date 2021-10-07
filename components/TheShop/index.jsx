import React from 'react'
import MarketCard from '../MarketCard';
import styles from './TheShop.module.scss';

const TheShop = () => {

    const data = [
        {
            id:1,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:2,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:3,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:4,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:5,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:6,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:7,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:8,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:9,
            url:'./assets/images/idea.png',
            text:'Idea'
        },
        {
            id:10,
            url:'./assets/images/idea.png',
            text:'Idea'
        }
    ]
    return (
        <div className={styles.TheShop}>
            <h3 className='font-montserrat-semi-bold mb-0'>Магазины</h3>
            <div className={styles.cardWrapper + " d-flex justify-content-between align-items-center"}>
                {
                    data.map((value)=> {
                        return(
                            <MarketCard key={value.id} value={value} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TheShop
