import {v2 as nexEvent} from "cloudinary";
import fs from "fs"; 

          
nexEvent.config({ 
  cloud_name:  process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath)return null;
        const response= await nexEvent.uploader.upload(localFilePath,
            {
                resource_type:"auto"
            })
            //file uploaded successfully
            //now unlinking the file from local storage
            fs.unlinkSync(localFilePath);
            //console.log(response);
            console.log("file is upload on cloudinary",response.url);
            return response;

    }
    catch(error){
            fs.unlinkSync(localFilePath);//remove the local saved temporary file as the upload operation got failed
            return null;

    }
}

export {uploadOnCloudinary}