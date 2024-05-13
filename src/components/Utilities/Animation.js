import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

function Animation({children, variant, duration}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true})
    const mainControls = useAnimation()

    const variantObj = {
        'slideUp':{
            hidden:{opacity:0,y:150},
            visable:{opacity:1, y:0}
        },
        'fadeIn':{
            hidden:{opacity:0},
            visable:{opacity:1}
        },
        'slideLeft':{
            hidden:{opacity:0,x:300},
            visable:{opacity:100, x:0}            
        },
        'slideLeftStagger':{
            hidden:{opacity:0,x:250},
            visable:{opacity:[0,.5,1], x:[150,150,0], scale:[.90,.90,1]}
        }
    }

    useEffect(()=>{
        if (isInView) {
            mainControls.start('visable')
        }
    }, [isInView, mainControls])

    return (
        <div ref={ref} className='position-relative'>
            <motion.div
                variants={variantObj[variant]}
                initial='hidden'
                animate={mainControls}
                transition={{duration}}
            >{children}</motion.div>
        </div>
    )
}

export default Animation