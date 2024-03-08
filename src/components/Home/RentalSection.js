import React from 'react'
import ImageGallery from "react-image-gallery";
import RentalCarousel from './RentalCarousel';
import { images } from './utilitiesHome';
import './rentalsection.css'
import { useNavigate, Link } from 'react-router-dom';



function RentalSection() {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/rentals')
    }


    return (    
        <div id='rental-section-wrapper' className='d-flex flex-wrap justify-content-center align-items-center'>
            <div id='rentals-text' className='d-flex flex-column justify-content-between align-items-center'>
                <h1 className='display-4 fw-bold'>Rentals</h1>
                <p className='w-75'>Check out our current listing of rental properties and plan your relaxing getaway in the beautiful Catskill Mountains!</p>
                <Link to='/rentals'><button className='btn btn-primary mb-2 px-4'>See Listings</button></Link>
            </div>  
            <div id='carousel-section' className='w-lg-50 w-100'>
                {/* <ImageGallery items={images} autoPlay={true} slideInterval={4000} onClick={handleClick} showFullscreenButton={false} showThumbnails={false} showPlayButton={false} /> */}
                <RentalCarousel />
            </div>
        </div>  
    )
}

export default RentalSection
