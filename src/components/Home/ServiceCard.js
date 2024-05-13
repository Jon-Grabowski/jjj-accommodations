import React from 'react'
import './servicecard.css'
import { Link } from 'react-router-dom'
import Animation from '../Utilities/Animation'


function ServiceCard({service}) {
    const {btnText, headline, body, image, link} = service

    return (
        <Animation variant='slideUp' duration={1.5}>
        <div className='d-flex flex-column m-2 text-white service-card bg-white bg-opacity-25 rounded' style={{maxWidth : '28rem', height:'48rem'}}>
                    <span className="display-5 p-4 fw-bold">{headline}</span>
                <div className='d-flex justify-content-center rounded mb-3'>
                    <img src={image} className="card-img-side img-fluid w-100" alt={headline} />
                </div>
                <div className="d-flex flex-column justify-content-between h-100">
                    <p className="px-3 my-auto fs-4">{body}</p>
                    <Link to={link} className="m-auto btn-bg-blue px-4 py-2 border fw-bold text-light rounded-pill fs-5 my-4 text-decoration-none" style={{width:'12rem'}}>{btnText}</Link>
                </div>
            </div>
        </Animation>
    )
}

export default ServiceCard
