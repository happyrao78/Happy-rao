import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTypingEffect from 'react-typing-effect';

const PhotoGrid = () => {
  // Sample images representing different categories
  const images = [
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQEGLjYt-qiyzw/feedshare-shrink_800/feedshare-shrink_800/0/1733897433441?e=1739404800&v=beta&t=m8EfUL5y4UllzJC35qbAWwMFtiwJ4iVD2CrZYshNQfE', category: 'abstract' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQFrQwK-HQ49TA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1729534055428?e=1739404800&v=beta&t=5soa4AQ9pqD97SbRgwEm6hmKpZKWglPhZ-w82OgVAfc', category: 'nature' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQGblis5-7u6SQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1729534057497?e=1739404800&v=beta&t=MhArGmL4_T-pSiGCziJz5qbMiwyOVPvpM1d5YIN9Mg8', category: 'space' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQHBDCBIrIHnJQ/feedshare-shrink_800/feedshare-shrink_800/0/1728652376792?e=1739404800&v=beta&t=t62ruh4qco5oic4Bq3TtYAyUIZPRMrZyXfCGIiu6-2Y', category: 'food' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQFRq03W59ln3A/feedshare-shrink_800/feedshare-shrink_800/0/1724060747887?e=1739404800&v=beta&t=WftpwrOGjij65O23m4K1JmUnPeRgURZ67dSifspj3RA', category: 'nature' },
    { url: 'https://media.licdn.com/dms/image/v2/D4E22AQEH1aM-KmBpOQ/feedshare-shrink_800/feedshare-shrink_800/0/1721764112307?e=1739404800&v=beta&t=ePp_WL0P30nQhn2h5pm9P7urnyZjZxUiKYXGUlxDdHk', category: 'abstract' },
    { url: 'https://media.licdn.com/dms/image/v2/D4E22AQER2YAp-b7CCg/feedshare-shrink_800/feedshare-shrink_800/0/1721676634950?e=1739404800&v=beta&t=oTtGUD4LuiX7gSRVTL0LKlY1CCjfUN4zvI8eWQDdtfM', category: 'space' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQF8PHBZrhJP-A/feedshare-shrink_1280/feedshare-shrink_1280/0/1719376698138?e=1739404800&v=beta&t=idAlpNL0kRxyYrAsvxA3dHLyTqhcvDNOaWPnw3DK-rQ', category: 'food' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQESe2oYZEbZ7A/feedshare-shrink_1280/feedshare-shrink_1280/0/1712926856139?e=1739404800&v=beta&t=feh6aoJX1DVfTtv06mvtOaIDSOsVZDH6yMrGDfv4f7g', category: 'abstract' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQEGQI3hPSY2_Q/feedshare-shrink_800/feedshare-shrink_800/0/1717402162635?e=1739404800&v=beta&t=1YG-ADfBf7JoLz1jp-eSNku4kTn_cU7ufRBk6M__5Bc', category: 'nature' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQG-Ti3oGqwOXw/feedshare-shrink_1280/feedshare-shrink_1280/0/1713286710025?e=1739404800&v=beta&t=_uBNjxlT_ECRKAdyAWeS7FNMKnLrQYNSWoC57ZDNFTk', category: 'space' },
    { url: 'https://media.licdn.com/dms/image/v2/D5622AQEeEoUvhRdXsg/feedshare-shrink_1280/feedshare-shrink_1280/0/1717232180015?e=1739404800&v=beta&t=WylByehuOBYs0wEi-AkFujOTUoNcUK7ghZcqk_ToO98', category: 'food' },
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