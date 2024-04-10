import React from 'react'
import './contacttopsection.css'

function ContactTopSection() {
    return (
        <div id='contact-top-section-wrapper' className='mb-4'>
            <div className='bg-black bg-opacity-50 rounded py-2'>
                <div className=' m-auto'>
                    <div className='py-4'>
                        <h1 className='d-inline display-3 border-bottom fw-bold px-4'>Contact Us</h1>
                        {/* <p className='text-wrap fs-5 m-auto py-2' style={{maxWidth:'30rem'}}>Whether you're looking for Short Term Rental Management or Residential Property Management, we've got you covered!</p> */}
                        <p className='fs-6 fst-italic pt-3' >We'd love to hear from you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactTopSection
