import React, { useState } from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'

const ProjectLayout = ({ name, description, image, date, demoLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <>
      <div className='w-full max-w-xs mx-auto h-60'>
        <div
          className='text-sm md:text-base flex flex-col justify-between h-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg'
        >
          {image && (
            <div className='w-full h-20 mb-4 relative'>
              <Image src={image} alt={name} layout='fill' objectFit='cover' className='rounded-lg' />
            </div>
          )}
          <div className='flex-1 flex flex-col'>
            <h2 className='text-accent uppercase mb-2'>{name}</h2>
            <p className='text-muted flex-1 text-gray-300'>
              {description.length > 100 ? `${description.substring(0, 100)}...` : description}
            </p>
            <div className=' flex items-center'>
              {description.length > 100 && (
                <button 
                  onClick={openModal} 
                  className='text-accent hover:underline'
                >
                  Read More
                </button>
              )}
              <a 
                href={demoLink} 
                target='_blank' 
                rel='noopener noreferrer'
                className='ml-2 text-accent hover:underline'
              >
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50' onClick={closeModal}>
          <div className='w-full max-w-lg mx-4 bg-background/60 backdrop-blur-md p-6 rounded-lg relative' onClick={e => e.stopPropagation()}>
            <button 
              className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className='text-accent font-semibold mb-4'>{name}</h2>
            {image && (
              <div className='w-full h-48 mb-4 relative'>
                <Image src={image} alt={name} layout='fill' objectFit='cover' className='rounded-lg' />
              </div>
            )}
            <p className='text-muted text-white'>{description}</p>
            <a 
              href={demoLink} 
              target='_blank' 
              rel='noopener noreferrer'
              className='mt-4 inline-block text-accent hover:underline'
            >
              <FaExternalLinkAlt className='inline mr-1' />
              View Project
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectLayout
