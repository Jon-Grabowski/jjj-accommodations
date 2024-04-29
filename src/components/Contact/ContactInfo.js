import React from 'react'
import { Mail, Mailbox, PhoneCall } from 'lucide-react';
import './contactinfo.css' 

function ContactInfo() {
    return (
        <div className='d-flex flex-column gap-5 fs-5 text-start mb-5'>
            <div className='d-flex flex-column flex-wrap justify-content-start align-items-start' id='email-contact' onClick={() => window.location = 'mailto:jjjaccommodations@gmail.com'}>
                <div className='d-flex align-items-end fst-italic mb-2'><Mail className='me-3' size={48}/><span className='fs-3'>E-mail:</span></div>
                <span className='m-auto fs-4'>JJJAccommodations@gmail.com</span>
            </div>
            <div className='d-flex flex-wrap flex-column justify-content-start align-items-start'>
                <div className='d-flex align-items-end fst-italic mb-2'><PhoneCall className='me-3' size={48}/><span className='fs-3'>Phone:</span></div>
                <div className='d-flex flex-column'><span>Main: +1 (845) 807-1601</span><span>Alt: +1 (845) 701-1087</span></div>
            </div>
            <div className='d-flex flex-wrap flex-column justify-content-start align-items-start'>
                <div className='d-flex align-items-end fst-italic mb-2'><Mailbox className='me-3' size={48}/><span className='fs-3'>Address:</span></div>
                <div className='d-flex flex-column'><span>PO Box 357</span><span>Mongaup Valley, NY 12762</span></div>
            </div>
        </div>
    )
}

export default ContactInfo
