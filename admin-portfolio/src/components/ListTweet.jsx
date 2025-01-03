import React, { useEffect, useState } from "react";

const ListTweets = () => {
  const [tweets, setTweets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await fetch("http://localhost:6969/api/v1/users/listtweets"); // Update this URL if needed
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

  if (loading) {
    return <p className="text-center text-gray-500">Loading tweets...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Your Tweets</h2>
      {tweets && tweets.length > 0 ? (
        tweets.map((tweet) => (
          <div
            key={tweet._id}
            className="mb-6 p-6 bg-gray-100 shadow-md rounded-lg flex flex-col items-start"
          >
            <div className="flex items-center mb-4">
              {tweet.avatar && (
                <img
                  src={tweet.avatar}
                  alt="Avatar"
                  className="w-12 h-12 rounded-full mr-4"
                />
              )}
              <h3 className="text-xl font-semibold text-gray-800">{tweet.title}</h3>
            </div>
            <p className="text-gray-700 mb-4">{tweet.description}</p>
            {tweet.hashtags && tweet.hashtags.length > 0 && (
              <div className="flex flex-wrap">
                {tweet.hashtags.map((hashtag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 text-sm font-medium mr-2 mb-2 px-2 py-1 rounded-lg"
                  >
                    #{hashtag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No tweets to display.</p>
      )}
    </div>
  );
};

export default ListTweets;
