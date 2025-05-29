import React, { useState } from 'react'
import Image from 'next/image'
import { FaExternalLinkAlt, FaPlay, FaPause, FaInstagram } from 'react-icons/fa'

const ProjectLayout = ({ name, description, media, date, demoLink, category, technologies }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  // Check if URL is Instagram reel
  const isInstagramReel = (url) => {
    return url && typeof url === 'string' && (url.includes('instagram.com/reel') || url.includes('instagram.com/p/'))
  }

  // Get Instagram embed URL (for iframe)
  const getInstagramEmbedUrl = (url) => {
    if (!url || typeof url !== 'string') return null
    
    try {
      // Extract post ID from Instagram URL
      const match = url.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/)
      if (match && match[1]) {
        return `https://www.instagram.com/p/${match[1]}/embed/captioned/?cr=1&v=14&wp=1080&rd=https%3A%2F%2Fdeveloper.instagram.com&rp=%2Fembeds%2F#%7B%22ci%22%3A0%2C%22os%22%3A0%7D`
      }
    } catch (error) {
      console.error('Error parsing Instagram URL:', error)
    }
    return null
  }

  const toggleVideo = (e) => {
    e.stopPropagation()
    const video = e.target.closest('.video-container').querySelector('video')
    if (video) {
      if (video.paused) {
        video.play()
        setIsVideoPlaying(true)
      } else {
        video.pause()
        setIsVideoPlaying(false)
      }
    }
  }

  const getCategoryColor = (category) => {
    switch(category) {
      case 'fullstack': return 'bg-blue-500/20 text-blue-400'
      case 'frontend': return 'bg-green-500/20 text-green-400'
      case 'ai-agents/automation': return 'bg-purple-500/20 text-purple-400'
      case 'backend': return 'bg-orange-500/20 text-orange-400'
      case 'ai': return 'bg-pink-500/20 text-pink-400'
      default: return 'bg-gray-500/20 text-gray-400'
    }
  }

  const handleInstagramClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    openModal() // Open modal instead of redirecting
  }

  const renderMedia = (isModal = false) => {
    if (!media || !media.url) return null

    const containerClass = isModal ? 'w-full h-80' : 'w-full h-48'
    const isInstagram = media.type === 'video' && isInstagramReel(media.url)

    if (media.type === 'image') {
      return (
        <div className={`${containerClass} relative overflow-hidden`}>
          <Image 
            src={media.url} 
            alt={name} 
            layout='fill' 
            objectFit='cover' 
            className='transition-transform duration-300 hover:scale-110'
          />
        </div>
      )
    }

    if (isInstagram) {
      if (isModal) {
        // Modal me Instagram embed karna
        const embedUrl = getInstagramEmbedUrl(media.url)
        
        return (
          <div className={`${containerClass} relative overflow-hidden`}>
            {embedUrl ? (
              <iframe
                src={embedUrl}
                className='w-full h-full border-0'
                frameBorder="0"
                scrolling="no"
                allowTransparency="true"
                allow="encrypted-media"
                loading="lazy"
              />
            ) : (
              // Fallback agar embed nahi chal raha
              <div className='w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center'>
                <div className='text-center text-white p-6'>
                  <FaInstagram className='text-6xl mb-4 mx-auto' />
                  <p className='text-lg font-medium mb-2'>Instagram Reel</p>
                  <p className='text-sm opacity-75 mb-4'>Unable to embed directly</p>
                  <a 
                    href={media.url} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full text-sm transition-colors duration-300'
                  >
                    View on Instagram
                  </a>
                </div>
              </div>
            )}
          </div>
        )
      } else {
        // Card view me Instagram placeholder with click handler
        return (
          <div 
            className={`${containerClass} relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center cursor-pointer hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-300`}
            onClick={handleInstagramClick}
          >
            <div className='text-center text-white'>
              <FaInstagram className='text-4xl mb-2 mx-auto animate-pulse' />
              <p className='text-sm font-medium'>Instagram Reel</p>
              <p className='text-xs opacity-75'>Click to view</p>
            </div>
            
            {/* Play button overlay */}
            <div className='absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors duration-300'>
              <div className='bg-white/20 rounded-full p-3'>
                <FaPlay className='text-white text-xl ml-1' />
              </div>
            </div>
          </div>
        )
      }
    }

    // Regular video handling
    return (
      <div className={`video-container relative ${containerClass} overflow-hidden`}>
        <video 
          src={media.url}
          className='w-full h-full object-cover'
          loop
          muted
          preload="metadata"
          controls={isModal}
          autoPlay={isModal}
        />
        {!isModal && (
          <button
            onClick={toggleVideo}
            className='absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors duration-300'
          >
            {isVideoPlaying ? (
              <FaPause className='text-white text-2xl' />
            ) : (
              <FaPlay className='text-white text-2xl' />
            )}
          </button>
        )}
      </div>
    )
  }

  return (
    <>
      <div className='w-full max-w-sm mx-auto h-auto'>
        <div className='text-sm md:text-base flex flex-col h-full relative rounded-lg overflow-hidden custom-bg border border-muted/20 hover:border-accent/50 transition-all duration-300 hover:transform hover:scale-105'>
          
          {/* Media Section */}
          {media && (
            <div className='relative'>
              {renderMedia(false)}
              
              {/* Category Badge */}
              <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)} backdrop-blur-sm`}>
                {category.replace('-', ' ').replace('/', '/').toUpperCase()}
              </div>
            </div>
          )}

          <div className='p-4 md:p-6 flex-1 flex flex-col'>
            <h2 className='text-accent uppercase mb-2 font-semibold'>{name}</h2>
            
            {/* Technologies */}
            {technologies && (
              <div className='flex flex-wrap gap-1 mb-3'>
                {technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index}
                    className='text-xs bg-muted/20 text-muted px-2 py-1 rounded'
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className='text-xs text-muted'>+{technologies.length - 3}</span>
                )}
              </div>
            )}
            
            <p className='text-muted flex-1 text-gray-300 leading-relaxed'>
              {description.length > 120 ? `${description.substring(0, 120)}...` : description}
            </p>
            
            <div className='flex items-center justify-between mt-4'>
              {description.length > 120 && (
                <button 
                  onClick={openModal} 
                  className='text-accent hover:underline text-sm'
                >
                  Read More
                </button>
              )}
              <a 
                href={demoLink} 
                target='_blank' 
                rel='noopener noreferrer'
                className='ml-auto bg-accent/10 hover:bg-accent/20 text-accent p-2 rounded-full transition-colors duration-300'
              >
                <FaExternalLinkAlt className='text-sm' />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm p-4' onClick={closeModal}>
          <div className='w-full max-w-4xl bg-background/95 backdrop-blur-md rounded-lg relative border border-muted/20 max-h-[90vh] overflow-y-auto' onClick={e => e.stopPropagation()}>
            <button 
              className='absolute top-4 right-4 text-gray-400 hover:text-white text-2xl z-20 bg-black/50 rounded-full w-8 h-8 flex items-center justify-center'
              onClick={closeModal}
            >
              &times;
            </button>
            
            {/* Modal Media */}
            {media && (
              <div className='relative'>
                {renderMedia(true)}
                
                {/* Category Badge in Modal */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)} backdrop-blur-sm`}>
                  {category.replace('-', ' ').replace('/', '/').toUpperCase()}
                </div>
              </div>
            )}
            
            <div className='p-6'>
              <h2 className='text-accent font-semibold text-xl mb-4'>{name}</h2>
              
              {/* Technologies in Modal */}
              {technologies && (
                <div className='flex flex-wrap gap-2 mb-4'>
                  {technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className='text-sm bg-accent/10 text-accent px-3 py-1 rounded-full'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              
              <p className='text-muted text-white leading-relaxed mb-6'>{description}</p>
              
              <div className='flex items-center justify-between flex-wrap gap-3'>
                <a 
                  href={demoLink} 
                  target='_blank' 
                  rel='noopener noreferrer'
                  className='bg-accent text-background px-6 py-2 rounded-full hover:bg-accent/90 transition-colors duration-300 flex items-center gap-2'
                >
                  <FaExternalLinkAlt />
                  View Project
                </a>
                
                {/* Instagram Link in Modal (as backup) */}
                {media && media.type === 'video' && isInstagramReel(media.url) && (
                  <a 
                    href={media.url} 
                    target='_blank' 
                    rel='noopener noreferrer'
                    className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center gap-2'
                  >
                    <FaInstagram />
                    Open in Instagram
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectLayout