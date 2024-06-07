import React from 'react'
import { Link } from 'react-router-dom'
import SiteMap from './SiteMap'
import ContactSection from './ContactSection'
import AirBnbLogo from '../Utilities/AirBnbLogo'
import FacebookLogo from '../Utilities/FacebookLogo'
import InstagramLogo from '../Utilities/InstagramLogo'
import './footer.css'

function Footer() {

    return (
        <div id='footer-wrapper' className='border-top d-flex flex-wrap justify-content-center align-items-start py-2'>
            <div id='footer-img-wrapper' className='mx-5 mb-4 mb-lg-0'>
                <Link to='/'><img src='../images/JJJ-LOGO.png' alt='logo' className='w-100'/></Link>
                <div className='d-flex justify-content-evenly align-items-center my-3'>
                    <Link to='https://www.airbnb.com/users/show/192864989' target='_blank'>
                        <AirBnbLogo size={30}/>
                    </Link>
                    <Link to='https://www.facebook.com/profile.php?id=100089946661281&locale=en_GB' target='_blank'><FacebookLogo size={35}/></Link>
                    <Link to='https://www.instagram.com/jjjaccommodations/' target='_blank'><InstagramLogo size={35}/></Link>
                </div>
                <p className='mb-0'>Copyright © 2024 JJJ Accommodations, LLC</p>
                <span className=''>Website built and maintained by <Link to='https://www.linkedin.com/in/jon-grabowski/' target='_blank' className='text-reset'>Jon Grabowski</Link></span>
            </div>
            <div className='d-flex flex-wrap gap-4'>
                <SiteMap />
                <ContactSection />
            </div>
            
        </div>
    )
}

export default Footer
