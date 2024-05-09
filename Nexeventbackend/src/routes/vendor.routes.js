import {Router} from "express";
import {
  loginVendor,
  logoutVendor,
  refreshAccessToken,
  vendorRegister,
  changeCurrentVendorPassword,
  getCurrentVendor,
} from "../controllers/vendor.controller.js";
import {upload} from "../middlewares/multer.middleware.js";
import {verifyJWT} from "../middlewares/authvendor.middleware.js";

const router = Router();

router.route("/vendorregister")
  .post(
    upload.fields(
        [
            {
                name: "avatar",
                maxCount: 1,
            }
        ]
    ), 
    vendorRegister
);

router.route("/vendorlogin").post(loginVendor);

//secured routes

router.route("/vendorlogout").post(verifyJWT, logoutVendor);
router.route("/getdetails").get(verifyJWT, getCurrentVendor);
router.route("/changepassword").post(verifyJWT, changeCurrentVendorPassword);

router.route("/refresh-token", refreshAccessToken);

export default router;
