import React from 'react';
import { useState } from 'react';
import FeaturedRental from './FeaturedRental';
import { rentalProperties } from './utilitiesRental';

function Rentals() {
    const [featureRental, setFeatureRental] = useState(rentalProperties[0])
    const { name, description, details, type, location, amenities } = featureRental

    const amenitiesList = amenities.map((amenity) => {
        return <li>{amenity}</li>
    })

    return (
        <div className='mt-5 container-lg'>
            <h1>Rentals Page</h1>

            <div className='row align-items-center'>
                <div className='col-md-7'>
                    <FeaturedRental rental={featureRental} />
                </div>
                <div className='col-md-5 d-flex flex-column' style={{height:'100%'}}>
                    <div className="mb-4 text-white">
                        <p className='fs-2 fw-bold mb-1'>{name}</p>
                        <p className='fst-italic'>{location} - {type}</p>
                    </div>
                    <p className="card-text text-start">{description}</p>
                </div>

            </div>

            <div className='row'>
                <div className="col-md-7">
                    <p>{details}</p>
                </div>
                <div className='col-md-5'>
                    <h3 className='border-bottom pb-1'>Amenities</h3>
                    <ul className='text-start'>
                        {amenitiesList}
                    </ul>
                </div>
            </div>

            {/* <div className='d-flex justify-content-center flex-wrap bg-white bg-opacity-25'>
                <div className=" border" style={{maxWidth: '20rem'}}>
                    <p className="card-text">{description}</p>
                </div>
                <div className=' border'>
                    <h3 className='border-bottom pb-1'>Amenities</h3>
                    <ul className='text-start'>
                        {amenitiesList}
                    </ul>
                </div>
            </div> */}

        </div>
    )
}

export default Rentals
