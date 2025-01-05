import express from 'express';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import cors from 'cors';
import NodeCache from 'node-cache';

const app = express();
const PORT = process.env.PORT || 6969;
const cache = new NodeCache({ stdTTL: 1800 }); // Cache for 30 minutes

app.use(cors());

async function fetchMediumArticles() {
  try {
    const response = await fetch('https://medium.com/topic/programming');
    const html = await response.text();
    const $ = cheerio.load(html);
    const articles = [];

    // Select article elements and extract data
    $('article').each((_, element) => {
      const article = $(element);
      
      const title = article.find('h2').first().text().trim();
      const excerpt = article.find('p').first().text().trim();
      const authorName = article.find('a[rel="author"]').text().trim();
      const authorImage = article.find('img[alt*="author"]').attr('src');
      const readTime = parseInt(article.find('span:contains("min read")').text()) || 5;
      const tags = article.find('a[data-tag]').map((_, el) => $(el).text().trim()).get();
      const url = article.find('a[rel="noopener"]').attr('href');
      const coverImage = article.find('img').not('[alt*="author"]').first().attr('src');

      if (title && excerpt) {
        articles.push({
          id: Buffer.from(title).toString('base64'),
          title,
          excerpt,
          author: {
            name: authorName || 'Anonymous',
            image: authorImage || '/placeholder-avatar.png',
          },
          readTime,
          tags: tags.length ? tags : ['Programming'],
          url: url || 'https://medium.com',
          coverImage: coverImage || '/placeholder-image.png',
        });
      }
    });

    return articles.slice(0, 6); // Return top 6 articles
  } catch (error) {
    console.error('Error fetching Medium articles:', error);
    throw error;
  }
}

app.get('/medium-articles', async (req, res) => {
  try {
    // Check cache first
    const cachedArticles = cache.get('medium-articles');
    if (cachedArticles) {
      return res.json({ articles: cachedArticles });
    }

    const articles = await fetchMediumArticles();
    
    // Cache the results
    cache.set('medium-articles', articles);
    
    res.json({ articles });
  } catch (error) {
    res.status(500).json({ 
      error: 'Failed to fetch Medium articles',
      details: error.message
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});