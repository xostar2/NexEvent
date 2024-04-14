import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import {Event} from "../models/event.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"


const addEvent= asyncHandler(async (req,res)=>{

    //get event details from front end
    //all feild required
    //which vendor is adding this event get vendor id 
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
    const vendorId=req.params.vendorId;

    const avatarLocalPath= req.files?.thumbnail[0]?.path
    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar is compulsory");
     }

     const avatar =await uploadOnCloudinary(avatarLocalPath)
     if(!avatar){
        throw new ApiError(400,"Avatar link is not working")
     }

     const event= await Event.create({
        eventName,
        thumbnail,
        description,
        owner:vendorId,

     })
    



})

export {
    addEvent,
}