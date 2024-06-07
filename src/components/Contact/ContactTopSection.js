import React from 'react'
import './contacttopsection.css'

function ContactTopSection() {
    return (
        <div id='contact-top-section-wrapper'>
            <div className='bg-black bg-opacity-50 py-2'>
                <div className=' m-auto'>
                    <div id='contact-banner-text' className='py-4'>
                        <h1 className='d-inline display-1 fw-bold fst-italic px-4'>Contact Us</h1>
                        <p className='fs-5 fw-bold fst-italic pt-1' >We'd love to hear from you!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactTopSection
