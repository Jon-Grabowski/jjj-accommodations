import React from 'react'
import ContactInfo from './ContactInfo';
import ContactTopSection from './ContactTopSection';

function Contact() {
    return (
        <div>
            <ContactTopSection />
            <div className='d-flex flex-wrap justify-content-evenly align-items-center gap-md-5 gap-1'>
                <ContactInfo />
                <img src='../images/about/j&j1-crop-sq.jpg' alt='Jen and Jake' style={{maxWidth: '20rem'}} className='rounded'/>
            </div>

        </div>
    )
}

export default Contact
