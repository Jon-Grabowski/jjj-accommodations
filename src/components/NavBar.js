import React from 'react'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'

function NavBar() {
    const [navExpanded, setNavExpanded] = useState(false)
    function handleNavToggler() {
        setNavExpanded(!navExpanded)
    }

    function handleResClick(){
        window.location.href = 'https://www.airbnb.com/users/show/192864989';
    }
    return (
        <nav className='navbar navbar-expand-md d-flex justify-content-between align-items-center border-bottom'>
            <div className='container-fluid'>
                <div id='logo-wrapper' className='text-start'>
                    <Link to='/'>
                        <img src='../images/JJJ-LOGO.png' alt='logo' className='w-100 navbar-brand'/>
                    </Link>
                </div>
                <button class={`navbar-toggler bg-light ${navExpanded ? '': 'collapsed'}`} type="button" onClick={handleNavToggler} data-bs-toggle="collapse" data-bs-target="#nav-links-wrapper" aria-controls="nav-links-wrapper" aria-expanded={navExpanded? 'true': "false"} aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="nav-links-wrapper" className={`navbar-collapse ${navExpanded ? 'collapse': 'show'}`}>
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink to='/rentals' className='nav-link text-light'>Rentals</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='/services' className='nav-link text-light'>Services</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink to='/about' className='nav-link text-light'>About</NavLink>
                        </li>
                        
                        <li class="nav-item"></li>
                        <NavLink to='/contact' className='nav-link text-light'>Contact</NavLink>
                        <li class="nav-item text-light"></li>
                        <Link 
                            to='https://www.airbnb.com/users/show/192864989'
                            target="_blank"
                            type="button" 
                            className='btn btn-sm btn-dark btn-outline-light p-2'
                            >Reservation
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
