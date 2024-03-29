import mongoose ,{Schema} from mongoose;
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userSchema = new Schema(
    {
        username: {
            type:String,
            required:true,
            unique: true,
            lowercase :true,
            trim:true,
            index:true
        },
        fullname: {
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase :true,
            trim:true,
            index:true
        },
        gender:{
            type: String,
            enum:[ "Male" , "Female"],   
            required:true,    
            default:null     
        },
        phone:{
            type:String,
            required:true,
            trim:true,
        },
        DOB: {
            type:Date,
            default:Date.now
        },
        aadhaar:{
            type:String,
            trim:true,
        },
        address:{
            type:String,
        },
        password : {
            type:String,
            required:[true,"Password is required"]
        },
        avatar : {
            type:String,
            required:true
        },
        refreshToken:{
            type:String
        }


    },
{
    timeStamps:true
});
 userSchema.plugin(mongooseAggregatePaginate);

 userSchema.pre("save", async function(next){
    if(!this.isModified("password"))return next();
    this.password= bcrypt.hash(this.password);
    next();
 })

 userSchema.methods.isPasswordCorrect= async function (password){
    return await bcrypt.compare(password,this.password);
 }

 userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
 }
 
 userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
        }
    )
 }

export const User = mongoose.model("User",userSchema);