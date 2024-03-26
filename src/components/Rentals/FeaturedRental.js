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
                
            </div>
        </div>
    )
}

export default FeaturedRental
