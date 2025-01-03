import { asyncHandler } from "../utils/asynchandler.js"
import { ApiError } from "../utils/ApiError.js"
import { Tweet } from "../models/user.model.js"
import { uploadOnCloudinary } from  "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js"



const registerTweet = asyncHandler( async (req,res) =>{
    // res.status(200).json({
    //     message:"Successfully Configured"
    // })

    // get user details from frontend
    // validation -not empty
    // check if user doesnt already exists (email, username)
    // check if images, avatar are uploaded
    // upload them on cloudinary, avatar
    // create the user obj and store them in db
    // remove password and refresh token from the response
    // check for user creation
    // check response
    const {title,description,hashtags} = req.body
    console.log("title:",title,"description:",description,"hashtags:",hashtags)
    // if (fullname === ""){
    //     throw new ApiError(400,"full name is required")
    // }

    if(
        [title,description,hashtags].some((field)=>
        field?.trim() === ""))
    {
        throw new ApiError(400, "field is required")
    }

    const existedTitle = await Tweet.findOne({
        $or : [{title}]
    })

    if(existedTitle){
        throw new ApiError(409, "title already exists with given title")
    }

    const avatarLocalPath = req.files?.avatar?.[0]?.path;
    // const coverImageLocalPath = req.files?.coverImage?.[0]?.path;
    // let coverImageLocalPath;
    // if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
    //     coverImageLocalPath = req.files.coverImage[0].path
    // }

    console.log("req.files:",req.files)
    
    if(!avatarLocalPath){
        throw new ApiError(400, "Avatar image is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    // const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(400, "Avatar image is required")
    }

    const tweet = await Tweet.create({
        title,
        description,
        avatar : avatar.url,
        hashtags,
    })

    const createdUser = await Tweet.findById(tweet._id).select(
        "-password -refreshToken"
    )

    if(!createdUser){
        throw new ApiError(500, "error occured while creating the tweet")
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser, "Tweet Created Successfully")
    )

})

export { registerTweet}