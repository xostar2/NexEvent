import {Router} from 'express';
import { verifyJWT } from '../middlewares/auth.middleware.js';
import { addOrder , getOrder } from '../controllers/order.controller.js';

const router = Router();

router.route("/addorder").post(verifyJWT,addOrder);
router.route("/getorder").get(verifyJWT,getOrder);

export default router