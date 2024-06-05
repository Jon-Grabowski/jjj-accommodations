import React from 'react'
import { useState, useRef } from 'react'
import FeaturedRental from './FeaturedRental'
import RentalCard from './RentalCard'
import Animation from '../Utilities/Animation'
import { rentalProperties } from './utilitiesRental';

function RentalListings() {
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
            const selectedStyle = {...cardStyle, border: '4px solid rgba(255,255,255)'}
            return <RentalCard key={index} rental={rental} index={index} style={selectedStyle} handleClick={handleRentalCardClick}/>
        }
        else return <RentalCard key={index} rental={rental} index={index} style={cardStyle} handleClick={handleRentalCardClick}/> 
        
    })
    return (
        <div>
            <Animation variant='fadeIn' duration={1.5}>
                <div className='d-flex flex-column'>
                    <div className='pt-4 pb-2'>
                        <span className='display-1 fw-bold fst-italics'>Rental Listings</span>
                        <div className='container-lg d-flex justify-content-center my-4'>
                                <div className='mt-2' style={{maxWidth:'50rem'}}>
                                    <span id='management-header-body' className='fw-bold fs-2 fst-italic'>Explore our current listing of rental properties and plan your relaxing vacation in the beautiful Catskill Mountains!</span>
                                </div>
                        </div>
                    </div>
                    <div className='mb-5'>
                        <div id='rental-cards-wrapper'className='container-lg w-full d-flex gap-2 overflow-auto my-3 pb-3'>
                            {rentalCards}
                        </div>
                    </div>
                </div>
            </Animation>
            <FeaturedRental rental={featureRental} featuredRef={featuredRef}/>
        </div>
    )
}

export default RentalListings
