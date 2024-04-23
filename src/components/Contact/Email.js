import React from 'react'
import emailjs from '@emailjs/browser'

function Email() {
    function sendEmail(e){
        e.preventDefault()
        console.log('Hello')
        console.log(e)
    }
    return (
        <div>
            <form onSubmit={sendEmail}>
            <button type='submit'>
                Submit
            </button>
            </form>
        </div>
    )
}

export default Email
