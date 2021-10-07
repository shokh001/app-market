import React from 'react'
import styles from './FullBasket.module.scss';
import ItemTR from './ItemTR';

const TableBasket = () => {

    const data = [
        {
            id: 1,
            productImg: './assets/images/camera.png',
            productName: 'Lorem ipsum dolor sit amet, consectetur',
            cost: '220 000 сум',
            number: 2
        },
        {
            id: 2,
            productImg: './assets/images/camera.png',
            productName: 'Lorem ipsum dolor sit amet, consectetur',
            cost: '220 000 сум',
            number: 2
        },
        {
            id: 3,
            productImg: './assets/images/camera.png',
            productName: 'Lorem ipsum dolor sit amet, consectetur',
            cost: '220 000 сум',
            number: 2
        },
        {
            id: 4,
            productImg: './assets/images/camera.png',
            productName: 'Lorem ipsum dolor sit amet, consectetur',
            cost: '220 000 сум',
            number: 2
        },
    ]

    return (
        <div className={styles.FullBasket}>
            <table>
                <thead>
                    <tr>
                        <td className='font-montserrat-regular'>Товар</td>
                        <td className='font-montserrat-regular'>Цена</td>
                        <td className='font-montserrat-regular'>Количество</td>
                        <td className='font-montserrat-regular'>2</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((value) => <ItemTR key={value.id} value={value} />)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableBasket
