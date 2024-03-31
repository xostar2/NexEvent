import mongoose ,{Schema} from mongoose;
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const eventSchema = new Schema(
    {
        title:{
            type:String,
            required:true
        },
        eventName:{
            type:String,
            enum:[],
            required:true,
            unique:true,
            lowercase:true,
            index:true
        },
        createDate:{
            type:Date,
            required:true,
            default:Date.now
        },
        thumbnail:{
            type:String,//cloudinary url
            required:true
        },
        packageList:[
            {
                type:Schema.Types.ObjectId,
                ref:"Package"
            }
        ],
        description:{
            type:String,
            required:true
        },
        rating:{
            type:Schema.Types.ObjectId,
            ref:"Feedback"
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"Vendor"
        }

    },
    {timestamps:true}
)
userSchema.plugin(mongooseAggregatePaginate);
export const Event = mongoose.model("Event",eventSchema);