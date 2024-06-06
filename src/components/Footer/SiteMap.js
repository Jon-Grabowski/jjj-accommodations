import React from 'react'
import { Link } from 'react-router-dom'

function SiteMap() {
    const pages = ['rentals', 'residential', 'about', 'contact']

    const links = pages.map(link => {
        const capitalized = link.charAt(0).toUpperCase() + link.slice(1)
        return <Link to={`/${link}`} className='text-reset'>{capitalized}</Link>
    })
    return (
        <div id='footer-site-map-wrapper' className='mb-4 mb-sm-0'>
            <h5 className='fw-bold fst-italic text-start border-bottom pb-1'>Site Map</h5>
            <div className='d-flex flex-column text-start'>
                {links}
            </div>
        </div>
    )
}

export default SiteMap
