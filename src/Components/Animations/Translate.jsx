import { motion, useAnimation, useInView } from 'framer-motion';
import { ContainerWithChildren } from 'postcss/lib/container';
import React, { useEffect, useRef } from 'react'

export default function Translate({children}) {
    const ref = useRef();
    const inview = useInView(ref ,{once:false});
    console.log(inview)
    const control = useAnimation();
    console.log(control);
    useEffect(() =>{
          if(inview){
            control.start('final');
          }
        
    },[inview]);
  return (
    <div ref={ref}>
        <motion.div 
        variants={{ initial :{opacity: .0,y:70},
                    final :{opacity: 1 ,y:0}}
                }            
        initial = "initial"
        animate ={control} 
         transition={{duration:.5, delay:.1}}
        >
            {children}
        </motion.div>
    </div>
  )
}
