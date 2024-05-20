import React from 'react'
import RentalCarousel from './RentalCarousel';
import Animation from '../Utilities/Animation';
import './rentalsection.css'
import { Link } from 'react-router-dom';
import { rentalProperties } from '../Rentals/utilitiesRental';
import { ArrowRight } from 'lucide-react';



function RentalSection() {

    const images = rentalProperties.map(rental=>{
        return rental.images[0]
    })

    return (
            <div id='rental-section-wrapper' className='overflow-hidden'>
                <Animation variant='fadeIn' duration={2.5}>
                    <div className='mb-4 py-4 px-2 bg-black bg-opacity-25 border-bottom'>
                        <Animation variant="slideLeft" duration={1.5}>
                            <h1 className='display-2 fw-bold fst-italic'>Rental Property Management</h1>
                        </Animation>
                    </div>
                    <Animation variant="fadeIn" duration={1.5}>
                        <div className='d-flex flex-column mb-4'>
                            <span className='display-5 fw-bold'>Looking to maximize your rental income?</span>
                            <span className='display-5 fst-italic'>We've got you covered!</span>
                        </div>
                    </Animation>
                    <Animation variant='slideUp' duration={1.5}>
                        <div className='container-lg row m-auto align-items-center'>
                            <div className='col-lg-6 d-flex'>
                                <div id='rentals-text' className='m-auto mb-3 mb-lg-0 d-flex flex-column justify-content-between align-items-center'>
                                    <span className='text-start fs-4 mb-5'>Explore our comprehensive management services, including Airbnb listing management, guest communications, cleaning, maintenance, and decor. Plus, browse our current rental listings to find your next happy getaway.</span>
                                    <span className='fs-5 fw-bold fst-italic mb-3'>Let us handle the details while you enjoy the benefits of hassle-free property management!</span>
                                    <Link to='/rentals'><button className='btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-5'>Learn More <ArrowRight/></button></Link>
                                </div>  
                            </div>
                            <div className='col-lg-6'>
                                <div id='carousel-section' className='w-lg-50 w-100 m-auto'>
                                    <RentalCarousel images={images}/>
                                </div>
                            </div>
                        </div>
                    </Animation>
                </Animation>
            </div>   
    )
}

export default RentalSection
