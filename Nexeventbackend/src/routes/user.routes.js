import {Router} from 'express';
import { loginUser, logoutUser, refreshAccessToken, registerUser } from '../controllers/user.controller.js';
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router()

router.route("/userregister").post(
    upload.fields(//using multer here for upload file 
        [
            {
                name:"avatar",
                maxCount:1
            }
        ]
        ),
    registerUser
    )


router.route("/userlogin").post(loginUser)

//secured routes

router.route("/userlogout").post(verifyJWT ,logoutUser)

router.route("/refresh-token",refreshAccessToken)




export default router