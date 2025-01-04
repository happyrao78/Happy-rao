import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config(); // Remove path for Vercel

connectDB()
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.log("MONGODB Connection Error !!!", err);
    
});

// Export app for Vercel serverless function handling
export default app;
