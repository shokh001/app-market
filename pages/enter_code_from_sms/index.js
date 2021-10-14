import React from 'react'
import Profile from '../../components/Profile'
import LinksOfPages from '../../components/LinksOfPages'


const Index = () => {
    return (
        <div className='main'>
            <LinksOfPages />
            <Profile enter_code_from_sms />
        </div>
    )
}

export default Index;
