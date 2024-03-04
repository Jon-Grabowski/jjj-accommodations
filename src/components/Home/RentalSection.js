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
        <div className='d-flex justify-content-center align-items-center'>
            <div>
                <h1>Rentals</h1>
                <p>Check out our current listing of rental properties and plan your relaxing getaway in the beautiful Catskill Mountains!</p>
            </div>  
            <div className='w-50'>
                <ImageGallery items={images} autoPlay={true} slideInterval={5000} onClick={handleClick}/>
            </div>
        </div>  
    )
}

export default RentalSection
