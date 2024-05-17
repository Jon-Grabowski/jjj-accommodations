import React from 'react';
import { useState, useRef } from 'react';
import RentalTopSection from './RentalTopSection';
import RentalManagement from './RentalManagement';
import FeaturedRental from './FeaturedRental';
import Animation from '../Utilities/Animation';
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
        <div className='overflow-hidden'>
            <RentalTopSection listingRef={listingRef} managementRef={managementRef}/>
                <div className='container-xl d-flex flex-wrap justify-content-center align-items-center gap-2 my-4 my-lg-5'>
                    <Animation variant='fadeIn' duration={2} delay={.5}>
                        <img src='../images/services/namaste-sign.jpeg' alt='nameste' className='my-2' style={{width:'13rem'}}/>
                    </Animation>
                    <Animation variant='slideLeft' duration={1.2}>
                        <h3 className='display-6 mx-1 mx-lg-5 mb-0 fst-italic fw-bold' style={{maxWidth:'40rem'}}>"Explore our rental property management services or browse our current rental listings for your next happy getaway!"</h3>
                    </Animation>
                </div>
            <div ref ={managementRef}>
                <RentalManagement data={rentalManagementData} />
            </div>
                <Animation variant='fadeIn' duration={1.5}>
                    <div ref={listingRef} id='rental-listings-banner' className=''>
                        <div className='bg-black bg-opacity-50 pt-4 pb-5'>
                            <span id='rental-listings-header' className='display-1 fw-bold fst-italic'>Rental Listings</span>
                            <div className='container-lg d-flex justify-content-center'>
                                    <div className='mt-2' style={{maxWidth:'50rem'}}>
                                        <span id='management-header-body' className='fw-bold fs-2 fst-italic'>Explore our current listing of rental properties and plan your relaxing vacation in the beautiful Catskill Mountains!</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </Animation>
            
            <FeaturedRental rental={featureRental} featuredRef={featuredRef}/>

            <div className='container-lg mb-5'>
                <h3 className='text-start mt-5'>Explore Our Properties:</h3>
                <div id='rental-cards-wrapper'className='w-full d-flex gap-2 overflow-auto my-3'>
                    {rentalCards}
                </div>
            </div>
            
        </div>
    )
}

export default Rentals
