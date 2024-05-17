import React from 'react'
import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

function Animation({children, variant, duration, delay=0, parentInView=null}) {
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
        'slideRight':{
            hidden:{opacity:0,x:-300},
            visable:{opacity:100, x:0}  
        },
        'slideLeftStagger':{
            hidden:{opacity:0,x:250, scale:.5},
            visable:{opacity:[0,.5,1], x:[150,75,0], scale:[.70,.90,1]}
        },
        'flipGrow':{
            hidden:{rotateY: 90, scale:.75},
            visable:{rotateY: 0, scale:1}
        }
    }

    useEffect(()=>{
        if (parentInView ? parentInView : isInView) {
            mainControls.start('visable')
        }
    }, [isInView, parentInView, mainControls])

    return (
        <div ref={ref} className='position-relative'>
            <motion.div
                variants={variantObj[variant]}
                initial='hidden'
                animate={mainControls}
                transition={{duration, delay}}
            >{children}</motion.div>
        </div>
    )
}

export default Animation