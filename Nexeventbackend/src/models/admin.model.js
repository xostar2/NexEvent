import mongoose,{Schema} from mongoose;
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const adminSchema = new Schema({

    adminName: {
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
    phone:{
        type:String,
        required:true,
        trim:true,
    },
    password : {
        type:String,
        required:[true,"Password is required"]
    },
},{timestamps:true})




adminSchema.plugin(mongooseAggregatePaginate);

adminSchema.pre("save", async function(next){
    if(!this.isModified("password"))return next();
    this.password= bcrypt.hash(this.password);
    next();
 })

 adminSchema.methods.isPasswordCorrect= async function (password){
    return await bcrypt.compare(password,this.password);
 }

 adminSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username:this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
 }
 
 adminSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            _id : this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRYvendorSchema
        }
    )
}