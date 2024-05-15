import React from 'react'
import MaintenanceCard from './MaintenanceCard'
import Animation from '../Utilities/Animation'
import { maintenanceCardData } from './utilitiesServices'


function MaintenanceSection() {
    const maintenanceCards = maintenanceCardData.map(service => {
        return <MaintenanceCard key={service.title} service={service}/>
    })

    return (
        <div className='overflow-hidden'>
            <Animation variant='fadeIn' duration={1.5}>
                <div id='maintenance-services-banner'>
                    <div className='banner-background-dark'>
                        <span id='maintenance-services-header' className='display-1 fw-bold'>Maintenance Services</span>
                    </div>
                </div>
            </Animation>
            <div className='container-lg my-5 py-5'>
                <Animation variant='slideLeft' duration={1}>
                    <h4 className='display-6 w-75 m-auto fst-italic'>"<span className='fw-bold display-5'>Keeping Your Property in Prime Condition:</span> Let Us Handle Maintenance or Connect You with Trusted Contractors for Hassle-Free Solutions!"</h4>
                </Animation>
                <Animation variant='slideUp' duration={1}>
                    <div className='my-5 py-5 d-flex flex-wrap justify-content-evenly align-items-center'>
                        {maintenanceCards}
                    </div>
                </Animation>
            </div>
        </div>
    )
}

export default MaintenanceSection
