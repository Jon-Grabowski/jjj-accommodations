import React from 'react'
import './rentaltopsection.css'

function RentalTopSection() {
    return (
        <div id='rental-top-section-wrapper' className='py-5'>
            <div className='container-lg bg-black bg-opacity-75  rounded' style={{maxWidth:'60rem'}}>
                <div className='d-flex flex-wrap justify-content-evenly align-items-center gap-lg-5 gap-md-2 m-auto my-3 rounded'>
                    <div>
                        <h1 className='pb-2 display-4 border-bottom fw-bold'>Rental Management</h1>
                        {/* <p className='text-wrap fs-5 m-auto py-2' style={{maxWidth:'30rem'}}>Whether you're looking for Short Term Rental Management or Residential Property Management, we've got you covered!</p> */}
                        <p className='fs-6 fst-italic pt-3' >"Trust us to care for your property with professionalism and a friendly touch!"</p>
                    </div>
                    <div className='py-4'>
                        <img src='../images/services/namaste-sign.jpeg' alt='namaste' className='rounded'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentalTopSection
