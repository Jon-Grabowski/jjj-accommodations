import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedRentalCarousel from './FeaturedRentalCarousel'


function FeaturedRental({rental}) {
    const {images, bnbLink} = rental

    return (
        <div className="text-center m-auto" style={{maxWidth:'40rem'}}>

            <div className="">
                <div className='flex '>
                    <FeaturedRentalCarousel images={images} />
                </div>
                
            </div>
            <div className="card-footer text-body-secondary mt-3">
                <Link 
                    to={bnbLink}
                    target="_blank"
                    type="button"
                    className='btn btn-dark fs-5 border' 
                    style={{backgroundColor:'#FF5A5F'}}
                ><img style={{width:'40px'}} className='me-2' src='../images/social icons/airbnb-2-logo-white.png'/>Book Now</Link>
            </div>
        </div>
    )
}

export default FeaturedRental
