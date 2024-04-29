import {Router} from "express";
import {
  addEvent,
  updateEvent,
  deleteEvent,
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
router.route("/updateevent").put(verifyJWT, updateEvent);

router.route("/deleteevent").delete(verifyJWT, deleteEvent);

export default router;
