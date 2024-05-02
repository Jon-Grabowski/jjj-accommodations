import React from 'react'

function ManagementServiceCard({service}) {
    const {title, body, link} = service
    return (
        <div className="card text-center" style={{maxWidth: '20rem'}}>
            <div className="card-header text-light d-flex justify-content-center align-items-center" style={{height:'6rem'}}>
                <h3>{title}</h3>
            </div>
            <div className="card-body">
                <p className="card-text">{body}</p>
            </div>
            <div className="card-footer text-body-secondary">
                2 days ago
            </div>
        </div>
    )
}

export default ManagementServiceCard
