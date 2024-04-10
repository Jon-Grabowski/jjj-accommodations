import React from 'react'
import { Mail, Mailbox, PhoneCall } from 'lucide-react';
import './contactinfo.css' 

function ContactInfo() {
    return (
        <div className='d-flex flex-column gap-5 fs-5 text-start mb-4'>
            <div className='d-flex flex-wrap justify-content-start align-items-center' id='email-contact' onClick={() => window.location = 'mailto:jjjaccommodations@gmail.com'}>
                <Mail className='me-3' size={48}/><span className='m-auto'>JJJAccommodations@gmail.com</span>
            </div>
            <div className='d-flex flex-wrap justify-content-start align-items-center'>
                <PhoneCall className='me-3' size={48}/><div className='d-flex flex-column'><span>+1 (845) 807-1601</span><span>+1 (845) 701-1087</span></div>
            </div>
            <div className='d-flex flex-wrap justify-content-start align-items-center'>
                <Mailbox className='me-3' size={48}/><div className='d-flex flex-column'><span>PO Box 357</span><span>Mongaup Valley, NY 12762</span></div>
            </div>
        </div>
    )
}

export default ContactInfo
