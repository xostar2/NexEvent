import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));


app.use(express.json({
    limit:"16kb"
}))//data came from form

app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
})) //taking data from url

app.use(express.static("public"));//ststice files

app.use(cookieParser());


//routes import

import userRouter from './routes/user.routes.js'
import vendorRouter from './routes/vendor.routes.js'
import feedBackRouter from "./routes/feedback.routes.js"

//routes declaration

app.use("/api/v1/users",userRouter);// http: //localhost:8000/api/v1/user/register
app.use("/api/v1/vendors",vendorRouter);
app.use("/api/v1/feedback",feedBackRouter)


export {app}
