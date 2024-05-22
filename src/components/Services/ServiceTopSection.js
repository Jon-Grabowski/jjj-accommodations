import React from 'react'
import { Link } from 'react-router-dom'
import Animation from '../Utilities/Animation'
import { Sparkles } from 'lucide-react'
import './servicestopsection.css'

function ServiceTopSection({cleaningRef, maintenanceRef, seasonalRef}) {
    return (
        <div id='service-top-section-wrapper' className=''>
            {/* <div className='bg-black bg-opacity-50'>
                <div className='m-auto py-2'>
                        <p className='display-3 fw-bold fst-italic pt-3 border-bottom m-sm-auto mb-2 mx-3' style={{maxWidth:'40rem'}}>Residential Services</p>
                        <div className=' m-auto d-flex flex-wrap justify-content-evenly gap-sm-4 fs-3' style={{maxWidth:'40rem'}}>
                            <span className='service-links' onClick={()=>{cleaningRef.current.scrollIntoView()}}>◊ Cleaning</span>
                            <span className='service-links' onClick={()=>{maintenanceRef.current.scrollIntoView()}}>◊ Maintenance</span>
                            <span className='service-links' onClick={()=>{seasonalRef.current.scrollIntoView()}}>◊ Seasonal</span>
                        </div>
                        <p className='fs-6 fst-italic pt-3' >We cater to all of our client's needs. Contact us now to discuss how we can make your life more relaxed and enjoyable!</p>
                </div>
            </div> */}
            <div className='bg-black bg-opacity-50 pt-5 pb-5'>
                    <span id='rental-management-header' className='display-1 fw-bold fst-italic'>Residential Property Services</span>
                <div className='container-lg d-flex flex-wrap align-items-center mt-5'>
                        <div id='res-services-header-body' className='text-start d-flex flex-column ms-xl-5 ps-xl-5' style={{maxWidth:'42rem'}}>
                            <span className='display-5 fw-bold'>Keep your home pristine  <Sparkles size={40}/></span>
                            <span  className='fw-bold fs-2 fst-italic mb-4'>with our full range of residential services.</span>
                            <span  className='fw-bold fs-4 fst-italic'>We offer expert cleaning, maintenance, repairs, and seasonal care to meet all your home needs.</span>
                        </div>
                        <div className='m-auto d-flex flex-wrap flex-column justify-content-evenly align-items-start gap-sm-4 fs-3' style={{maxWidth:'40rem'}}>
                            <span className='service-links' onClick={()=>{cleaningRef.current.scrollIntoView()}}>◊ Cleaning</span>
                            <span className='service-links' onClick={()=>{maintenanceRef.current.scrollIntoView()}}>◊ Maintenance</span>
                            <span className='service-links' onClick={()=>{seasonalRef.current.scrollIntoView()}}>◊ Seasonal</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTopSection
