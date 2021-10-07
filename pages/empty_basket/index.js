import React from 'react'
import Basket from '../../components/Basket'
import LinksOfPages from '../../components/LinksOfPages'

const Index = () => {
    return (
        <div>
            <div className='main'>
                <LinksOfPages />
                <Basket />
            </div>
        </div>
    )
}

export default Index;
