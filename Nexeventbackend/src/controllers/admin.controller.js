import {Admin} from '../models/admin.model';
import {ApiResponse} from '../utils/ApiResponse.js';
import {asyncHandler} from '../utils/asyncHandler.js';
import {ApiError} from '../utils/ApiError.js';


const generaAccessAndRefereshToken= async function (userId){
    try{  
       const user=await Admin.findById(userId)
       const accessToken=user.generateAccessToken()
       const refreshToken =user.generateRefreshToken()
 
       user.refreshToken=refreshToken;
       await user.save({validateBeforeSave : false})
 
       return {accessToken,refreshToken}
    }catch(error){
       throw new ApiError(500,"something went wrong while generating refreshtoken and Accesstoken")
    }
 }

 const loginAdmin = asyncHandler(async(req,res)=>{
    const {email,password} = req.body
    if (!email || !password) {
       return res.status(400).json({ message: 'Username and password are required' });
   }
   const user = await Admin.findOne({email:email})
   if(!user){
      throw new ApiError(404,"user not found in DB")
   }    
   const ispasswordValid= await user.isPasswordCorrect (password)
   if(!ispasswordValid){
      throw new ApiError(400,"invalid user credentials");
   }
   const {accessToken,refreshToken}=await generaAccessAndRefereshToken(user?._id);
   user.refreshToken=refreshToken;
   return res.status(200)
   .cookie("accessToken",accessToken,{httpOnly:true,secure:true})
   .cookie("refreshToken",refreshToken,{httpOnly:true,secure:true})
   .json(
      new ApiResponse(
         200,
         {
            user:user,accessToken,refreshToken
         },
         "User logged in Successfully"
      )
   )
 })

 const logoutAdmin = asyncHandler(async (req,res)=>{
      await Admin.findByIdAndUpdate(
         req.user._id,
         {
            $set:{
               refreshToken:undefined
            }
         },
         {
            new :true
         }
      )

      const options={
         httpOnly:true,
         secure:true
      }

      return res.status(200)
      .clearCookie("accessToken",options)
      .clearCookie("refreshToken",options)
      .json(
         new ApiResponse(200,{},"User logout successfully")
      )
})

