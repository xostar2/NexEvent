
import mongoose from "mongoose"
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import dotenv from "dotenv";

dotenv.config({
    path:'./env'
})

connectDB();















// import express from "express";

// const app =express();


// ;(async () => {
//     try{
//         await mongoose.connect(`${process.env.MONGO_URI1}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error in connecting to database : ",error);
//             throw error;
//         })
//         app.listen(process.env.PORT , ()=>{
//             console.log(`App listing on port ${process.env.PORT}`);
//         })
//     }
//     catch(error){
//         console.log("ERROR : ",error );
//     }
// }
// )()











