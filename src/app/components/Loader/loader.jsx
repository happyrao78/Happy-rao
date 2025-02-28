import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';

const PhotoGrid = () => {
  // Sample images representing different categories
  const images = [
    { url: "/fourteen.png", category: 'abstract' },
    { url: "/three.png", category: 'nature' },
    { url: "/nine.png", category: 'space' },
    { url: "/two.png", category: 'food' },
    { url: "/sixteen.png", category: 'nature' },
    { url: "/twelve.png", category: 'abstract' },
    { url: "/seven.png", category: 'space' },
    { url: "/six.png", category: 'food' },
    // { url: "/twelve.png", category: 'abstract' },
    // { url: "/.png", category: 'nature' },
    // { url: "/.png", category: 'space' },
    // { url: "/.png", category: 'food' },
  ];

  return (
    <div className="fixed inset-0 -z-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="aspect-square relative rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={image.url}
              alt={image.category}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const Loader = ({ onLoaded }) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      if (onLoaded) onLoaded();
    }, 6000);

    return () => clearTimeout(timer);
  }, [onLoaded]);

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 w-full h-screen">
      <PhotoGrid />
      <motion.div 
        className="relative z-10 w-full h-full flex justify-center items-center bg-black/50 backdrop-blur-sm"
      >
        <div className="text-center text-white">
          <ReactTypingEffect
            text={['happy yadav']}
            speed={80}
            eraseSpeed={0}
            typingDelay={0}
            className="xl:text-9xl text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase samarkan-font shiny-text"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;