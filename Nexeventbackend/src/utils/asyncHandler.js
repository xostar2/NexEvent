//making rapper for db
const asynHandler = (requestHandler) => {
        (req,res,next)=>{
                Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
        }
}

export {asynHandler}



// const asynHandler = (fn) =>()=>{

// }

