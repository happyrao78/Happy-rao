import React from 'react'
import ProjectLayout from './ProjectLayout'
import { projectsData } from '../../data'

const ProjectList = () => {
  return (
    <div className='w-full max-w-auto xl:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center'>
        {projectsData.map((project, index) => {
            return <ProjectLayout key={index} {...project} />
        })}
    </div>
  )
}

export default ProjectList