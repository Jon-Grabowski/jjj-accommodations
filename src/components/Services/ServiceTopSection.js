import React from 'react'
import Animation from '../Utilities/Animation'
import { Sparkles } from 'lucide-react'
import './servicestopsection.css'

function ServiceTopSection({cleaningRef, maintenanceRef, seasonalRef}) {
    const serviceTypes = ['cleaning', 'maintenance', 'seasonal']

    function handleClick(service){
        if (service === 'cleaning') cleaningRef.current.scrollIntoView()
        else if (service === 'maintenance') maintenanceRef.current.scrollIntoView()
        else if (service === 'seasonal') seasonalRef.current.scrollIntoView()
    }
    const serviceBtns = serviceTypes.map((service, index)=>{
        return(
            <Animation variant="slideLeft" duration={1} delay={.2*index}>
                <button 
                    key={service}
                    style={{width:'18rem'}} 
                    className='px-4 py-2 mb-2 btn-bg-blue border fw-bold text-light rounded-pill fs-4'
                    onClick={()=>{handleClick(service)}}
                >{service.toUpperCase()}</button>
            </Animation>
        )
    })
    return (
        <div id='service-top-section-wrapper' className=''>
            <div className='banner-padding' style={{backgroundColor: 'rgba(0, 0, 0, 0.35)'}}>
                <span id='rental-management-header' className='display-1 fw-bold fst-italic'>Residential Property Services</span>
                <div className='d-flex flex-wrap justify-content-center align-items-center mt-5'>
                        <div id='res-services-header-body' className='text-start d-flex flex-column px-2 px-lg-3 me-4' style={{maxWidth:'44rem'}}>
                            <span className='display-4 fw-bold'>Keep Your Home</span>
                            <span className='display-2 fst-italic fw-bold'>Pristine  <Sparkles size={40}/></span>
                            <span  className='fw-bold fs-2 fst-italic mb-3'>with our full range of residential services.</span>
                        </div>
                        <div className='d-flex flex-wrap flex-column justify-content-center align-items-center fs-3' style={{maxWidth:'40rem'}}>
                            {serviceBtns}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTopSection
