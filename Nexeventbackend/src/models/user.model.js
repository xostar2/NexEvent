import mongoose ,{Schema} from mongoose;

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
            type:String
        },
        refreshToken:{
            type:String
        }


    },
{
    timeStamps:true
});

export const User = mongoose.model("User",userSchema);