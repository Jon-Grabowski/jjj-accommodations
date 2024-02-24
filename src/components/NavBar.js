import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

function NavBar() {
    function handleResClick(){
        window.location.href = 'https://www.airbnb.com/users/show/192864989';
    }
    return (
        <div className='d-flex justify-content-between align-items-center border-bottom'>  
            <div id='logo-wrapper' className='text-start'>
                <Link to='/'>
                    <img src='../images/JJJ-LOGO.png' alt='logo' className='w-100'/>
                </Link>
            </div>
            <div id='nav-links-wrapper' className='d-flex justify-content-end align-items-center'>
                <div className=''>
                    <NavLink to='/rentals'>Rentals</NavLink>
                    <NavLink to='/services'>Services</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                    <Link 
                        to='https://www.airbnb.com/users/show/192864989'
                        target="_blank"
                        type="button" 
                        className='btn btn-sm btn-dark btn-outline-light p-2'
                        >Reservation
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default NavBar
