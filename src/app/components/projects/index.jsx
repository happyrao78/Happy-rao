import React from 'react'
import ProjectLayout from './ProjectLayout'
import { projectsData } from '../../data'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1.5
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const ProjectList = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className='w-full max-w-auto xl:max-w-5xl px-4 mx-auto lg:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
    >
      {projectsData.map((project, index) => (
        <motion.div
          key={index}
          variants={item}
          className='flex-1'
        >
          <ProjectLayout {...project} />
        </motion.div>
      ))}
    </motion.div>
  )
}

export default ProjectList
