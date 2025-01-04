// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path : './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 5000, ()=>{
        console.log(`Server is running on Port ${process.env.PORT}`)
    })
    app.get("/",(req,res)=>{
        res.send("Backend Deployed")
    })
    app.on("error",(error)=>{
        console.log("ERROR",error)
        throw error
    })
})
.catch((err) =>{
    console.log("MONGODB Connection Error !!!", err)
})

/*import express from "express"

const app = express()
//we will be using iife for db connection

(async()=>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("ERROR:",error)
        throw error
    }
    
})()*/