import React from 'react'
import './servicestopsection.css'

function ServiceTopSection({cleaningRef, maintenanceRef, seasonalRef}) {
    return (
        <div id='service-top-section-wrapper' className=''>
            <div className='bg-black bg-opacity-50'>
                <div className='m-auto py-2'>
                        <p className='display-3 fw-bold fst-italic pt-3 border-bottom m-sm-auto mb-2 mx-3' style={{maxWidth:'40rem'}}>Residential Services</p>
                        <div className=' m-auto d-flex flex-wrap justify-content-evenly gap-sm-4 fs-3' style={{maxWidth:'40rem'}}>
                            <span className='service-links' onClick={()=>{cleaningRef.current.scrollIntoView()}}>◊ Cleaning</span>
                            <span className='service-links' onClick={()=>{maintenanceRef.current.scrollIntoView()}}>◊ Maintenance</span>
                            <span className='service-links' onClick={()=>{seasonalRef.current.scrollIntoView()}}>◊ Seasonal</span>
                        </div>
                        {/* <p className='text-wrap fs-5 m-auto py-2' style={{maxWidth:'30rem'}}>We cater to all of our client's needs. Contact us now to discuss how we can make your life more relaxed and enjoyable!</p> */}
                        <p className='fs-6 fst-italic pt-3' >We cater to all of our client's needs. Contact us now to discuss how we can make your life more relaxed and enjoyable!</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceTopSection
