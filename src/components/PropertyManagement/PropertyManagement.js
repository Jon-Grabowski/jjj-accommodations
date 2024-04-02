import React from 'react'
import { useState } from 'react'
import PropertyTopSection from './PropertyTopSection'
import ResidentialProperty from './ResidentialProperty'
import ShortTermRental from './ShortTermRental'
import './propertymanagement.css'

function PropertyManagement() {
    const [shortTermTab, setShortTermTab] = useState(true)

    return (
        <div className=''>
            <PropertyTopSection />
            <div className='container-lg'>
                <div className='d-flex justify-content-between align-items-center mt-5'>
                    <p className={`px-5 py-3 mb-0 rounded-top fs-4 ${shortTermTab? 'bg-dark' : 'bg-secondary'}`} onClick={()=>setShortTermTab(true)}>Short Term Rentals</p>
                    <p className={`px-5 py-3 mb-0 rounded-top fs-4 ${shortTermTab? 'bg-secondary' : 'bg-dark'}`} onClick={()=>setShortTermTab(false)}>Residential Properties</p>
                </div>
                {shortTermTab ? <ShortTermRental /> : <ResidentialProperty />}
            </div>
        </div>
    )
}

export default PropertyManagement
