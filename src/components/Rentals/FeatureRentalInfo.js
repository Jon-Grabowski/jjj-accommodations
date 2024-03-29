import React from 'react'
import { Link } from 'react-router-dom'

function FeatureRentalInfo({rental}) {
    const { name, description, details, type, location, amenities, bnbLink } = rental

    const amenitiesListLeft = []
    const amenitiesListRight = []

    amenities.forEach((amenity, index)=>{
        if (index%2 !== 0) amenitiesListLeft.push(<li key={index}>{amenity}</li>)
        else amenitiesListRight.push(<li key={index}>{amenity}</li>)
    })

    const detailsList = details.map((detail, index) => {
        if (index === details.length-1) return <span key={index} className='ms-1 fst-italic'>{detail}</span>
        else return <span key={index} className='ms-1 fst-italic'>{`${detail} •`}</span>
    })

    return (
        <div className='col-md-6 d-flex flex-column' style={{height:'100%'}}>
            <div className="mb-4 text-white">
                <p className='fst-italic mb-0'>{location} - {type}</p>
                <div className='d-flex justify-content-center' style={{fontSize: '14px'}}>
                    {detailsList}
                </div>
            </div>
            <p className="feature-description card-text text-start text-wrap">{description}</p>
            <div className=''>
                <h3 className='d-inline border-bottom px-3 fs-4'>Amenities</h3>
                <div className='row m-auto ps-5 mt-3'>
                    <ul className='text-start col-6 mb-0'>
                        {amenitiesListRight}
                    </ul>
                    <ul className='text-start col-6'>
                        {amenitiesListLeft}
                    </ul>
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
