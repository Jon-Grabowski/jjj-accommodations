import React from 'react'


function ShortTermRentalCard({rental}) {
    const {title, subTitle, details} = rental

    const detailList = details.map((detail, index) => {
        return <span key={detail} className='m-auto d-block py-2 px-4 border-bottom fst-italic'>{detail}</span>
    })

    return (
        <div className='bg-white rounded border' style={{maxWidth: '25rem'}}>
            <div className='p-3 border-bottom rounded' style={{backgroundColor:'rgb(9, 9, 39)'}}>
                <span className='fs-4'>{title}</span>
            </div>
            <div className='d-flex align-items-center text-black pt-2' style={{height: '5rem'}}>
                <span className='fw-bold p-2'>{subTitle}</span>
            </div>
            <div className='d-flex flex-column text-black pb-3'>
                {detailList}
            </div>
        </div>
    )
}

export default ShortTermRentalCard
