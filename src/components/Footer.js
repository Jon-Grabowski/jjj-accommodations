import React from 'react'
import './footer.css'

function Footer() {

    return (
        <div id='footer-wrapper' className='border-top d-flex flex-wrap justify-content-center align-items-center'>
            <div id='footer-img-wrapper' className=''>
                <img src='../images/JJJ-LOGO.png' alt='logo' className='w-100'/>
                <div>

                </div>
            </div>
            <div id='footer-contact-wrapper' className='my-3 text-start'>
                <h5 className='text-decoration-underline'>Contact</h5>
                <div>
                    <span className='d-block'>PO Box 357</span>
                    <span className='d-block'>Mongaup Valley, NY 12762</span>
                </div>
                <div className='mt-3'>
                    <span className='d-block'><strong>Jen Phone:</strong>+1 (845) 807-1601</span>
                    <span className='d-block'><strong>Jacob Phone:</strong>+1 (845) 701-1087</span>
                </div>
            </div>
        </div>
    )
}

export default Footer
