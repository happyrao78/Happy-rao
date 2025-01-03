import { asyncHandler } from "../utils/asynchandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Tweet } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getAllTweets = asyncHandler(async (req, res) => {
    // Fetch all tweets from the database
    const tweets = await Tweet.find().select("-password -refreshToken"); // Exclude sensitive fields like password if any.

    // Check if tweets exist
    if (!tweets || tweets.length === 0) {
        throw new ApiError(404, "No tweets found");
    }

    // Return the list of tweets
    res.status(200).json(new ApiResponse(200, tweets, "Tweets fetched successfully"));
});

export { getAllTweets };
