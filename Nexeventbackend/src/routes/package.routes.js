import {Router} from 'express';
import { addPackage, updatePackage, deletePackage,getPackage} from '../controllers/package.controller.js';
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

router.route("/getpackage").get(getPackage)
router.route("/updatepackage").put(updatePackage)

router.route("/deletepackage").delete(deletePackage)

export default router               