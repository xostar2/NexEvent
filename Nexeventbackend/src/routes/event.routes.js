import {Router} from "express";
import {
  addEvent,
  deleteEvent,
  getEvent
} 
from "../controllers/event.controller.js";

import {upload} from "../middlewares/multer.middleware.js";
import {verifyJWT} from "../middlewares/authvendor.middleware.js";

const router = Router();

router.route("/addevent").post(
  verifyJWT,
  upload.fields(
    //using multer here for upload file
    [
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]
  ),
  addEvent
);
router.route("/getevent").get(verifyJWT, getEvent);


router.route("/deleteevent").delete(verifyJWT, deleteEvent);

export default router;
