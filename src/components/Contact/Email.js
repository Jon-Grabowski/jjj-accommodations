import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mails, Send } from 'lucide-react'

function Email() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const templateParams = {name, email, message}
    // TODO: Display success or error message near form, not in alert
    async function sendEmail(e){
        e.preventDefault()
        //  MESSAGE SENDING DISABLED DURING DEVELOPMENT
        // const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID
        // const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        // const public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        // await emailjs.send(service_id, template_id , templateParams, public_key).then(
        //     (response) => {
        //         console.log(response)
        //         alert('MESSAGE SENT! We recieved your message and will get back to you soon!');
        //         setName('')
        //         setEmail('')
        //         setMessage('')
        //     },
        //     (error) => {
        //         console.log(error)
        //         alert('MESSAGE FAILED TO SEND! Please email us using the address listed.');
        //     }
        // );
        alert('MESSAGE SENDING DISABLED DURING DEVELOPMENT')
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <div className=''>
            
            <h1 className='display-5'><Mails size={40} className='my-5'/> Send Us a Message</h1>
            <form onSubmit={sendEmail} className='d-flex flex-column text-start m-auto' style={{maxWidth:'25rem'}}>
                
                    <label htmlFor='name' className='fs-5 mb-1'>Full Name: </label>
                    <input type='text' name='name' className='mb-2 form-control' value={name} onChange={(e)=>setName(e.target.value)} required></input>

                    <label htmlFor='email' className='fs-5 mb-1'>E-mail:</label>
                    <input type='email' name='email' className='mb-2 form-control' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>
                
                    <label htmlFor='message' className='fs-5 mb-1'>Message:</label>
                    <textarea type='text' rows='7' name='message' className='mb-2 form-control' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
                
            <button className='btn btn-dark w-50 m-auto fs-5 mt-3' type='submit'>
            <Send size={20}/>  Send
            </button>
            </form>
        </div>
    )
}

export default Email
