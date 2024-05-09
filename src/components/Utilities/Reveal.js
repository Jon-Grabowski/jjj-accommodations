import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

function Reveal({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})
    const mainControls = useAnimation()

    useEffect(()=>{
        console.log(isInView)
        if (isInView) {
            mainControls.start('visable')
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} className='position-relative'>
            <motion.div
                variants={{
                    hidden:{opacity:0,y:150},
                    visable:{opacity:1, y:0}
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration: 1.5}}
            >{children}</motion.div>
        </div>
    )
}

export default Reveal
