import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function SiteMap() {
    const pages = ['home', 'rentals', 'residential', 'about', 'contact']
    const location = useLocation();

    const links = pages.map(link => {
        const pathName = link === 'home'? '/' : `/${link}`
        const capitalized = link.charAt(0).toUpperCase() + link.slice(1)
        if (pathName === location.pathname) return <span className='fw-bold'>{capitalized}</span>
        else return <Link key={link} to={pathName} className='text-reset'>{capitalized}</Link>
    });
    console.log()
    return (
        <div id='footer-site-map-wrapper' className='mb-3 mx-auto'>
            <h5 className='fw-bold fst-italic text-start border-bottom pb-1'>Site Map</h5>
            <div className='d-flex flex-column text-start'>
                {links}
            </div>
        </div>
    )
}

export default SiteMap
