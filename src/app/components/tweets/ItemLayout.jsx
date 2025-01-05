import React, { useEffect, useState } from 'react';
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
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sloganIndex, setSloganIndex] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState(null); // Track the article for the popup

  const slogans = [
    'Fetching the latest technology news...',
    'Still loading... please wait!',
    'Hang tight, the best tech news is on its way!',
  ];

  useEffect(() => {
    const fetchTechNews = async () => {
      try {
        const response = await fetch('https://happy-rao-newsapi.vercel.app/technology-news');
        const data = await response.json();
        setArticles(data.slice(0, 9)); // Fetch only 10 articles
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    // Simulate 3 seconds of loading
    setTimeout(fetchTechNews, 3000);

    // Change slogans every 3 seconds
    const sloganInterval = setInterval(() => {
      setSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 3000);

    return () => clearInterval(sloganInterval); // Cleanup interval on component unmount
  }, []);

  // Close the popup
  const closePopup = () => setSelectedArticle(null);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-6xl  text-center  samarkan-font text-accent mb-6">
        Tech News
      </h2>

      {loading && (
        <p className="text-center text-accent mb-4">{slogans[sloganIndex]}</p>
      )}

      {loading || articles.length === 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 transition ease-in-out duration-300">
          {[...Array(10)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500">Error loading articles</p>
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6"
        >
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={item}
              className="flex flex-col rounded-lg overflow-hidden p-2 md:p-6 custom-bg min-h-[200px]"
            >
              <h3 className="text-white  mb-2">{article.title}</h3>
              {/* <p className="text-muted flex-grow text-gray-400">
                {article.description?.length > 1
                  ? `${article.description.substring(0, 0)}...`
                  : article.description}
              </p> */}

              <button
                onClick={() => setSelectedArticle(article)}
                className="text-accent font-semibold shiny-text rounded-md custom-bg p-2 mt-4"
              >
                Read More
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Popup for Full Description */}
      {selectedArticle && (
        <div
          className="fixed inset-0 custom-bg flex justify-center items-center"
          onClick={closePopup}
        >
          <div
            className="custom-bg rounded-lg p-6 max-w-xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold text-accent mb-4">
              {selectedArticle.title}
            </h3>
            <p className="text-muted text-gray-300 mb-4">{selectedArticle.description}</p>
            <p className="text-muted text-gray-300">{selectedArticle.content}</p>
            <button
              className="mt-4 custom-bg  text-accent p-2 rounded-md"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemLayout;
