import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"
import { Vendor } from "../models/vendor.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const generaAccessAndRefereshToken= async function (vendorId){
    try{  
       const vendor=await User.findById(vendorId)
       const accessToken=vendor.generateAccessToken()
       const refreshToken =vendor.generateRefreshToken()
 
       vendor.refreshToken=refreshToken;
       await vendor.save({validateBeforeSave : false})
 
       return {accessToken,refreshToken}
    }catch(error){
       throw new ApiError(500,"something went wrong while generating refreshtoken and Accesstoken")
    }
 }

//====================================================================================================================


const vendorRegister = asyncHandler( async (req, res)=>{
    // get vendor details from frontend
    //validate not empty
    //checkk vendor exist or not
    //file present or not
    ////upload them to cloudinary , avatar ,check on multer and cloudinary
    //create vendor object in db and save
    //remove password and refresh token from files response
    //check response and vendor account creation
    // returm response


    const {vendorName,companyName,email,phone,aadhar,password,registrationNo,state,city} = req.body

    if(
        [vendorName,companyName,email,phone,aadhar,password,registrationNo,state,city].some((field)=>
            field.trim()==="")
    ){
        throw new ApiError(400,"All fields are required")
    }

    if(!email.includes('@') ){
        throw new ApiError(400,"@ required in email check email again")
    }

    if(phone.length!=10 ){
        throw new ApiError(400,"phone digit  should be 10 length")
    }
    //we have to some more validation here
    if(password.length<8){
        throw new ApiError(400,"password should be more then 8");
    }

    const existingvendor= await Vendor.findOne(
        {
            $or: [{vendorName},{email}]
        }
    )

    if(existingvendor){
        throw new ApiError(400,"vendor already exist with this credentials ")
    }
    const avatarLocalPath= req.files?.avatar[0]?.path

     if(!avatarLocalPath){
        throw new ApiError(400,"Avatar is compulsory");
     }

     const avatar =await uploadOnCloudinary(avatarLocalPath)

     if(!avatar){
        throw new ApiError(400,"Avatar link is not working")
     }


    const vendor = await Vendor.create(
        {
            vendorName:vendorName.toLowerCase(),
            email,
            avatar:avatar.url,
            password,
            phone,
            aadhar,
            companyName,
            state,
            city,
            registrationNo

        }
    )

    const createVendor = await Vendor.findById(vendor._id).select(" -password -refreshToken")

    if(!createVendor){
        throw new ApiError(501,"something went wrong while registering vendor");
    }

    return res
    .status(201)
    .json(
        new ApiResponse(
            200,
            createVendor,
            "Vendor created successfully"
        )
    )
})

//====================================================================================================================

const loginVendor = asyncHandler( async (req,res) =>{
    //req body =data
    //vendorName email check
    //find vendor
    //if vendor find check password
    //access and refresh tokengenerate and send vendor
    //send cookie secure cookie

    const {vendorName,email,aadhar,companyName,phone}= req.body

    if(!vendorName && !email ){
        throw new ApiError(400,"Vendor name or password is required");
    }

    const vendor = await Vendor.findOne(
        {
            $or:[{vendorName},{email}]
        }
    )
    if(!vendor){
        throw new ApiError(400," vendor not found in DB")
    }

    const isPasswordValid = await vendor.isPasswordCorrect(password)
    if(!isPasswordValid){
        throw new ApiError(401,"Wrong Password");
    }

    const {accessToken,refreshToken} = await generaAccessAndRefereshToken(vendor._id);

    vendor.refreshToken=refreshToken

    const options={
        httpOnly:true,
        secure:true //by this you can modify only server can do
    }

    return res.status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshtoken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                vendor:vendor,accessToken,refreshToken
            },
            "Vendor logged in succefully"
        )
    )
})

//====================================================================================================================

const logoutVendor = asyncHandler(async (req ,res) => {
    await Vendor.findByIdAndUpdate(
        req.vendor._id,
        {
            $set:{
                refreshToken:undefined
            }
        },
        {
            new:true
        }
    )

    const options = {
        httpOnly:true,
        secure:true
    }

    return res.status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(
        new ApiResponse(
            200,
            {},
            "vendor Logout successfully"
        )
    )
})


//====================================================================================================================

const refreshAccessToken = asyncHandler( async (req ,res) =>{
    //vendors refresh token we taking from cookies
    const incomingRefreshToken=req.cookies.refreshToken || req.body.refreshToken
 
    if(!incomingRefreshToken){
       throw new ApiError(401,"unauthorized request")
    }
 
    try {
       const decodedtoken= jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)
       const vendor= await Vendor.findById(decodedtoken?._id)
    
       if(!vendor){
          throw new ApiError(401,"invalid refresh token")
       }
    
       if(incomingRefreshToken !== vendor?.refreshToken){
          throw new ApiError(401 ," refressh token is expired and use")
       }
    
       const options= {
          httpOnly:true,
          secure:true
       }
    
       const {accessToken,newrefreshToken}=await generaAccessAndRefereshToken(vendor._id)
    
       return res
       .status(200)
       .cookie("accessToken",accessToken,options)
       .cookie("refreshToken",newrefreshToken,options)
       .json(
          new ApiResponse(
             200,
             {
                accessToken,
                refreshToken : newrefreshToken,
                
             },
             "Access token refreshed"
          )
       )
    
    
    } catch (error) {
       throw new ApiError(200,error)
    }
 })
 
//====================================================================================================================

const changeCurrentVendorPassword =asyncHandler(async (req, res) => {
    const {oldPassword,newPassword} =req.body
 
    const vendor = await Vendor.findById(req.vendor?._id)
 
    const isPasswordCorrect=await vendor.isPasswordCorrect(oldPassword)
 
    if(!isPasswordCorrect){
       throw new ApiError(400,"Invalid old password")
    }
 
    vendor.password=newPassword
 
    await vendor.save({validateBeforeSave:false})
 
    return res
    .status(200)
    .json(new ApiResponse(200,{},"Password change successfully"))
 })
 
//====================================================================================================================

const getCurrentVendor= asyncHandler( async (req,res)=>{

    return res
    .status(200)
    .json(
       new ApiResponse(200,req.vendor,"current vendor fetch successfully")
    )
 })

 //====================================================================================================================

 const updateVendorAccountDetails= asyncHandler(async (req,res)=>{
    const {username,phone,email}=req.body
 
    if(!username || !phone || !email){
       throw new ApiError(400,"all fields are required")
    }
    const user=Vendor.findByIdAndUpdate(
       req.user?._id,
       {
          $set:{
             username,
             phone,
          }
       },
       {new:true}
       ).select("-password")
 
       return res
       .status(200)
       .json(
          new ApiResponse(200, user,"Account details update Successfully")
       )
 })
 
 //====================================================================================================================




export {
    vendorRegister,
    loginVendor,
    logoutVendor,
    refreshAccessToken,
    changeCurrentVendorPassword,
    getCurrentVendor,
    updateVendorAccountDetails

}