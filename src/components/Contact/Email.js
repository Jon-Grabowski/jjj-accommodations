import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { Mails, Send } from 'lucide-react'

function Email() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault()
        console.log(name, email, message)
        setName('')
        setEmail('')
        setMessage('')
    }
    return (
        <div className='mt-5'>
            <Mails size={48}/>
            <h1 className='display-6'> Send Us a Message</h1>
            <form onSubmit={sendEmail} className='d-flex flex-column text-start m-auto' style={{maxWidth:'18rem'}}>
                    
                    <label htmlFor='name' className='fs-5 mb-1'>Full Name: </label>
                    <input type='text' name='name' className='mb-2' value={name} onChange={(e)=>setName(e.target.value)} required></input>


                    <label htmlFor='email' className='fs-5 mb-1'>E-mail:</label>
                    <input type='email' name='email' className='mb-2' value={email} onChange={(e)=>setEmail(e.target.value)} required></input>

                
                <label htmlFor='message' className='fs-5 mb-1'>Message:</label>
                <textarea type='text' rows='7' name='message' className='mb-2' value={message} onChange={(e)=>setMessage(e.target.value)} required/>
                
            <button className='btn btn-dark w-50 m-auto fs-5' type='submit'>
            <Send size={20}/>  Send
            </button>
            </form>
        </div>
    )
}

export default Email
