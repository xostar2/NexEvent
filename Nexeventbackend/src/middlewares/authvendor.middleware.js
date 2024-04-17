import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import {Vendor} from "../models/vendor.model.js";

export const verifyJWT= asyncHandler(async (req,res)=>{
    try {
        const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            throw new Error('Unauthorized request');
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const vendor = await Vendor.findById(decodedToken?._id).select('-password -refreshToken');

        if (!vendor) {
            throw new Error('Invalid Access Token');
        }

        req.vendor = vendor;
        next();
    } catch (error) {
        res.status(401).json({ message: error.message || 'Invalid Access Token' });
    }
})