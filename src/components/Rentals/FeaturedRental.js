import React from 'react'
import FeaturedRentalCarousel from './FeaturedRentalCarousel'


function FeaturedRental({rental}) {
    const {name, images} = rental

    return (
        <div className="text-center m-auto" style={{maxWidth:'40rem'}}>

            <div className="">
                <div className='flex '>
                    <FeaturedRentalCarousel images={images} />
                </div>
                
            </div>
            <div className="card-footer text-body-secondary">
                <button>See Listing</button>
            </div>
        </div>
    )
}

export default FeaturedRental
