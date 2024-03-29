import React from 'react';
import { useState } from 'react';
import FeaturedRental from './FeaturedRental';
import { rentalProperties } from './utilitiesRental';
import RentalCard from './RentalCard';
import './rentals.css'


function Rentals() {
    const [featureRental, setFeatureRental] = useState(rentalProperties[0])

    const cardStyle = {
        maxWidth: '15rem',
    }

    function handleClick(index){
        setFeatureRental(rentalProperties[index])
        window.scrollTo(0, 0);
    }

    const rentalCards = rentalProperties.map((rental, index) => {
        if (rental === featureRental) {
            const selectedStyle = {...cardStyle, borderColor: 'white'}
            return <RentalCard key={index} rental={rental} index={index} style={selectedStyle} handleClick={handleClick}/>
        }
        else return <RentalCard key={index} rental={rental} index={index} style={cardStyle} handleClick={handleClick}/> 
        
    })

    return (
        <div className='mt-3 container-lg'>
            <p className='fs-1 fw-bold my-5'>{featureRental.name}</p>

            <div className='row align-items-center'>
                <FeaturedRental rental={featureRental} />
            </div>

            <div>
                <h3 className='text-start mt-5'>Explore Our Properties:</h3>
                <div id='rental-cards-wrapper'className='w-full d-flex gap-2 overflow-auto my-3'>
                    {rentalCards}
                </div>
            </div>

            <div className='d-flex justify-content-center gap-3'>
                
            </div>

        </div>
    )
}

export default Rentals
