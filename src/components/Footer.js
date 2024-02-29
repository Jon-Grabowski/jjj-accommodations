import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {

    return (
        <div id='footer-wrapper' className='border-top d-flex flex-wrap justify-content-center align-items-center'>
            <div id='footer-img-wrapper' className='mx-5'>
                <img src='../images/JJJ-LOGO.png' alt='logo' className='w-100'/>
                <div className='d-flex justify-content-center'>
                    <Link to='https://www.facebook.com/profile.php?id=100089946661281&locale=en_GB' target='_blank'><img src='../images/social icons/icons8-facebook-48.png' alt='facebook' style={{width: '45px'}} className='mx-3'/></Link>
                    <Link to='https://www.instagram.com/jjjaccommodations/' target='_blank'><img src='../images/social icons/icons8-instagram-48.png' alt='instagram' style={{width: '45px'}} className='mx-3'/></Link>
                </div>
            </div>
            <div id='footer-contact-wrapper' className='my-3 mx-5 text-start'>
                <h5 className='text-decoration-underline'>Contact</h5>
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
