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
                    <div className='mb-4 py-4 px-2 bg-black bg-opacity-50'>
                        <Animation variant="slideLeft" duration={1.5}>
                            <h1 className='display-2 fw-bold fst-italic'>Rental Property Management</h1>
                        </Animation>
                    </div>
                    <Animation variant="fadeIn" duration={1.5}>
                        <div className='container-lg d-flex flex-column mb-1 text-start p-4'>
                            <span className='display-4 fw-bold mb-2'>Looking to maximize your rental income?</span>
                            <span className='display-5 fst-italic'>We've got you covered!</span>
                        </div>
                    </Animation>
                    <Animation variant='slideUp' duration={1.5}>
                        <div className='container-xxl d-flex flex-lg-row-reverse row m-auto align-items-center py-5'>
                            <div className='col-xl-6 m-4 mx-auto'>
                                <div id='carousel-section' className='w-100 m-auto'>
                                    <RentalCarousel images={images}/>
                                </div>
                            </div>
                            <div className='col-xl-6 d-flex'>
                                <div id='rentals-text' className='m-auto mb-3 mb-lg-0 d-flex flex-column justify-content-between align-items-center'>
                                    <div className='mb-3'>
                                        <h2 className='text-start mb-4'>Explore our comprehensive management services including:</h2>
                                        <ul className='text-start fs-3 mb-4'>
                                            <li>Airbnb Listing Management</li>
                                            <li>Guest Communications</li>
                                            <li>Cleanings</li>
                                            <li>Maintenance</li>
                                            <li>Decor</li>
                                        </ul>
                                        <p className='fs-4 fst-italic'>Plus, browse our current rental listings to find your next happy getaway!</p>
                                    </div>
                                    <Link to='/rentals'><button className='btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-4'>Learn More <ArrowRight size={35}/></button></Link>
                                </div>  
                            </div>
                        </div>
                    </Animation>
                </Animation>
            </div>   
    )
}

export default RentalSection
