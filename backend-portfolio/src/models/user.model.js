// import mongoose, {Schema} from "mongoose"
// // import jwt from "jsonwebtoken"
// // import bcrypt from "bcrypt"

// const userSchema = new Schema(
//     {
//         title : {
//             type : String,
//             required : true,
//             lowercase: false,
//             // index : true, // for enabling search
//             // unique : true,
//             // trim : true,
//         },
//         description : {
//             type : String,
//             required : true,
//             lowercase: false,
//         },
//         avatar : {
//             type: String, //cloudinary url 
//             required : true
//         },
//         hashtags :{
//             type : [String],
//             required :true,
//         }
//     },
//     {
//         timestamps : true,
//     }
// )

// // bcrypting passwords to hash format using pre middleware 
// // userSchema.pre("save", async function (next) {
// //     // modify it in a way ki jab password field me changes ho tbhi ye hash krein password ko
// //     if(!this.isModified("password")) return next();
// //     this.password = await bcrypt.hash(this.password, 10)
// //     next()
// // })

// // // checking if password is wrong / correct
// // userSchema.methods.isPasswordCorrect = async function(password){
// //     return await bcrypt.compare(password,this.password)// returns true or false after comparing the passwords
// // }

// // userSchema.methods.generateAccessToken = function(){
// //     return jwt.sign(
// //         {
// //             _id : this._id,
// //             username : this.username,
// //             fullname :this.fullname,
// //             email : this.email,
// //         },
// //         process.env.ACCESS_TOKEN_SECRET,
// //         {
// //             expiresIn : process.env.ACCESS_TOKEN_EXPIRY
// //         }
// //     )
// // }

// // userSchema.methods.generateRefreshToken = function(){
// //     return jwt.sign(
// //         {
// //             _id : this._id,
// //         },
// //         process.env.REFRESH_TOKEN_SECRET,
// //         {
// //             expiresIn : process.env.REFRESH_TOKEN_EXPIRY
// //         }
// //     )
// // }
// export const User = mongoose.model("User",userSchema)
import mongoose, { Schema } from "mongoose"

const tweetSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            index: true
        },
        description: {
            type: String,
            required: true
        },
        avatar: {
            type: String,
            required: true
        },
        hashtags: {
            type: [String],
            required: true,
            index: true
        }
    },
    {
        timestamps: true
    }
)

export const Tweet = mongoose.model("Tweet", tweetSchema)