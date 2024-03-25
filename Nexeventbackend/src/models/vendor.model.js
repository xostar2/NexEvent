import mongoose,{Schema} from mongoose;
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const vendorSchema = new Schema(
    {
        username: {
            type:String,
            required:true,
            unique: true,
            lowercase :true,
            trim:true,
            index:true
        },
        vendorName: {
            type:String,
            required:true,
            trim:true
        },
        companyName: {
            type:String,
            required:true,
            trim:true,
            index:true
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
        registrationNo:{
            type:String,
            required:true,
            trim:true,
        },
        refreshToken:{
            type:String
        },
        startDate:{
            type:Date,
            required:true

        } ,
        eventList:[
            {
            type: Schema.Types.ObjectId,
            ref : "Event"
            }
        ]

    },
    {
        timeStamps:true
    }

);

vendorSchema.plugin(mongooseAggregatePaginate);

vendorSchema.pre("save", async function(next){
    if(!this.isModified("password"))return next();
    this.password= bcrypt.hash(this.password);
    next();
 })

 vendorSchema.methods.isPasswordCorrect= async function (password){
    return await bcrypt.compare(password,this.password);
 }

 vendorSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id : this._id,
            email: this.email,
            username:this.username,
            companyName: this.companyName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
 }
 
 vendorSchema.methods.generateRefreshToken = function(){
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
    



export const Vendor = mongoose.model('Vendor',vendorSchema); 