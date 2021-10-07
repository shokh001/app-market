import React from 'react'
import styles from './AttachFiles.module.scss'

const AttachFiles = () => {
    return (
        <div className={styles.attachFilesForm}>
            <h2 className='font-montserrat-semi-bold'>Прикрепите <br /> файлы</h2>
            <div className='position-relative'>
                <input type="text" placeholder='Паспорт директора' />
                <span className={styles.icon + ' icon icon-paper-clip'}></span>
            </div>
            <div className='position-relative'>
                <input type="text" placeholder='Лицензия' />
                <span className={styles.icon + ' icon icon-paper-clip'}></span>
            </div>
            <div className='position-relative'>
                <input type="text" placeholder='Реквезиты компании' />
                <span className={styles.icon + ' icon icon-paper-clip'}></span>
            </div>
            <textarea cols="30" rows="10" placeholder='Краткая информация о компании и 
            продуктах, которые вы хотите продать'></textarea>
        </div>
    )
}

export default AttachFiles;
