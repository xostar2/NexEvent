import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";            
import {Order} from "../models/order.model.js"
import {Package} from "../models/package.model.js"
import {Event} from "../models/event.model.js"
import {Vendor} from "../models/vendor.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {carryEvent} from "../middlewares/carryEvent.middleware.js"

//=======================================================================================================
//add order

const addOrder= asyncHandler(async (req,res)=>{
    const eventId=req.event?._id
    const vendorId=req.vendor?._id
    const packageId=req.package?._id

    const {orderDate,status}=req.body
    if(!eventId){
        throw new ApiError('Invalid event id',400)
    }
    if(!vendorId){
        throw new ApiError('Invalid vendor id',400)
    }
    if(!packageId){
        throw new ApiError('Invalid package id',400)
    }
    if(!orderDate || !status){
        throw new ApiError('Invalid order data',400)
    }

    const order=await Order.create({
        eventId,
        vendorId,
        packageId,
        orderDate,
        status:"pending"
    })
    if(!order){
        throw new ApiError('order not created',500);
    }

    return res.status(200)
    .json(
        new ApiResponse(200,order,"order created successfully")
    )
})

//=======================================================================================================
//get order
const getOrder= asyncHandler(async (req,res)=>{
    const orderId=req.params.orderId
    if(!orderId){
        throw new ApiError('Invalid order id',400)
    }
    const order=await Order.findById(orderId)
    if(!order){
        throw new ApiError('order not found',404)
    }
    return res.status(200)
    .json(
        new ApiResponse(200,order,"order fetched successfully")
    )
})

//=======================================================================================================
//update order
const updateOrderstatus= asyncHandler(async (req,res)=>{
    const orderId=req.params.orderId
    
    if(!orderId || !req.user){   
        throw new ApiError('Invalid order id',400)
    }
    const order=await Order.findById(orderId).populate("user")

    if(!order){
        throw new ApiError('order not found',404)
    }
    
    const {status}=req.body
    if(!status || !req.user){
        throw new ApiError('Invalid status',400)
    }
    
    
    const updatedorder= await Order.findByIdAndUpdate(orderId,{
        $set:{
            status,
            status                    

        }
    })                          
    return res.status(200)
    .json(
        new ApiResponse(200,updatedorder,"order updated successfully")
    )           

})

const removeOrder= asyncHandler(async (req,res)=>{
    const orderId=req.params.orderId;
    if(!orderId){   
        throw new ApiError('Invalid order id',400)
    }
    const order=await Order.findById(orderId)
    if(!order){
        throw new ApiError('order not found',404)
    }
    const removeOrder=await Order.findByIdAndDelete(orderId)
    return res.status(200)
    .json(
        new ApiResponse(200,removeOrder,"order deleted successfully")
    )   
})

export {
    addOrder
}