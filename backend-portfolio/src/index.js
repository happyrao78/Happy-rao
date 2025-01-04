import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';  // Assuming 'app' is your express app

dotenv.config({ path: './.env' });

// Use helmet for security
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],  // Allow resources from the same origin
      scriptSrc: ["'self'", "https://vercel.live"],  // Allow scripts from your domain and vercel.live
      fontSrc: ["'self'", "https://fonts.gstatic.com"],  // Allow fonts from Google Fonts
      styleSrc: ["'self'", "https://fonts.googleapis.com"],  // Allow styles from Google Fonts
      connectSrc: ["'self'"],  // Allow connections to the same origin (e.g., API calls, WebSockets)
      imgSrc: ["'self'"],  // Allow images from the same origin
      // Add other directives as needed (e.g., frameSrc, objectSrc)
    },
  })
);

// Connect to the database and define routes
connectDB()
  .then(() => {
    console.log('MongoDB connected');
    app.get("/", (req, res) => {
      res.send("Backend Deployed");
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection Error !!!", err);
  });

// Export the app as the Vercel handler (for serverless function)
export default app;
