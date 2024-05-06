import {v2 as nexEvent} from "cloudinary";
import fs from "fs"; 

          
nexEvent.config({ 
  cloud_name:  process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});



const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath || localFilePath.length===0){
            return null;
        }

        const multiUploads = []

        for( const multiUpload of localFilePath){
            console.log("multi upload: ",multiUpload);
            const response = await nexEvent.uploader.upload(multiUpload,
                {
                    resource_type:"auto"
                })
                
           if(response.error){
               console.log("Error while uploading file",response.error.message);
               throw new Error("fail to upload file in cloudinary");
           }
           console.log("uploaded file url",response.url);
           multiUploads.push(response.url);
           fs.unlinkSync(multiUpload);
        } 
        return multiUploads;
    }
    catch(error){
        console.log("error while uploading file",error.message);
        for(const multiUpload of localFilePath){
            try{
                fs.unlinkSync(multiUpload);
            }
            catch(error){
                console.log("error while deleting file",error.message);
            }
        }
    }
}

export {uploadOnCloudinary}