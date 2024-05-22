import React from 'react'
import { Link } from 'react-router-dom'
import Animation from '../Utilities/Animation'
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
                <Animation variant='slideLeft' duration={1.5}>
                    <span id='rental-management-header' className='display-1 fw-bold fst-italic'>Residential Property Services</span>
                </Animation>
                <div className='container-lg d-flex flex-wrap'>
                        <div className='d-flex flex-column mt-5 ms-xl-5 ps-xl-5' style={{maxWidth:'40rem'}}>
                            <Animation variant='slideRight' duration={1.5}>
                                <span id='res-services-header-body' className='fw-bold fs-4 fst-italic'>We cater to all of our client's needs. Contact us now to discuss how we can make your life more relaxed and enjoyable!</span>
                            </Animation>
                            <Link to='/contact' style={{width:'15rem'}} className='m-auto px-4 py-2 mt-5 btn-bg-blue border fw-bold text-light rounded-pill fs-4 text-decoration-none'>Contact Us</Link>
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
