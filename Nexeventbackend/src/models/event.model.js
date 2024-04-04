import mongoose ,{Schema} from mongoose;
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const eventSchema = new Schema(
    {
        
        eventName:{
            type:String,
            enum:[
                "Conferences",
                "Seminars",
                "Workshops",
                "Team Building Events",
                "Trade Shows",
                "Business Dinners",
                "Networking Events",
                "Product Launches",
                "VIP Events",
                "Award Ceremonies",
                "Office Parties",
                "Weddings",
                "Birthday Parties",
                "Anniversary Celebrations",
                "Baby Showers",
                "Engagement Parties",
                "Family Reunions",
                "Graduation Parties",
                "Holiday Parties",
                "Concerts",
                "Festivals",
                "Sporting Events",
                "Charity Events",
                "Community Events",
                "Political Rallies",
                "Public Demonstrations",
                "Movie Premieres",
                "Fashion Shows",
                "Celebrity Parties",
                "Entertainment and Award Nights",
                "Brand Promotions",
                "Sales Promotions",
                "Retail Promotions",
                "Roadshows",
                "Academic Conferences",
                "Alumni Events",
                "Lectures and Talks",


            ],
            required:true,
            unique:true,
            lowercase:true,
            index:true
        },
        createDate:{
            type:Date,
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


eventSchema.plugin(mongooseAggregatePaginate);
export const Event = mongoose.model("Event",eventSchema);