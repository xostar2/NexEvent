import { FeedBack } from '../models/feedback.model.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const feedbackForm =asyncHandler(async(req,res)=>{
    try{
        const feedback = req.body
        const feedbackresponse=await FeedBack.create(feedback);
        if(!feedbackresponse){
            throw new ApiError(500,"feedback should me completed before submit")
        }
        return res.status(200)
        .json(
            new ApiResponse(
                200,
                {feedbackForm},
                "feedback from user submitted successfully"
            )
        )
        
    }catch(error){
        console.log(error,"error wil feedback controller")
    }
})

export {
    feedbackForm
}