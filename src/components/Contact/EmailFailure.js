import React from 'react'

function EmailFailure() {
    return (
        <div className='bg-danger rounded p-3 m-auto bg-opacity-50 mt-3 text-center' style={{maxWidth:'26rem'}}>
            <h5 className=''>An Error Has Occured.</h5>
            <h5 className=''>Please email us directly at <span style={{cursor: 'pointer'}} onClick={() => window.location = 'mailto:jjjaccommodations@gmail.com'}>JJJAccommodations@gmail.com</span></h5>
        </div>
    )
}

export default EmailFailure
