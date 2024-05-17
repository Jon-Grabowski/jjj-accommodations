import React from 'react'
import { Link } from 'react-router-dom'

function FeatureRentalInfo({rental}) {
    const { description, amenities, bnbLink } = rental

    const amenitiesListLeft = []
    const amenitiesListRight = []

    // amenities.forEach((amenity, index)=>{
    //     if (index%2 !== 0) amenitiesListLeft.push(<li key={index} className='ms-4'>{amenity}</li>)
    //     else amenitiesListRight.push(<li key={index} className='ms-4'>{amenity}</li>)
    // })

    amenities.forEach((amenity, index)=>{
        if (index%2 !== 0) amenitiesListLeft.push(<span key={index} className=''>• {amenity}</span>)
        else amenitiesListRight.push(<span key={index} className=''>• {amenity}</span>)
    })


    return (
        <div className='col-lg-6 d-flex flex-column pt-0 pt-sm-3' style={{height:'100%'}}>
            <p className="feature-description card-text text-start text-wrap">{description}</p>
            <div className=''>
                <h3 className='d-inline border-bottom px-3 fs-4'>Amenities</h3>
                <div className='d-flex justify-content-center gap-3 m-auto mt-4'>
                    <div className='text-start d-flex flex-column mb-0 ps-1 ps-sm-5'>
                        {amenitiesListRight}
                    </div>
                    <div className='text-start d-flex flex-column ps-1 ps-sm-5'>
                        {amenitiesListLeft}
                    </div>
                </div>
                <Link 
                        to={bnbLink}
                        target="_blank"
                        type="button"
                        className='btn btn-dark fs-5 border w-50 m-auto mt-4' 
                        style={{backgroundColor:'#FF5A5F'}}
                    >Book on<img style={{width:'80px'}} className='ms-2 pb-1' src='../images/social icons/airbnb-2-logo-white.png'
                    alt='AirBnB Logo'/></Link>
            </div>
        </div>
    )
}

export default FeatureRentalInfo
