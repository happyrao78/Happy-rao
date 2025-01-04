import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 1.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const SkeletonCard = () => (
  <div className="flex flex-col rounded-lg overflow-hidden p-4 md:p-6 custom-bg animate-pulse min-h-[300px]">
    <div className="w-72 bg-gray-400 rounded-full mb-4"></div>
    <div className="h-4 bg-gray-400 rounded mb-2 w-2/3"></div>
    <div className="h-3 bg-gray-400 rounded mb-4 w-full"></div>
    <div className="h-3 bg-gray-400 rounded w-4/5"></div>
  </div>
);

const ItemLayout = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sloganIndex, setSloganIndex] = useState(0);

  const slogans = [
    "Oops, slow network! Didn't try Airtel 6G yet?",
    "Still loading... patience is a virtue!",
    "Hang tight, we're fetching the best tweets for you!",
  ];

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('/api/fetchTweets');

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setTweets(data.tweets || []);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    // Simulate 3 seconds of loading
    setTimeout(fetchTweets, 10000);

    // Change slogans every 3 seconds
    const sloganInterval = setInterval(() => {
      setSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(sloganInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl text-center samarkan-font text-accent mb-6">
        Your Tweets
      </h2>

      {loading && (
        <p className="text-center text-accent mb-4">{slogans[sloganIndex]}</p>
      )}

      {loading || tweets.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 transition ease-in-out duration-300">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500">Error loading tweets</p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {tweets.map((tweet) => (
            <motion.div
              key={tweet.id} // Adjust based on your API's tweet ID field
              variants={item}
              className="flex flex-col rounded-lg overflow-hidden p-4 md:p-6 custom-bg min-h-[300px]"
            >
              {tweet.avatar && (
                <div className="w-12 h-12 relative mb-4 rounded-full border-2 border-yellow-400">
                  <Image
                    src={tweet.avatar}
                    alt="Avatar"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              )}
              <h3 className="text-accent font-semibold mb-2">{tweet.title}</h3>
              <p className="text-muted flex-grow text-white">
                {tweet.description.length > 100
                  ? `${tweet.description.substring(0, 100)}...`
                  : tweet.description}
              </p>
              {tweet.hashtags && tweet.hashtags.length > 0 && (
                <div className="flex flex-wrap mt-2">
                  {tweet.hashtags.map((hashtag, index) => (
                    <span
                      key={index}
                      className="custom-bg text-accent text-xs font-medium mr-2 mb-2 px-4 py-1 rounded-lg uppercase"
                    >
                      #{hashtag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default ItemLayout;
