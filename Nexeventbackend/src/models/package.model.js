import mongoose ,{Schema} from mongoose;
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const packageSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        thumbnail:{
            type:String,//cloudinary url
            required:true
        },
        imageList:[{
            type:String,
        }],
        createDate:{
            type:Date,
            required:true,
            default:Date.now
        },
        eventOwnerId:{
            type:Schema.Types.ObjectId,
            ref:"Event"
        },
        vendorOwnerId:{
            type:Schema.Types.ObjectId,
            ref:"Vendor"
        },
        amount:{
            type:Number,
            required:true
        }

    },
    {
        timestamps:true
    }
    )

userSchema.plugin(mongooseAggregatePaginate);
export const Package = mongoose.model("Package",packageSchema);