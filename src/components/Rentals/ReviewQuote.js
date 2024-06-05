import React from 'react'
import Animation from '../Utilities/Animation'

function ReviewQuote({review}) {
    const {body, author, title} = review

    return (
        <div style={{maxWidth:'32rem'}}>
            <Animation variant='slideLeft' duration={1.5}>
                <figure className="text-end">
                    <blockquote className="blockquote">
                        <p className='fs-3 fst-italic'>{body}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer fs-5">
                        {author}, <cite title="Source Title">{title}</cite>
                    </figcaption>
                </figure>
            </Animation>
        </div>
    )
}

export default ReviewQuote
