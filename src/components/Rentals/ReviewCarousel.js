import React from 'react'
import { useState, useEffect } from 'react'
import ReviewQuote from './ReviewQuote'
import { reviewQuotesData } from './utilitiesRental'

function ReviewCarousel() {
    const [reviewIndex, setReviewIndex] = useState(0)

    const reviews = reviewQuotesData.map((review, index) =>{
        return <ReviewQuote key={index} review={review} />
    })

    useEffect(() => {
        const interval = setInterval(() => {
            if (reviewIndex === reviews.length -1) setReviewIndex(0)
            else setReviewIndex(reviewIndex+1)
        }, 8000);

        return () => clearInterval(interval);
    });

    return (
        <div className='w-100'>
                {reviews[reviewIndex]}
        </div>
    )
}

export default ReviewCarousel
