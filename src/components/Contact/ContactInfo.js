import React from 'react'
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'framer-motion';
import Animation from '../Utilities/Animation';
import FacebookLogo from '../Utilities/FacebookLogo';
import InstagramLogo from '../Utilities/InstagramLogo';
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
            <Animation variant='slideRight' duration={.75} delay={.6} parentInView={parentInView}>
                <div className='d-flex justify-content-start gap-5'>
                        <Link to='https://www.facebook.com/profile.php?id=100089946661281&locale=en_GB' target='_blank' className='d-flex flex-column justify-content-center align-items-center text-decoration-none'>
                            <FacebookLogo size={60}/>
                            <h5 className='text-white'>Facebook</h5>
                        </Link>
                        <Link to='https://www.instagram.com/jjjaccommodations/' target='_blank' className='d-flex flex-column justify-content-center align-items-center text-decoration-none'>
                            <InstagramLogo size={60}/>
                            <h5 className='text-white'>Instagram</h5>
                        </Link>
                </div>
            </Animation>
        </div>
    )
}

export default ContactInfo
