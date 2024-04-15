import React from 'react'
import './servicestopsection.css'

function ServiceTopSection({cleaningRef, maintenanceRef, seasonalRef}) {
    return (
        <div id='service-top-section-wrapper' className='py-5'>
            <div className='container-lg bg-black bg-opacity-75  rounded' style={{maxWidth:'60rem'}}>
                <div className='d-flex flex-wrap justify-content-center align-items-center gap-lg-5 gap-md-2 m-auto my-5 pb-2 rounded'>
                    <div>
                        <h1 className='pb-2 display-3 border-bottom fw-bold'>Services</h1>
                        <div className='d-flex justify-content-center gap-4'>
                            <p onClick={()=>{cleaningRef.current.scrollIntoView()}}>Cleaning</p>
                            <p onClick={()=>{maintenanceRef.current.scrollIntoView()}}>Maintenance</p>
                            <p onClick={()=>{seasonalRef.current.scrollIntoView()}}>Seasonal</p>
                        </div>
                        {/* <p className='text-wrap fs-5 m-auto py-2' style={{maxWidth:'30rem'}}>We cater to all of our client's needs. Contact us now to discuss how we can make your life more relaxed and enjoyable!</p> */}
                        <p className='fs-6 fst-italic pt-3' >We cater to all of our client's needs. Contact us now to discuss how we can make your life more relaxed and enjoyable!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceTopSection
