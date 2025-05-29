import React, { useState } from 'react'
import ProjectLayout from './ProjectLayout'
import { projectsData, projectCategories } from '../../data'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

const categoryVariants = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0 }
}

const ProjectList = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory)

  return (
    <div className='w-full'>
      {/* Category Filter */}
      <motion.div 
        variants={categoryVariants}
        initial="hidden"
        animate="show"
        className='flex flex-wrap justify-center gap-2 mb-8 px-4'
      >
        {projectCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-accent text-background'
                : 'bg-background/20 text-foreground hover:bg-background/40'
            }`}
          >
            {category.name} ({category.id === 'all' ? projectsData.length : category.count})
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        key={activeCategory} // This ensures re-animation when category changes
        variants={container}
        initial="hidden"
        animate="show"
        className='w-full max-w-auto xl:max-w-6xl px-4 mx-auto lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={item}
            className='flex-1'
          >
            <ProjectLayout {...project} />
          </motion.div>
        ))}
      </motion.div>

      {/* No projects found */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className='text-center text-muted py-12'
        >
          <p>No projects found in this category.</p>
        </motion.div>
      )}
    </div>
  )
}

export default ProjectList