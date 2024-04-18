import {Router} from 'express';
import { loginVendor, logoutVendor, refreshAccessToken, vendorRegister } from '../controllers/vendor.controller.js';
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from '../middlewares/authvendor.middleware.js';



const router = Router()



router.route("/vendorregister").post(
    upload.fields(//using multer here for upload file 
        [
            {
                name:"avatar",
                maxCount:1
            }
        ]
        ),
        vendorRegister
    )


router.route("/vendorlogin").post(loginVendor)

//secured routes

router.route("/vendorlogout").post(verifyJWT,logoutVendor)

router.route("/refresh-token",refreshAccessToken)




export default router 