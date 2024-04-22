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
            {/* <div className='bg-light bg-opacity-25'>
                <div className='container-lg py-5 w-75'>
                    <span className='display-6 py-5 my-5'>We turn property care into a breeze!</span>
                    <p className='mt-2'>From sparkling cleanings to proactive maintenance and seasonal spruce-ups, we've got all your needs covered.</p>
                </div>
            </div> */}
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
