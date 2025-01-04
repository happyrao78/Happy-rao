import React, { useEffect, useState } from "react";
import axios from "axios";
import CreateTweet from "./Tweet";
import ListTweet from "./ListTweet";

const AdminPanel = ({ userDetails }) => {
  const [userTweets, setUserTweets] = useState([]);

  useEffect(() => {
    // Fetch tweets for the logged-in user
    const fetchTweets = async () => {
      try {
        const response = await axios.get(`https://happy-rao-backend-admin-panel.vercel.app/api/v1/tweets?userId=${userDetails._id}`);
        setUserTweets(response.data.tweets); // Assuming your API sends an array of tweets
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, [userDetails._id]);

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Admin Panel</h2>

      {/* User Details Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-medium text-gray-800">User Details</h3>
        <div className="mt-4 space-y-2">
          <div className="text-gray-600">Full Name: {userDetails.fullname}</div>
          <div className="text-gray-600">Email: {userDetails.email}</div>
          <div className="text-gray-600">Username: {userDetails.username}</div>
        </div>
      </div>

      {/* Tweet Creation Form */}
      <CreateTweet />

      {/* Tweet List Section */}
      <div className="mt-8">
        <h3 className="text-2xl font-medium text-gray-800">Your Tweets</h3>
        <ListTweet tweets={userTweets} />
      </div>
    </div>
  );
};

export default AdminPanel;
