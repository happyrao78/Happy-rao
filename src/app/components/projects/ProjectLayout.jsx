import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const ProjectLayout = ({name, description, image,date, demoLink}) => {
  return (
    <Link 
    href={demoLink}
    target='_blank'
    className='flex items-center justify-between w-full relative rounded-lg overflow-hidden p-20 custom-bg'>
    
       <div className='flex items-center justify-center space-x-2'>
       
        <h2 className='text-foreground'>{name}</h2>
        <p className='text-muted'>{description}</p>
       </div> 
       <div className='self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted' />
       <p className='text-foreground'>
        {new Date(date).toDateString()}
       </p>
       
           </Link>
           
  )
}

export default ProjectLayout