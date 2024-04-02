import React from 'react'


function ShortTermRentalCard({rental}) {
    const {title, subTitle, details} = rental

    const detailList = details.map(detail => {
        return <li key={detail}>{detail}</li>
    })

    return (
        <div className='bg-white rounded border' style={{maxWidth: '25rem'}}>
            <div className='bg-dark p-3 border-bottom rounded'>
                <span className='fs-5'>{title}</span>
            </div>
            <div className='d-flex align-items-center text-black pt-2' style={{height: '5rem'}}>
                <span className='fw-bold p-2 text-start'>{subTitle}</span>
            </div>
            <ul className='text-black text-start'>
                {detailList}
            </ul>
        </div>
    )
}

export default ShortTermRentalCard
