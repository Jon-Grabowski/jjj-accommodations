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
    const managementRef = useRef()
    const listingRef = useRef()

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
            <RentalTopSection listingRef={listingRef} managementRef={managementRef}/>
            <div className='container-xl d-flex flex-wrap justify-content-center align-items-center mt-2 gap-2 mt-lg-5'>
                <h3 className='display-5 px-1 px-lg-5 fst-italic' style={{maxWidth:'50rem'}}>"Explore our rental property management services or browse our current rental listings for your next happy getaway!"</h3>
                <img src='../images/stock-images/hands-holding-house.jpg' alt='hands holding house' className='rounded-circle'/>
            </div>
            <div ref ={managementRef} className='mt-5 bg-white bg-opacity-25'>
                <RentalManagement data={rentalManagementData} />
            </div>
                
            <h1 ref={listingRef} className='display-2 fw-bold'>Current Listings</h1>
            <FeaturedRental rental={featureRental} featuredRef={featuredRef}/>

            <div>
                <h3 className='text-start mt-5'>Explore Our Properties:</h3>
                <div id='rental-cards-wrapper'className='w-full d-flex gap-2 overflow-auto my-3'>
                    {rentalCards}
                </div>
            </div>
            
        </div>
    )
}

export default Rentals
