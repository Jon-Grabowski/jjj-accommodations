import React from 'react'
import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import FacebookLogo from './Utilities/FacebookLogo';
import InstagramLogo from './Utilities/InstagramLogo';
import AirBnbLogo from './Utilities/AirBnbLogo';
import './navbar.css'

function NavBar() {
    const [navExpanded, setNavExpanded] = useState(false)
    const location = useLocation()

    const links = ['rentals', 'residential', 'about', 'contact']

    const listLinks = links.map((link)=>{
        let path = '/' + link.replace(/\s+/g, '')
        return(
            <li key={link} className="nav-item">
                            <NavLink 
                                to={path}
                                className={`nav-link text-light ${location.pathname === path ? 'text-decoration-underline fw-bolder' : '' }`}
                                onClick={()=>{setNavExpanded(false)}}
                                >{link.toUpperCase()}
                            </NavLink>
            </li>
        )
    });

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
                <button className={`navbar-toggler bg-light ${navExpanded ? '': 'collapsed'}`} type="button" onClick={handleNavToggler} data-bs-toggle="collapse" data-bs-target="#nav-links-wrapper" aria-controls="nav-links-wrapper" aria-expanded={navExpanded? 'true': "false"} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div id="nav-links-wrapper" className={`navbar-collapse ${navExpanded ? 'show' :'collapse' }`} >
                    <ul className="navbar-nav d-flex align-items-center me-auto">
                        {listLinks}
                    </ul>
                    <div id='nav-social-links' className='d-flex gap-2 justify-content-center'>
                        <Link to='https://www.airbnb.com/users/show/192864989' target='_blank' className='d-flex flex-column justify-content-center align-items-center text-decoration-none'>
                            <AirBnbLogo size={26}/>
                        </Link>
                        <Link to='https://www.facebook.com/profile.php?id=100089946661281&locale=en_GB' target='_blank' className='d-flex flex-column justify-content-center align-items-center text-decoration-none'>
                            <FacebookLogo size={30}/>
                        </Link>
                        <Link to='https://www.instagram.com/jjjaccommodations/' target='_blank' className='d-flex flex-column justify-content-center align-items-center text-decoration-none'>
                            <InstagramLogo size={30}/>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
