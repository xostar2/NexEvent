import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import {Event} from "../models/event.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const addEvent= asyncHandler(async (req,res)=>{

    //get event details from front end
    //all feild required
    //file present ot not thumnails
    //upload them to cloudinary 
    //create event object - create entry in db
    //check response and event creation
    //return response

    const {eventName,thumbnail,description} = req.body
    
    if(eventName.trim()===""){
        ApiError(400,"Event name is important to add");
    }
    if(description.trim()===""){
        ApiError(400,"Event name is important to add");
    }



})

export {
    addEvent,
}