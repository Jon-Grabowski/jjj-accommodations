import React from 'react'

function RentalCard({rental, style, handleClick, index}) {
    const { name, type, location, images } = rental

    return (
        <div className="card text-bg-dark flex-shrink-0" style={style} onClick={()=>handleClick(index)}>
            <img src={images[0]} className="card-img" alt={name}/>
            <div className="card-img-overlay">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{type}</p>
                <p className="card-text"><small>{location}</small></p>
            </div>
        </div>
    )
}

export default RentalCard
