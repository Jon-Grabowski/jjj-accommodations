import React from 'react'
import MaintenanceCard from './MaintenanceCard'
import { maintenanceCardData } from './utilitiesServices'


function MaintenanceSection() {
    const maintenanceCards = maintenanceCardData.map(service => {
        return <MaintenanceCard key={service.title} service={service}/>
    })

    return (
        <div>
            <div id='maintenance-services-banner'>
                <div className='banner-background-dark'>
                    <span id='maintenance-services-header' className='display-1 fw-bold'>Maintenance Services</span>
                </div>
            </div>
            <div className='container-lg my-5 py-5'>
                <h4 className='display-6 w-75 m-auto fst-italic'>"<span className='fw-bold display-5'>Keeping Your Property in Prime Condition:</span> Let Us Handle Maintenance or Connect You with Trusted Contractors for Hassle-Free Solutions!"</h4>
                <div className='my-5 py-5 d-flex flex-wrap justify-content-evenly align-items-center'>
                    {maintenanceCards}
                </div>
            </div>
        </div>
    )
}

export default MaintenanceSection
