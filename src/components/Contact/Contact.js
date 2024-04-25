import React from 'react'
import ContactInfo from './ContactInfo';
import ContactTopSection from './ContactTopSection';
import Email from './Email';

function Contact() {
    return (
        <div>
            <ContactTopSection />
            <div className='d-flex flex-wrap justify-content-center align-items-center gap-md-5 gap-1'>
                <ContactInfo />
                {/* <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' style={{maxWidth: '20rem'}} className='rounded'/> */}
                <Email />
            </div>

        </div>
    )
}

export default Contact
