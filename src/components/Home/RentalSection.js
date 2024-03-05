import React from 'react'
import ImageGallery from "react-image-gallery";
import { images } from './utilitiesHome';
import './rentalsection.css'
import { useNavigate } from 'react-router-dom';



function RentalSection() {
    const navigate = useNavigate()
    function handleClick() {
        navigate('/rentals')
    }


    return (    
        <div id='rental-section-wrapper' className='d-flex flex-wrap justify-content-center align-items-center'>
            <div id='rentals-text'>
                <h1>Rentals</h1>
                <p className=''>Check out our current listing of rental properties and plan your relaxing getaway in the beautiful Catskill Mountains!</p>
            </div>  
            <div id='carousel-section' className='w-lg-50 w-100'>
                <ImageGallery items={images} autoPlay={true} slideInterval={5000} onClick={handleClick} showFullscreenButton={false} showThumbnails={false} showPlayButton={false} />
            </div>
        </div>  
    )
}

export default RentalSection
