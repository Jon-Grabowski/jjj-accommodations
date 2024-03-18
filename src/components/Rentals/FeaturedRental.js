import React from 'react'
import FeaturedRentalCarousel from './FeaturedRentalCarousel'


function FeaturedRental({rental}) {
    const {name, description, details, type, location, amenities, images} = rental

    return (
        <div className="card text-center">
            <div className="card-header">
                {location}
            </div>
            <div className="">
                <div className='flex border'>
                    {/* <img src={images[0]} style={{width:'80%'}}/> */}
                    <FeaturedRentalCarousel images={images} />
                </div>
                <h5 className="card-title">{name}</h5>
                <p className="card-text m-auto" style={{width:'80%'}}>{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>
    )
}

export default FeaturedRental
