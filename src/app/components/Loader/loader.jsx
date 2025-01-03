import React from 'react'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
const Loader = () => {
    const [isWhite, setisWhite]= useState(true);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setisWhite((prev)=> !prev);
        },500);

        return() => clearInterval(interval);//loaded only one time
    },[]);
  return (
    <motion.div
    animate={{
      color: isWhite ? 'black' : 'black',
      backgroundColor: isWhite ? 'black' : 'black'
    }}
    transition={{type: "spring", stiffness: 15}}
    className='w-full h-svh overflow-hidden flex justify-center items-center transition ease-out duration-500'
  >
    <motion.div
    
      initial={{ scale: 3 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, delay: 0.1, type: "spring", stiffness: 30 }}
      className=' xl:text-9xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase samarkan-font shiny-text'
    >
      <p>Happy yadav</p>
    </motion.div>
  </motion.div>

  )
}

export default Loader