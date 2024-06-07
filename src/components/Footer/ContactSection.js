import React from 'react'

function ContactSection() {
    return (
        <div id='footer-contact-wrapper' className='text-start mb-3 mx-auto'>
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
    )
}

export default ContactSection
