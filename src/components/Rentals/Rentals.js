import React from 'react';
import { useState, useRef } from 'react';
import ReviewCarousel from './ReviewCarousel';
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
    // TODO: CHECK REFS BEFORE DELETING RENTAL TOP SECTION.
    return (
        <div className='overflow-hidden'>
            <div ref ={managementRef}>
                <RentalManagement data={rentalManagementData} />
            </div>
            <div className='container-xl d-flex flex-wrap justify-content-center align-items-center gap-5 my-4 my-lg-5'>
                    <Animation variant='fadeIn' duration={2} delay={.5}>
                        <img src='../images/services/namaste-sign.jpeg' alt='nameste' className='my-2' style={{width:'14rem'}}/>
                    </Animation>
                    <Animation variant='slideLeft' duration={1.2}>
                        <ReviewCarousel />
                    </Animation>
                </div>
                <Animation variant='fadeIn' duration={1.5}>
                    <div ref={listingRef} className=' bg-white bg-opacity-25 d-flex flex-column'>
                        <div className='pt-4 pb-2'>
                            <span id='rental-listings-header' className='display-1 fw-bold fst-italic'>Rental Listings</span>
                            <div className='container-lg d-flex justify-content-center'>
                                    <div className='mt-2' style={{maxWidth:'50rem'}}>
                                        <span id='management-header-body' className='fw-bold fs-2 fst-italic'>Explore our current listing of rental properties and plan your relaxing vacation in the beautiful Catskill Mountains!</span>
                                    </div>
                            </div>
                        </div>
                        <div className=''>
                            <div id='rental-cards-wrapper'className='container-lg w-full d-flex gap-2 overflow-auto my-3'>
                                {rentalCards}
                            </div>
                        </div>
                    </div>
                </Animation>
            {/* <div className='container-lg mb-5'>
                <h3 className='text-start mt-5'>Explore Our Properties:</h3>
                <div id='rental-cards-wrapper'className='w-full d-flex gap-2 overflow-auto my-3'>
                    {rentalCards}
                </div>
            </div> */}
            
            <FeaturedRental rental={featureRental} featuredRef={featuredRef}/>

            
        </div>
    )
}

export default Rentals
