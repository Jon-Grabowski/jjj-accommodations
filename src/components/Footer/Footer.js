import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as FacebookIcon } from './svgs/facebook-svgrepo-com.svg';
import { ReactComponent as InstagramIcon } from './svgs/instagram-svgrepo-com.svg';
import './footer.css'

function Footer() {

    return (
        <div id='footer-wrapper' className='border-top d-flex flex-wrap justify-content-center align-items-center'>
            <div id='footer-img-wrapper' className='mx-5'>
                <Link to='/'><img src='../images/JJJ-LOGO.png' alt='logo' className='w-100'/></Link>
                <div className='d-flex justify-content-evenly mt-3'>
                    <Link to='https://www.facebook.com/profile.php?id=100089946661281&locale=en_GB' target='_blank'><FacebookIcon /></Link>
                    <Link to='https://www.instagram.com/jjjaccommodations/' target='_blank'><InstagramIcon /></Link>
                </div>
            </div>
            <div id='footer-contact-wrapper' className='my-3 mx-5 text-start'>
                <h5 className='fw-bold fst-italic'>Contact</h5>
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
