import React from 'react';
import { useState } from 'react';
import FeaturedRental from './FeaturedRental';
import { rentalProperties } from './utilitiesRental';
import RentalCard from './RentalCard';
import './rentals.css'


function Rentals() {
    const [featureRental, setFeatureRental] = useState(rentalProperties[0])

    const rentalCards = rentalProperties.map((rental, index) => {
        return <RentalCard key={index} rental={rental} />
    })

    return (
        <div className='mt-3 container-lg'>
            <h1 className='display-5'>Current Rental Listings</h1>

            <div id='rental-cards-wrapper'className='w-full d-flex gap-2 overflow-auto rounded'>
                {rentalCards}
            </div>

            <div className='row align-items-center'>
                <FeaturedRental rental={featureRental} />
            </div>

            <div className='d-flex justify-content-center gap-3'>
                
            </div>

        </div>
    )
}

export default Rentals
