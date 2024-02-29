import React from 'react'
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './navbar.css'

function NavBar() {
    const [navExpanded, setNavExpanded] = useState(false)
    const location = useLocation()
    console.log(location.pathname)
    const links = ['rentals', 'property management', 'services', 'about', 'contact']
    const listLinks = links.map((link)=>{
        let path = '/' + link.replace(/\s+/g, '')
        console.log(path)
        return(
            <li class="nav-item">
                            <NavLink 
                                to={path}
                                className={`nav-link text-light ${location.pathname === path ? 'text-decoration-underline fw-bolder' : '' }`}
                                onClick={()=>{setNavExpanded(false)}}
                                >{link.toUpperCase()}
                            </NavLink>
            </li>
        )
    })
    function handleNavToggler() {
        setNavExpanded(!navExpanded)
    }
    
    return (
        <nav className='navbar navbar-expand-md sticky-top border-bottom '>
            <div id='nav-wrapper' className='container-fluid'>
                <div id='logo-wrapper' className='text-start'>
                    <Link to='/'>
                        <img src='../images/JJJ-LOGO.png' alt='logo' className='w-100 navbar-brand'/>
                    </Link>
                </div>
                <button class={`navbar-toggler bg-light ${navExpanded ? '': 'collapsed'}`} type="button" onClick={handleNavToggler} data-bs-toggle="collapse" data-bs-target="#nav-links-wrapper" aria-controls="nav-links-wrapper" aria-expanded={navExpanded? 'true': "false"} aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="nav-links-wrapper" className={`navbar-collapse ${navExpanded ? 'show' :'collapse' }`} >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        {listLinks}
                    </ul>
                    <div>
                        <Link 
                            to='https://www.airbnb.com/users/show/192864989'
                            target="_blank"
                            type="button" 
                            onClick={()=>{setNavExpanded(false)}}
                            className='btn btn-sm btn-dark btn-outline-light p-2 reservation-btn'
                            >Reservation
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
