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

const ItemLayout = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTweet, setSelectedTweet] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch('http://localhost:6969/api/v1/users/listtweets');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setTweets(data.data); // Assuming `data.data` contains the list of tweets
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTweets();
  }, []);

  const openModal = (tweet) => {
    setSelectedTweet(tweet);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTweet(null);
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading tweets...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error loading tweets</p>;
  }

  return (
    <>
      <div className="max-w-7xl mx-auto p-6">
        <h2 className="text-3xl text-center samarkan-font text-accent mb-6">Your Tweets</h2>
        {tweets && tweets.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
          >
            {tweets.map((tweet) => (
              <motion.div
                key={tweet._id}
                variants={item}
                className="flex flex-col rounded-lg overflow-hidden p-4 md:p-6 custom-bg hover:shadow-lg hover:border-yellow-400 hover:border-1 transition-all min-h-[300px]"
              >
                {/* Avatar with yellow border */}
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
                <h3 className="text-accent  font-semibold mb-2">{tweet.title}</h3>
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
                <div className="flex justify-between items-center mt-auto">
                  {tweet.description.length > 100 && (
                    <button
                      onClick={() => openModal(tweet)}
                      className="text-accent hover:underline"
                    >
                      Read More
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-gray-500">No tweets to display.</p>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && selectedTweet && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-lg mx-4 bg-background/60 backdrop-blur-md p-6 rounded-lg relative transform transition-all scale-95 hover:scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-foreground font-semibold mb-4">{selectedTweet.title}</h2>
            {selectedTweet.image && (
              <div className="w-full h-48 mb-4 relative">
                <Image
                  src={selectedTweet.image}
                  alt={selectedTweet.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            )}
            <p className="text-muted">{selectedTweet.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemLayout;
