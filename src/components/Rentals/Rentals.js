import React from 'react';
import { useState, useRef } from 'react';
import RentalTopSection from './RentalTopSection';
import RentalManagement from './RentalManagement';
import FeaturedRental from './FeaturedRental';
import { rentalManagementData, rentalProperties } from './utilitiesRental';
import RentalCard from './RentalCard';
import './rentals.css'


function Rentals() {
    const [featureRental, setFeatureRental] = useState(rentalProperties[0])
    const featuredRef = useRef()
    const cardStyle = {
        maxWidth: '15rem',
    }

    function handleRentalCardClick(index){
        setFeatureRental(rentalProperties[index])
        featuredRef.current.scrollIntoView()

    }

    const rentalCards = rentalProperties.map((rental, index) => {
        if (rental === featureRental) {
            const selectedStyle = {...cardStyle, borderColor: 'white'}
            return <RentalCard key={index} rental={rental} index={index} style={selectedStyle} handleClick={handleRentalCardClick}/>
        }
        else return <RentalCard key={index} rental={rental} index={index} style={cardStyle} handleClick={handleRentalCardClick}/> 
        
    })

    return (
        <div>
            <RentalTopSection />
            <div className='mt-3 container-lg'>
                <RentalManagement data={rentalManagementData} />
                
                <h1 className='display-2 fw-bold'>Current Listings</h1>
                <FeaturedRental rental={featureRental} featuredRef={featuredRef}/>

                <div>
                    <h3 className='text-start mt-5'>Explore Our Properties:</h3>
                    <div id='rental-cards-wrapper'className='w-full d-flex gap-2 overflow-auto my-3'>
                        {rentalCards}
                    </div>
                </div>

                <div className='d-flex justify-content-center gap-3'>
                    
                </div>

            </div>
        </div>
    )
}

export default Rentals
