import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import {Event} from "../models/event.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"
//===============================================================================================
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
    // const incomingRefreshToken=req.cookies.refreshToken || req.body.refreshToken

    // if(!incomingRefreshToken){
    //    throw new ApiError(401,"unauthorized request")
    // }
    
   const vendorId=req.params.url;

    if(!vendorId){
      throw new ApiError(401,"invalid refresh token")
   }

    if(eventName.trim()===""){
        ApiError(400,"Event name is important to add");
    }
    if(description.trim()===""){
        ApiError(400,"Event name is important to add");
    }
    

    if(!req.files){
        throw new ApiError(501,"req file is not present !");
    }
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
        thumbnail:avatar.url,
        description,
        owner:vendorId,
     })
    
     return res.status(200)
     .json(
        new ApiResponse(200,event,"event created successfully")
     )
})

//=======================================================================================================

// update event or edit event details

const updateEvent = asyncHandler(async (req, res) => {
    // Get event ID from request parameter
    const eventId = req.params.eventId;
  
    // Validate event ID presence
    if (!eventId) {
      throw new ApiError(400, "Please provide event ID to update.");
    }
  
    // Get updated event details from request body
    const { eventName, description, thumbnail } = req.body;
  
    // Find the event by ID
    const event = await Event.findById(eventId);
  
    // Check if event exists
    if (!event) {
      throw new ApiError(404, "Event not found.");
    }
  
    // Update event details (if provided)
    if (eventName) {
      event.eventName = eventName.trim();
    }
    if (description) {
      event.description = description.trim();
    }
  
    // Handle thumbnail update (optional)
    if (req.files && req.files.thumbnail) {
      const avatarLocalPath = req.files.thumbnail[0].path;
      const updatedAvatar = await uploadOnCloudinary(avatarLocalPath);
      if (updatedAvatar) {
        event.thumbnail = updatedAvatar.url;
      } else {
        throw new ApiError(400, "Failed to update event thumbnail.");
      }
    }
  
    // Save the updated event to the database
    await event.save();
  
    // Return the updated event data
    return res.status(200).json(
      new ApiResponse(200, event, "Event updated successfully.")
    );
  });
  
 const deleteEvent= asyncHandler(async(req,res)=>{
    const eventId =req.params.eventId;
    if(!eventId){
      throw new ApiError(400,"Please provide event ID to delete.");
    }

    const event= await Event.findById(eventId);
    if(!event){
      throw new ApiError(404,"Event not found");
    }

    const deleteEventSuccessfully=await event.deleteOne();
    if(deleteEventSuccessfully){
      console.log("event deleted successfully");
    }
    return res.status(200)
    .json(
      new ApiResponse(
        200,
        null,
        "event deleted successfully"
      )
    )
 })

export {
    addEvent,
    updateEvent,
    deleteEvent,
}


/*const verifyJWT = require('./verifyJWT'); // Replace with your JWT verification function

const addEvent = asyncHandler(async (req, res) => {
  const decoded = verifyJWT(req.headers.authorization); // Extract vendor ID from JWT
  const vendorId = decoded.userId;

  // ... rest of your addEvent logic with vendorId

  return res.status(200).json(
    new ApiResponse(200, event, "event created successfully")
  );
});
*/


// Populate Ownership on Creation: When a vendor creates an event, populate the owner field with the vendor ID before saving the event to the database.

// Implement Search Functionality: Create an endpoint that allows searching for events based on various criteria, potentially including vendor ID (if available).

