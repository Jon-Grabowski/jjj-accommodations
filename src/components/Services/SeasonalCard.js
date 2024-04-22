import React from 'react'
import { Snowflake, Flower2, Sun, Leaf } from 'lucide-react'

function SeasonalCard({season}) {
    const {title, body, services, img} = season

    const iconMap = {
        'Winter': <Snowflake />,
        'Spring': <Flower2 />,
        'Summer': <Sun />,
        'Fall': <Leaf />
    }

    const serviceList = services.map(service => {
        return <li className='list-group-item fw-bold'>{service}</li>
    })
    return (
        <div className="card border-0 mb-4" style={{maxWidth: "20rem"}}>
            <img src={img} className="card-img-top border-bottom" alt={title}/>
            <div className="card-body bg-dark text-light">
                <h3 className="card-title mb-4"><span className='me-3'>{iconMap[title]}</span>{title}<span className='ms-3'>{iconMap[title]}</span></h3>

                {/* <p className="card-text">{body}</p> */}
            <ul className='text-start m-auto border list-group list-group-flush rounded'>
                {serviceList}
            </ul>
            </div>
        </div>
    )
}

export default SeasonalCard
