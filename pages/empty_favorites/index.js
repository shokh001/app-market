import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import FavoritesSection from '../../components/FavoritesSection'

const Index = () => {
    return (
        <div>
            <div className='main'>
                <LinksOfPages />
                <FavoritesSection
                    title="Избранное"
                    text="Избранные товары отсутствуют, для того чтобы добавить перейдите в каталог"
                    srcc="../assets/images/empty-box.png"
                    toggle={true}
                />
            </div>
        </div>
    )
}

export default Index;
