"use client"
import { BtnList } from '@/app/data'
import React from 'react'
import NavButton from './NavButton'
import {motion} from 'framer-motion' 
import useScreenSize from '../hooks/useScreenSize'
const container = {
    hidden: { opacity: 0 },
    show:{
        opacity: 1,
        transition:{
            staggerChildren: 0.3,
        }
    }
}
const Navigation = () => {
   const angleIncrement = 360 / BtnList.length ;
const size = useScreenSize();
const isLarge =  size > 1024;
const isMedium = size > 768;
const isSmall = size < 768;
    return (
        <div className='w-full fixed h-screen flex items-center justify-center'>
        <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
         className='w-max flex items-center justify-center relative hover:pause animate-spin-slow group'>
        {
            BtnList.map((btn,index) => {
                const angleRad = (index*angleIncrement*Math.PI)/180
                const radius = isLarge ? 'calc(20vw - 1rem)' :  isMedium ? 'calc(30vw - 1rem)': isSmall ? 'calc(45vw - 1.9rem)': 'calc(20vw - 1rem)';
                const x = `calc(${radius}*${Math.cos(angleRad)})`;
                const y = `calc(${radius}*${Math.sin(angleRad)})`;
                return <NavButton key={btn.label} x={x} y={y} {...btn} />
               
            })
        }
        </motion.div>
        </div>
    )
}
export default Navigation