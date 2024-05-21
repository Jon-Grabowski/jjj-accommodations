import React from 'react';
import ReviewCarousel from './ReviewCarousel';
import RentalManagement from './RentalManagement';
import RentalListings from './RentalListings';
import Animation from '../Utilities/Animation';
import './rentals.css'


function Rentals() {

    return (
        <div className='overflow-hidden'>
            <RentalManagement />
            <div className='container-xl d-flex flex-wrap justify-content-center align-items-center gap-5 my-5 py-5 my-lg-5'>
                <Animation variant='fadeIn' duration={2} delay={.5}>
                    <img src='../images/services/namaste-sign.jpeg' alt='nameste' className='my-2' style={{width:'14rem'}}/>
                </Animation>
                <Animation variant='slideLeft' duration={1.2}>
                    <ReviewCarousel />
                </Animation>
            </div>
            <RentalListings />
        </div>
    )
}

export default Rentals
