import React from 'react'
import RentalCarousel from './RentalCarousel';
import './rentalsection.css'
import { Link } from 'react-router-dom';
import { rentalProperties } from '../Rentals/utilitiesRental';
import { ArrowRight } from 'lucide-react';



function RentalSection() {

    const images = rentalProperties.map(rental=>{
        return rental.images[0]
    })

    return (    
        <div id='rental-section-wrapper' >
                <h1 className='display-2 fw-bold fst-italic mb-5 py-4 px-2 bg-black bg-opacity-25 border-bottom'>Rental Property Management</h1>
                <div className='container-lg row m-auto align-items-center'>
                    <div className='col-lg-7 d-flex'>
                        <div id='rentals-text' className='m-auto mb-3 mb-lg-0 d-flex flex-column justify-content-center gap-3 align-items-center'>
                            <span className='w-100 fs-3 fw-bold mb-3'>If you're a property owner looking to maximize your rental income, we've got you covered.</span>
                            <span className='w-100 fs-5 mb-3'>Explore our comprehensive management services, including Airbnb listing management, guest communications, cleaning, maintenance, and decor. Plus, browse our current rental listings to find your next happy getaway.</span>
                            <span className='w-100 fs-5 fw-bold'>Let us handle the details while you enjoy the benefits of hassle-free property management!</span>
                            <Link to='/rentals'><button className='btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-5'>Learn More <ArrowRight/></button></Link>
                        </div>  
                    </div>
                    <div className='col-lg-5'>
                        <div id='carousel-section' className='w-lg-50 w-100 m-auto'>
                            <RentalCarousel images={images}/>
                        </div>
                    </div>
                </div>
        </div>  
    )
}

export default RentalSection
