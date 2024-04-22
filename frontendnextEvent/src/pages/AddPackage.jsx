import React from "react";
import "../styles/AddPackage.css";
import { Link } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
const AddPackage = (eventId,vendorId) => {
  return (
    <>
      <BackgroundImage/>
      <form className="form-control-add-package" action="">
        <p className="title-add-package">Add Package</p>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="text"  name="title" placeholder="Add-Title"/>

        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" name="password" type="password" placeholder="Enter Password"/>
        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" name="thumbnail" type="file"
              id="thumbnail"

              multiple accept="image/*"
            
          />
          
        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="file" 
          id="image"
          name="images[]"
          multiple accept="image/*"
          placeholder="Upload Image"
          />
        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="text" placeholder="Enter Email " name="email"/>
        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="number" placeholder="Enter Amount" name="amount"/>
        </div>  
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="text" placeholder="Enter Description" name="description"/>
        </div>
        
        <div className="input-field-add-package">
          <label className="label-add-package" for="input">
            <input required="" className="input-add-package-checkbox" type="checkbox" name="checkbox"/>
            I agree to the terms and conditions
          </label>
        </div>  


        <div className="input-field-add-package">
          <button className="submit-btn-add-package">Add Package</button>                   
        </div>
        <div className="input-field-add-package">
          <label className="label-add-package">
           
            Read Term and Conditions here<Link to="/">click here</Link>
          </label>
          
          </div>
      </form>
    </>
  );
};

export default AddPackage;
