import React, { useState } from "react";

const CreateTweet = () => {
  const [title, setTitle] = useState("");
  const [tweetText, setTweetText] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(file); // Save the file for sending to the server
    }
  };

  const handleCreateTweet = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!title.trim() || !tweetText.trim() || !hashtags.trim() || !avatar) {
      alert("All fields, including the image, are required.");
      setLoading(false);
      return;
    }

    try {
      // Prepare form data for file upload
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", tweetText);
      formData.append("hashtags", hashtags.split(",").map((tag) => tag.trim()));
      formData.append("avatar", avatar);

      const response = await fetch("https://happy-rao-backend-admin-panel.vercel.app/api/v1/users/register", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        alert("Tweet created successfully!");
        setTitle("");
        setTweetText("");
        setHashtags("");
        setAvatar(null);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error creating tweet:", error);
      alert("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">
        Create a Tweet
      </h2>
      <form onSubmit={handleCreateTweet} className="space-y-6">
        {/* Title Field */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a title for your tweet"
            required
          />
        </div>

        {/* Tweet Text */}
        <textarea
          value={tweetText}
          onChange={(e) => setTweetText(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows="4"
          placeholder="What's happening?"
          required
        ></textarea>

        {/* Image Upload */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">Add an Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full text-gray-700"
            required
          />
        </div>

        {/* Hashtags */}
        <div>
          <label className="block text-gray-600 font-medium mb-2">
            Add Hashtags (comma-separated)
          </label>
          <input
            type="text"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g., #coding, #react"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            loading
              ? "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Tweet"}
        </button>
      </form>
    </div>
  );
};

export default CreateTweet;
