import express from "express"
import cors from "cors"
import cookieparser from "cookie-parser"

const app = express()

app.get("/", (req, res) => {
    res.send("backend deployed")
})
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended :true, limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieparser())//perform crud operations on users server using this


//routes importing 

import userRoute from "./routes/user.routes.js"

app.use("/api/v1/users", userRoute)
export { app }