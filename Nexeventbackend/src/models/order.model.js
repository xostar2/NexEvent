import mongoose,{Schema} from mongoose;
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const orderSchema= new Schema(
    {
        user:{
            type:Schema.Types.ObjectId,
            ref:'User',
            required:true
        },
        package:{
            type:Schema.Types.ObjectId,
            ref:'Package',
            required:true
        },
        orderDate:{
            type:Date,
            default:Date.now
        },
        status:{
            type:String,
            enum:['Pending', 'Reject','Accept'],
            default:pending
        }

    },
    {
        timestamps:true
    }
 )
 userSchema.plugin(mongooseAggregatePaginate);

 export const Order = mongoose.model("Order",orderSchema);