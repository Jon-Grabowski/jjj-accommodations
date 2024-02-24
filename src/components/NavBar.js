import React from 'react'
import './navbar.css'

function NavBar() {
    return (
        <div className='d-flex justify-content-between'>  
            <div id='logo-wrapper' className='border text-start'>
                <img src='../images/JJJ-LOGO.png' alt='logo' className='w-100 border'/>
            </div>
            <div className='border'>
                <p>LINKS</p>
            </div>
        </div>
    )
}

export default NavBar
