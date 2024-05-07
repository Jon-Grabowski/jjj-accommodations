import React from 'react'
import RentalCarousel from './RentalCarousel';
import './rentalsection.css'
import { Link } from 'react-router-dom';
import { rentalProperties } from '../Rentals/utilitiesRental';



function RentalSection() {

    const images = rentalProperties.map(rental=>{
        return rental.images[0]
    })

    return (    
        <div id='rental-section-wrapper' className='d-flex flex-wrap flex-md-nowrap justify-content-center align-items-center'>
            <div id='rentals-text' className='d-flex flex-column justify-content-between align-items-center'>
                <h1 className='display-3 fw-bold'>Rentals</h1>
                <p className='w-100 fs-3'>Explore our current listing of rental properties and plan your relaxing getaway in the beautiful Catskill Mountains!</p>
                <Link to='/rentals'><button className='btn btn-primary mb-2 px-4'>Rental Services</button></Link>
            </div>  
            <div id='carousel-section' className='w-lg-50 w-100'>
                <RentalCarousel images={images}/>
            </div>
        </div>  
    )
}

export default RentalSection
