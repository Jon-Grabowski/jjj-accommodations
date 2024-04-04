import React from 'react'
import ShortTermRentalCard from './ShortTermRentalCard'
import { rentalCardData } from './utilitiesProp'

function ShortTermRental() {
    
    const cards = rentalCardData.map((rental, index) => {
        return <ShortTermRentalCard key={index} rental={rental} />
    })

    return (
        <div className='bg-dark border border-top-0 rounded-bottom'>
            <div className='pt-3'>
                <p className='display-5 fw-bold'>Rental Management</p>
                <p className='fs-5 mt-3 fst-italic'>"From Listing Setup to Guest Services - Seamlessly Manage Your Airbnb Property with Us!"</p>
            </div>
            <div className='d-flex flex-wrap justify-content-evenly gap-3 pb-5'>
                {cards}
            </div>
        </div>
    )
}

export default ShortTermRental
