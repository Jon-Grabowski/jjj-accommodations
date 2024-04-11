import React from 'react'
import { useState } from 'react';
import MoreDetails from './MoreDetails';

function RentalManagement({data}) {
    const [moreDetails, setMoreDetails] = useState(false)
    const { title, body, imageURL, serviceObj} = data

    function handleClick(){
        setMoreDetails(!moreDetails)
    };

    const services = [];
    const servicesDescriptions = [];
    for (const key in serviceObj){
        services.push(
            <span key={key} className='mx-3 mb-1 fw-bold'>{`◊ ${key}`}</span>
        );
        servicesDescriptions.push(
            <div key={key}>
                <h5 className='text-decoration-underline'>{key}</h5>
                <p>{serviceObj[key]}</p>
            </div>
        )
    };

    return (
        <div className='pt-4 mt-5 d-flex gap-5 flex-wrap justify-content-evenly align-items-center text-black' style={{marginBottom: '11rem'}}>
            <div className='border bg-white bg-opacity-75 p-3 rounded'>
                <div className='d-flex align-items-center gap-3'>
                    <div className='rounded-circle border border-black border-3 overflow-hidden' style={{maxWidth: '150px', maxHeight:'150px'}}>
                        <img src={imageURL} alt={title} className='h-100 w-100'/>
                    </div>
                    <h1 className='display-4 fw-bold border-bottom pb-2 border-black'>Rental Property Management</h1>
                </div>
                <div className='text-start m-auto' style={{maxWidth:'50rem'}}>
                        <p className='p-3 fs-5'>{body}</p>
                </div>
                
                {moreDetails?
                    <MoreDetails servicesDescriptions={servicesDescriptions}/>
                    : 
                    <div className='d-flex m-auto justify-content-center flex-wrap mb-3 border-top border-bottom border-black py-2' style={{maxWidth:'50rem'}}>
                            {services}
                    </div>}
                
                <button 
                        className='text-light rounded border-secondary py-2 px-4' 
                        style={{backgroundColor: 'rgb(9, 9, 39)'}}
                        onClick={handleClick}
                    >{moreDetails ? 'Less Details ▴' :'More Details ▾'}</button>
            </div>
        </div>
    )
}

export default RentalManagement
