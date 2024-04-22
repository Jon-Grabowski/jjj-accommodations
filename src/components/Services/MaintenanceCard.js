import React from 'react'

function MaintenanceCard({service}) {
    const {title, body, details, img} = service

    const detailsList = [];
    for (const key in details) {
        detailsList.push(<li key={key} className="list-group-item bg-dark text-light"><span className='fw-bold'>{key}</span> - <span className=''>{details[key]}</span></li>) 
    }

    return (
        <div className="card bg-dark text-light mb-3" style={{maxWidth: '38rem'}}>
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{body}</p>
                <div className='' style={{minHeight:'10rem'}}>
                    <ul className="list-group list-group-flush text-start rounded">
                        {detailsList}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MaintenanceCard
