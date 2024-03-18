import React from 'react';
import { useState } from 'react';
import FeaturedRental from './FeaturedRental';
import { rentalProperties } from './utilitiesRental';

function Rentals() {
    const [featureRental, setFeatureRental] = useState(rentalProperties[0])

    return (
        <div className='mt-5 border container-lg'>
            <h1>Rentals Page</h1>
            <div className='row'>
                <div className='col-md-8'>
                    <FeaturedRental rental={featureRental}/>
                </div>
                <div className='col-md-4'>

                </div>

            </div>
        </div>
    )
}

export default Rentals
