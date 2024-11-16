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
                <Animation variant='fadeIn' duration={1.5}>
                    <div className='pt-4 bg-black bg-opacity-50 border-top border-white '>
                        <Animation variant="slideLeft" duration={1.5}>
                            <div className="container-lg">
                                <h1 className='display-4 fw-bold text-center mb-0 section-titles py-4'>Rental Property Management</h1>
                            </div>
                        </Animation>
                    </div>
                    <div className="bg-black bg-opacity-50 pb-4 border-bottom border-white">
                        <Animation variant="slideRight" duration={1.5}>
                            <div className='container-lg d-flex flex-column text-center'>
                                <span className='fst-italic fs-4 section-subheader'>Maximize Earnings, Eliminate Hassle</span>
                                {/* <span className='fs-5'>We've got you covered!</span> */}
                            </div>
                        </Animation>
                    </div>
                    <Animation variant='slideUp' duration={1.5}>
                        <div className='container-xxl d-flex flex-lg-row-reverse row m-auto align-items-center pt-5 mt-4 pb-5 mb-4'>
                            <div className='col-xl-6 m-4 mx-auto'>
                                <div id='carousel-section' className='w-100 m-auto'>
                                    <RentalCarousel images={images}/>
                                </div>
                            </div>
                            <div className='col-xl-6 d-flex'>
                                <div id='rentals-text' className='m-auto mb-3 mb-lg-0 d-flex flex-column justify-content-between align-items-center'>
                                    <div className='mb-3'>
                                        <h2 className='text-start fs-3 mb-4 section-header' style={{"maxWidth":"43rem"}}>Explore our comprehensive management services including:</h2>
                                        <ul className='text-start fs-4 mb-4 section-list'>
                                            <li>Airbnb Listing Management</li>
                                            <li>Guest Communications</li>
                                            <li>Cleanings</li>
                                            <li>Maintenance</li>
                                            <li>Decor</li>
                                            <li>Seasonal Services</li>
                                        </ul>
                                        <p className='mx-auto fs-5 fst-italic w-75'>Plus, browse our current rental listings to find your next happy getaway!</p>
                                    </div>
                                    <Link to='/rentals'><button className='btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-6 section-header'>Learn More <ArrowRight size={35}/></button></Link>
                                </div>  
                            </div>
                        </div>
                    </Animation>
                </Animation>
            </div>   
    )
}

export default RentalSection
