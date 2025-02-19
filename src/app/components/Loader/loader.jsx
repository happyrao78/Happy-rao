import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';

const PhotoGrid = () => {
  // Sample images representing different categories
  const images = [
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQFEBYPNwai5bw/feedshare-shrink_2048_1536/B56ZTuroOQHsA4-/0/1739171202913?e=1743033600&v=beta&t=lWmlc09NeDaAo98lAz3a7L1qFgHuSkGTH1qAX49aTCw', category: 'abstract' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQHwhKJmmC0wzw/feedshare-shrink_2048_1536/B56ZS8lzOCHEAs-/0/1738330816136?e=1743033600&v=beta&t=7ZFubt9xUPcPc5ONB8mTVSjcIxsFFT2Bxi5ZbE5pyvk', category: 'nature' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQEGLjYt-qiyzw/feedshare-shrink_800/feedshare-shrink_800/0/1733897433441?e=1743033600&v=beta&t=kk7vaPeMksOGMLKZFZyg0b7MIHELk4evIRR3TeNVYtk', category: 'space' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQGblis5-7u6SQ/feedshare-shrink_800/feedshare-shrink_800/0/1729534057408?e=1743033600&v=beta&t=xArOOZoHhlQ7kS-cptWW9PjpoKI-9X0R280gKT2Xpb8', category: 'food' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQFrQwK-HQ49TA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729534055428?e=1743033600&v=beta&t=281OCLbtnm-CL7DWHJxXmieLBrdUIEWheK2F_aj5Gmw', category: 'nature' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQFRq03W59ln3A/feedshare-shrink_800/feedshare-shrink_800/0/1724060747887?e=1743033600&v=beta&t=VlYQSwkp64GRer7wJ6y1aaCqQDyMOAbIrQlmOeAUSv4', category: 'abstract' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQEGQI3hPSY2_Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717402162626?e=1743033600&v=beta&t=uleAbl8B51NCFPV2alKqOT7JcuA8QwpJ8dvQLsm65uM', category: 'space' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQGFzsAkx0rJow/feedshare-shrink_800/feedshare-shrink_800/0/1714152608800?e=1743033600&v=beta&t=-wHQw1471Zath0vFGC_T5RKx7PMbwk1hKUpvDzJbwJE', category: 'food' },
    // { url: 'https://media.licdn.com/dms/image/v2/D5622AQESe2oYZEbZ7A/feedshare-shrink_1280/feedshare-shrink_1280/0/1712926856139?e=1739404800&v=beta&t=feh6aoJX1DVfTtv06mvtOaIDSOsVZDH6yMrGDfv4f7g', category: 'abstract' },
    // { url: 'https://media.licdn.com/dms/image/v2/D5622AQEGQI3hPSY2_Q/feedshare-shrink_800/feedshare-shrink_800/0/1717402162635?e=1739404800&v=beta&t=1YG-ADfBf7JoLz1jp-eSNku4kTn_cU7ufRBk6M__5Bc', category: 'nature' },
    // { url: 'https://media.licdn.com/dms/image/v2/D5622AQG-Ti3oGqwOXw/feedshare-shrink_1280/feedshare-shrink_1280/0/1713286710025?e=1739404800&v=beta&t=_uBNjxlT_ECRKAdyAWeS7FNMKnLrQYNSWoC57ZDNFTk', category: 'space' },
    // { url: 'https://media.licdn.com/dms/image/v2/D5622AQEeEoUvhRdXsg/feedshare-shrink_1280/feedshare-shrink_1280/0/1717232180015?e=1739404800&v=beta&t=WylByehuOBYs0wEi-AkFujOTUoNcUK7ghZcqk_ToO98', category: 'food' },
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