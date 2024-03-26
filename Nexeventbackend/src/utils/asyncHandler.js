//making rapper for db
const asyncHandler = (requestHandler) => {
       return (req,res,next)=>{
                Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
        }
}

export {asyncHandler}



// const asynHandler = (fn) =>()=>{

// }

