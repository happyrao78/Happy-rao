import {Router} from "express"
import { registerTweet } from "../controllers/user.controller.js"
import { getAllTweets } from "../controllers/listtweets.js"
import {upload} from "../middlewares/multer.middleware.js"


const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
    ]),
    registerTweet)

router.route("/listtweets").get(getAllTweets)

export default router