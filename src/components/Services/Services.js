import React from 'react'
import { useRef } from 'react'
import ServiceTopSection from './ServiceTopSection'
import CleaningSection from './CleaningSection'
import MaintenanceSection from './MaintenanceSection'
import SeasonalSection from './SeasonalSection'

function Services() {
    const cleaningRef = useRef()
    const maintenanceRef = useRef()
    const seasonalRef = useRef()
    
    return (
        <div>
            <ServiceTopSection cleaningRef={cleaningRef} maintenanceRef={maintenanceRef} seasonalRef={seasonalRef}/>
            <div className='py-5 my-5 m-auto' style={{maxWidth:'50rem'}}>
                <h1 className='display-6 fw-bold fst-italic'>We cater to all of our client's needs! Contact us now to discuss how we can make your life more relaxed and enjoyable.</h1>
            </div>
            <div ref={cleaningRef}>
                <CleaningSection />
            </div>
            <div ref={maintenanceRef}>
                <MaintenanceSection />
            </div>
            <div ref={seasonalRef}>
                <SeasonalSection />
            </div>
        </div>
    )
}

export default Services
