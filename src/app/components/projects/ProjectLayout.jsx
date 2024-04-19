import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {motion} from 'framer-motion'
const item = {
  hidden:{opacity:0, y:100},
  show:{opacity:1, y:0}
}
const NavLink = motion(Link)
const ProjectLayout = ({name, description, image,date, demoLink}) => {
  return (
    <NavLink 
    variants={item}
    href={demoLink}
    target='_blank'
    className='text-sm md:text-base flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'>
    
       <div className='flex items-center justify-center space-x-2'>
       
        <h2 className='text-foreground'>{name}</h2>
        <p className='text-muted hidden sm:inline-block'>{description}</p>
       </div> 
       
       
           </NavLink>
           
  )
}

export default ProjectLayout