import React from 'react'
import { Link } from 'react-router-dom'
import SiteMap from './SiteMap'
import AirBnbLogo from '../Utilities/AirBnbLogo'
import FacebookLogo from '../Utilities/FacebookLogo'
import InstagramLogo from '../Utilities/InstagramLogo'
import './footer.css'

function Footer() {

    return (
        <div id='footer-wrapper' className='border-top d-flex flex-wrap justify-content-evenly align-items-start py-2'>
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
            <SiteMap />
            
            <div id='footer-contact-wrapper' className='text-start'>
                <h5 className='fw-bold fst-italic border-bottom pb-1'>Contact</h5>
                <div className='my-3'>
                    <span className='d-block'><strong>Email:</strong> JJJAccommodations@gmail.com</span>
                </div>
                <div>
                    <span><strong>Mailing Address:</strong></span>
                    <span className='d-block'>PO Box 357</span>
                    <span className='d-block'>Mongaup Valley, NY 12762</span>
                </div>
                <div className='mt-3'>
                    <span className='d-block'><strong>Jen Phone:</strong> +1 (845) 807-1601</span>
                    <span className='d-block'><strong>Jacob Phone:</strong> +1 (845) 701-1087</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
