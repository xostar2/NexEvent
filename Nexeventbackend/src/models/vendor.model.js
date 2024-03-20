import mongoose,{Schema} from mongoose;
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
            type: Schema.type.ObjectId,
            ref : "Event"
            }
        ]

    },
    {
        timeStamps:true
    }

);

export const Vendor = mongoose.model('Vendor',vendorSchema); 