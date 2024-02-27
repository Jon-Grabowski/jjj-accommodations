import React from 'react'
import { Link } from 'react-router-dom'


function ServiceCard({service}) {
    const {name, headline, body, image, link} = service

    return (
        <div className="card m-3" style={{'maxWidth' : '21rem'}}>
            <img src={image} className="card-img-top" alt={name} style={{'maxHeight':'15rem'}}/>
            <div className="card-body">
                <h5 className="card-title">{headline}</h5>
                <p className="card-text">{body}</p>
                <Link to={link} className="btn btn-primary">{name}</Link>
            </div>
        </div>
    )
}

export default ServiceCard
