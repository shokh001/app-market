import React from 'react'
import Profile from '../../components/Profile'
import LinksOfPages from '../../components/LinksOfPages'


const Index = () => {
    return (
        <div className='main'>
            <LinksOfPages />
            <Profile my_orders />
        </div>
    )
}

export default Index;
