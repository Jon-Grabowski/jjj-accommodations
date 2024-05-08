import React from 'react'
import './servicecard.css'
import { Link } from 'react-router-dom'


function ServiceCard({service}) {
    const {btnText, headline, body, image, link} = service

    return (
        <div className='d-flex flex-column m-2 text-white service-card bg-white bg-opacity-25 rounded' style={{maxWidth : '28rem'}}>
            <div className='d-flex justify-content-center rounded'>
                <img src={image} className="card-img-side rounded-top img-fluid w-100" alt={headline} />
            </div>
            <div className="d-flex flex-column justify-content-between h-100">
                <span className="display-5 p-4 fw-bold">{headline}</span>
                <p className="px-3 my-auto fs-4">{body}</p>
                <Link to={link} className="m-auto btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-5 my-4 text-decoration-none" style={{width:'12rem'}}>{btnText}</Link>
            </div>
        </div>
    )
}

export default ServiceCard
