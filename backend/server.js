require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const port = 5000;

// Access the API key from environment variables
const API_KEY = process.env.NEWS_API_KEY; // Use the key stored in .env

app.use(cors()); // Allow cross-origin requests

// Fetch technology news from NewsAPI for India
app.get('/technology-news', async (req, res) => {
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        category: 'technology', // Category: Technology
        country: 'us', // India (use 'in' for India)
        apiKey: API_KEY, // API Key from .env
      },
    });

    // Map the articles and include fallback images if none exist
    const articles = response.data.articles.map((article) => ({
      id: article.url, // Using the URL as a unique identifier
      avatar: article.urlToImage || 'https://via.placeholder.com/150', // Use a dummy image if no image is available
      title: article.title,
      description: article.description,
      link: article.url,
      tags: article.source.name ? [article.source.name] : [], // Use source name as a tag
    }));

    res.json(articles); // Send the articles as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching the news');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
