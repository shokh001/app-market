import React, {useState} from 'react'
import styles from './ItemTR.module.scss'

const ItemTR = ({ value }) => {

    const { productImg, productName, cost, number } = value;

    const [count, setCounter] = useState(1);

    const decriment = () => {
        if (count > 0) {
            setCounter(count - 1);
        }
    }
    const increment = () => {
        setCounter(count + 1)
    }

    return (
        <tr className={styles.ItemTR}>
            <td className='d-flex align-items-center'>
                <img src={productImg} alt="" />
                <span>{productName}</span>
            </td>
            <td>{cost}</td>
            <td>
                <div className={styles.counter}>

                <button onClick={() => decriment()} type='button'>
                    <span className='icon icon-minus'></span>
                </button>
                <span>{count}</span>
                <button onClick={() => increment()} type='button'>
                    <span className='icon icon-add'></span>
                </button>
                </div>
            </td>
            <td className='position-relative'>
                <span>{number}</span>
                <div className={styles.deteleBtn}>
                    <span className='icon icon-delete'></span>
                </div>
            </td>
        </tr>
    )
}

export default ItemTR
