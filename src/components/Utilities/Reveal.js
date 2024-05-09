import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

function Reveal({children}) {
    return (
        <div className='position-relative overflow-hidden'>
            <motion.div
                variants={{
                    hidden:{opacity:0,x:-80},
                    visable:{opacity:1, x:0}
                }}
                initial='hidden'
            >{children}</motion.div>
        </div>
    )
}

export default Reveal
