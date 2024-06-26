import React from 'react'
import { useState } from 'react'
import EmailSuccess from './EmailSuccess'
import EmailFailure from './EmailFailure'
import Animation from '../Utilities/Animation'
import emailjs from '@emailjs/browser'
import { Mails, Send, Ellipsis } from 'lucide-react'

function Email() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [messageSent, setMessageSent] = useState(false)
    const [sentError, setSentError] = useState(false)
    const [loading, setLoading] = useState(false)

    const templateParams = {name, email, message}
    async function sendEmail(e){
        e.preventDefault()
        setLoading(true)
        //  MESSAGE SENDING DISABLED DURING DEVELOPMENT
        // const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID
        // const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        // const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        // await emailjs.send(service_id, template_id , templateParams, public_key).then(
        //     (response) => {
        //         setMessageSent(true)
        //         setName('');
        //         setEmail('');
        //         setMessage('');
        //     },
        //     (error) => {
        //         setMessageSent(true)
        //         setSentError(true)
        //         setName('');
        //         setEmail('');
        //         setMessage('');
        //     }   
        // );
        setLoading(false)
        alert('MESSAGE SENDING DISABLED DURING DEVELOPMENT')
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <div className='m-auto'>
            <Animation variant='fadeIn' duration={2}>
                <h1 className='display-5 fw-bold fst-italic mb-5'><Mails size={40} className=''/> Send Us a Message</h1>
                <form onSubmit={sendEmail} className='d-flex flex-column text-start m-auto px-3 px-lg-0' style={{maxWidth:'27rem'}}>
                    
                    <label htmlFor='name' className='fs-5 mb-1'>Full Name: </label>
                    <input type='text' name='name' className='mb-2 form-control shadow' value={name} onChange={(e)=>setName(e.target.value)} required></input>

                    <label htmlFor='email' className='fs-5 mb-1'>E-mail:</label>
                    <input type='email' name='email' className='mb-2 form-control shadow' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                
                    <label htmlFor='message' className='fs-5 mb-1'>Message:</label>
                    <textarea type='text' rows='7' name='message' className='mb-2 form-control shadow' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
                    {messageSent ? 
                        sentError ? <EmailFailure/> : <EmailSuccess/>
                    :
                        <button className={`btn btn-dark w-50 m-auto fs-5 mt-3 ${loading ? 'disabled' : ''}`} type='submit'>
                            {loading ? <Ellipsis /> : <Send size={20}/>}
                            {loading ? ' Sending' : ' Send'}
                        </button>
                    }
                </form>
            </Animation>
        </div>
    )
}

export default Email
