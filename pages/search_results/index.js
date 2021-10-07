import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import FavoritesSection from '../../components/FavoritesSection'

const Index = () => {
    return (
        <div>
            <div className='main'>
                <LinksOfPages />
                <FavoritesSection
                    title="Результат поиска"
                    text="По вашему запросу lorem ipsum ничего не найдено"
                    srcc="../assets/images/empty-box-two.png"
                    toggle={false}
                />
            </div>
        </div>
    )
}

export default Index;
