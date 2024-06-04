import React from 'react'
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Animation from '../Utilities/Animation';
import { Mail, Mailbox, PhoneCall } from 'lucide-react';
import './contactinfo.css' 

function ContactInfo() {
    const contactInfoRef = useRef(null)
    const parentInView = useInView(contactInfoRef, {once:true})

    return (
        <div ref={contactInfoRef} className='d-flex flex-column gap-5 fs-5 text-start mb-5'>
            <Animation variant='slideRight' duration={.75} parentInView={parentInView}>
                <div className='d-flex flex-column flex-wrap justify-content-start align-items-start' id='email-contact' onClick={() => window.location = 'mailto:jjjaccommodations@gmail.com'}>
                    <div className='d-flex align-items-end fst-italic mb-2'><Mail className='me-3' size={48}/><span className='fs-3'>E-mail:</span></div>
                    <span className='m-auto fs-5'>JJJAccommodations@gmail.com</span>
                </div>
            </Animation>
            <Animation variant='slideRight' duration={.75} delay={.2} parentInView={parentInView}>
                <div className='d-flex flex-wrap flex-column justify-content-start align-items-start'>
                    <div className='d-flex align-items-end fst-italic mb-2'><PhoneCall className='me-3' size={48}/><span className='fs-3'>Phone:</span></div>
                    <div className='d-flex flex-column'>
                        <span className='fs-5'>Main: +1 (845) 807-1601</span>
                        <span className='fs-5'>Alt: +1 (845) 701-1087</span>
                    </div>
                </div>
            </Animation>
            <Animation variant='slideRight' duration={.75} delay={.4} parentInView={parentInView}>
                <div className='d-flex flex-wrap flex-column justify-content-start align-items-start'>
                    <div className='d-flex align-items-end fst-italic mb-2'><Mailbox className='me-3' size={48}/><span className='fs-3'>Address:</span></div>
                    <div className='d-flex flex-column'>
                        <span className='fs-5'>PO Box 357</span>
                        <span className='fs-5'>Mongaup Valley, NY 12762</span>
                    </div>
                </div>
            </Animation>
        </div>
    )
}

export default ContactInfo
