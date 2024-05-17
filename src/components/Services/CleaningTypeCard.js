import React from 'react'

function CleaningTypeCard({cleaning}) {
const {heading, body, svgPath} = cleaning

    return (
        <div className='text-start'>
            <div className='d-flex align-items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' height="40" viewBox="0 -960 960 960" width='40' className='ms-2'>
                    <path d={svgPath}/>
                </svg>
                <h4 className='d-inline pb-1 pe-2 ms-3 mt-1'>{heading}</h4>
            </div>
            <p className='mt-2'>
                {body}
            </p>
        </div>
    )
}

export default CleaningTypeCard
