
import {Router} from 'express';
import {feedbackForm} from "../controllers/feedback.controller.js"

const router = Router()



router.route("/feedback").post(feedbackForm);






export default router