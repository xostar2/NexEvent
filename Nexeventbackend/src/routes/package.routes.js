import {Router} from 'express';
import { addPackage, updatePackage, deletePackage} from '../controllers/package.controller.js';
import {upload} from '../middlewares/multer.middleware.js'
import { verifyJWT } from '../middlewares/authvendor.middleware.js';

const router = Router()



router.route("/addpackage").post(
    upload.fields(//using multer here for upload file 
        [
            {
                name:"thumbnail",
                maxCount:1
            }
        ]
        ),
    addPackage
    )


router.route("/updatepackage").put(verifyJWT,updatePackage)

router.route("/deletepackage").delete(verifyJWT,deletePackage)

export default router               