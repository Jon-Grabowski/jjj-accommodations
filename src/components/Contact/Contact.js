import React from 'react'
import ContactInfo from './ContactInfo';
import ContactTopSection from './ContactTopSection';
import Email from './Email';
import FacebookLogo from '../Utilities/FacebookLogo';
import './contact.css'

function Contact() {
    return (
        <div >
            <ContactTopSection />
            <div id='contact-content-wrapper' className='row'>
                <div className='d-flex flex-column align-items-center justify-content-center col-md-5 py-5 overflow-hidden'>               
                    <ContactInfo />
                </div>
                <div className='col-md-7 bg-white bg-opacity-25 py-5'>
                    <Email />
                </div>
            </div>

        </div>
    )
}

export default Contact
