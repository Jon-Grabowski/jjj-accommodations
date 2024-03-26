import React from 'react'
import RentalCarousel from '../Home/RentalCarousel'
import FeatureRentalInfo from './FeatureRentalInfo'


function FeaturedRental({rental}) {
    const {images} = rental

    return (
        <div className='row align-items-center m-auto'>

            <div className='col-md-6'>  
                <div className="text-center m-auto" style={{maxWidth:'40rem'}}>
                    <RentalCarousel images={images} />
                    <div className="card-footer text-body-secondary">
                    </div>
                </div>
            </div>

            <FeatureRentalInfo rental={rental} />

        </div>
    )
}

export default FeaturedRental
