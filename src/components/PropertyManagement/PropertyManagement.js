import React from 'react'
import PropertyTopSection from './PropertyTopSection'
import ResidentialProperty from './ResidentialProperty'
import ShortTermRental from './ShortTermRental'
import './propertymanagement.css'

function PropertyManagement() {
    
    return (
        <div className=''>
            <PropertyTopSection />
            <div className='container-lg'>
                <ShortTermRental />
                <ResidentialProperty />
            </div>
        </div>
    )
}

export default PropertyManagement
