import React from 'react'
import { useState } from 'react'
import PropertyTopSection from './PropertyTopSection'
import PropManagementTypeCard from './PropManagementTypeCard'
import ResidentialProperty from './ResidentialProperty'
import ShortTermRental from './ShortTermRental'
import { propManagementTypeData } from './utilitiesProp'
import './propertymanagement.css'

function PropertyManagement() {
    const [shortTermTab, setShortTermTab] = useState(true)
    const selectedTab = 'bg-dark text-decoration-underline fw-bold border border-bottom-0'
    const unselectedTab= 'bg-secondary border-bottom'

    const serviceCards = propManagementTypeData.map((data, index) => {
        if (index%2===0) return <PropManagementTypeCard key={data.title} data={data} reverse={false}/>
        else return <PropManagementTypeCard key={data.title} data={data} reverse={true}/>
    })

    return (
        <div className=''>
            <PropertyTopSection />
            <div className=''>
                <div className='container-lg text-dark mt-5'>
                    {serviceCards}
                </div>
            </div>
            {/* <div className='container-lg'>
                <div className='d-flex justify-content-between fs-4 mt-5'>
                    <p className={`flex-fill p-4 mb-0 rounded-top h-100 ${shortTermTab? selectedTab : unselectedTab}`} onClick={()=>setShortTermTab(true)}>Short Term Rentals</p>
                    <p className={`flex-fill p-4 mb-0 rounded-top h-100 ${shortTermTab? unselectedTab : selectedTab}`} onClick={()=>setShortTermTab(false)}>Residential Properties</p>
                </div>
                {shortTermTab ? <ShortTermRental /> : <ResidentialProperty />}
            </div> */}
        </div>
    )
}

export default PropertyManagement
