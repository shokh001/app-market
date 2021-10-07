import React from 'react'
import LinksOfPages from '../../components/LinksOfPages'
import Lorem from '../../components/Lorem'
import PaginationSection from '../../components/PaginationSection'

const Index = () => {
    
    return (
        <div>
            <div className='main'>
                <LinksOfPages />
                <Lorem />
                <div className='d-flex container align-items-start'>
                    {/* Komponeta keladi */}
                    
                    <PaginationSection />
                </div>
            </div>

        </div>
    )
}

export default Index;
