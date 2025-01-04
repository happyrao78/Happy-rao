import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js"; // Assuming app is already an instance of express

dotenv.config({ path: './.env' });

// Connect to DB
connectDB()
  .then(() => {
    console.log('MongoDB connected');

    // Define additional routes if needed
    app.get("/", (req, res) => {
      res.send("Backend Deployed");
    });
  })
  .catch((err) => {
    console.log("MONGODB Connection Error !!!", err);
  });

// Export the app as the Vercel handler
export default app;
