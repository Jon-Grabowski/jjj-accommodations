import React from 'react'
import { useState } from 'react'
import PropertyTopSection from './PropertyTopSection'
import ResidentialProperty from './ResidentialProperty'
import ShortTermRental from './ShortTermRental'
import './propertymanagement.css'

function PropertyManagement() {
    const [shortTermTab, setShortTermTab] = useState(true)

    const selectedTab = 'bg-dark text-decoration-underline fw-bold border border-bottom-0'
    const unselectedTab= 'bg-secondary border-bottom'

    return (
        <div className=''>
            <PropertyTopSection />
            <div className='container-lg'>
                <div className='d-flex justify-content-between fs-4 mt-5'>
                    <p className={`flex-fill p-4 mb-0 rounded-top h-100 ${shortTermTab? selectedTab : unselectedTab}`} onClick={()=>setShortTermTab(true)}>Short Term Rentals</p>
                    <p className={`flex-fill p-4 mb-0 rounded-top h-100 ${shortTermTab? unselectedTab : selectedTab}`} onClick={()=>setShortTermTab(false)}>Residential Properties</p>
                </div>
                {shortTermTab ? <ShortTermRental /> : <ResidentialProperty />}
            </div>
        </div>
    )
}

export default PropertyManagement
