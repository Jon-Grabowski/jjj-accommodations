import React from 'react'
import PropertyTopSection from './PropertyTopSection'
import PropManagementTypeCard from './PropManagementTypeCard'
import { propManagementTypeData } from './utilitiesProp'
import './propertymanagement.css'

function PropertyManagement() {

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
        </div>
    )
}

export default PropertyManagement
