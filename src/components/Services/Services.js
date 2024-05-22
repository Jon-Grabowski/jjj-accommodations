import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import ServiceTopSection from './ServiceTopSection'
import CleaningSection from './CleaningSection'
import MaintenanceSection from './MaintenanceSection'
import SeasonalSection from './SeasonalSection'
import Animation from '../Utilities/Animation'

function Services() {
    const cleaningRef = useRef()
    const maintenanceRef = useRef()
    const seasonalRef = useRef()
    
    return (
        <div className='overflow-hidden'>
            <Animation variant='fadeIn' duration={1.5}>
                <ServiceTopSection cleaningRef={cleaningRef} maintenanceRef={maintenanceRef} seasonalRef={seasonalRef}/>
            </Animation>
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-2 py-5 my-5 m-auto overflow-hidden' >
                <Animation variant='fadeIn' duration={2} delay={.5}>
                    <img src='../images/stock-images/hands-holding-house.jpg' alt='nameste' className='my-2 rounded-circle' style={{width:'22rem'}}/>
                </Animation>
                <Animation variant='slideUp' duration={1.5}>
                    <h1 className='display-6 fw-bold fst-italic mb-5' style={{maxWidth:'50rem'}}>"We cater to all of our client's needs! Contact us now to discuss how we can make your life more relaxed and enjoyable."</h1>
                    <Link to='/contact' style={{width:'15rem'}} className='m-auto px-4 py-2 mt-5 btn-bg-blue border fw-bold text-light rounded-pill fs-4 text-decoration-none'>Contact Us</Link>
                </Animation>
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
