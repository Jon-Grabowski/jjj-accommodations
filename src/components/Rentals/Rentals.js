import React from 'react';
import { useState } from 'react';
import FeaturedRental from './FeaturedRental';
import { rentalProperties } from './utilitiesRental';

function Rentals() {
    const [featureRental, setFeatureRental] = useState(rentalProperties[0])
    const { name, description, details, type, location, amenities } = featureRental

    const amenitiesListLeft = []
    const amenitiesListRight = []

    amenities.forEach((amenity, index)=>{
        if (index%2 === 0) amenitiesListLeft.push(<li>{amenity}</li>)
        else amenitiesListRight.push(<li>{amenity}</li>)
    })

    const detailsList = details.map((detail, index) => {
        if (index === details.length-1) return <span className='ms-1 fst-italic'>{detail}</span>
        else return <span className='ms-1 fst-italic'>{`${detail} •`}</span>
    })

    return (
        <div className='mt-5 container-lg'>
            <h1 className='display-5'>Current Rental Listings</h1>

            <div className='row align-items-center'>
                <div className='col-md-7'>
                    <FeaturedRental rental={featureRental} />
                </div>
                <div className='col-md-5 d-flex flex-column' style={{height:'100%'}}>
                    <div className="mb-4 text-white">
                        <p className='fs-2 fw-bold mb-1'>{name}</p>
                        <p className='fst-italic mb-0'>{location} - {type}</p>
                        <div className='d-flex justify-content-center' style={{fontSize: '14px'}}>
                            {detailsList}
                        </div>
                    </div>
                    <p className="card-text text-start">{description}</p>
                    <div className=''>
                        <h3 className='d-inline border-bottom px-5 fs-4'>Amenities</h3>
                        <div className='row m-auto ps-3 mt-3'>
                            <ul className='text-start col-6 mb-0'>
                                {amenitiesListRight}
                            </ul>
                            <ul className='text-start col-6'>
                                {amenitiesListLeft}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <div className='d-flex justify-content-center gap-3'>
                
            </div>

        </div>
    )
}

export default Rentals
