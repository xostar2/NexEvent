import React from "react";
import "../styles/AddPackage.css";
const AddPackage = (eventId,vendorId) => {
  return (
    <>
      <form className="form-control-add-package" action="">
        <p className="title-add-package">Add Package</p>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="text"  placeholder="Add-Title"/>

        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="password" placeholder="Enter Password"/>  
        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="file" 
          id="image"
          name="images[]"
          multiple accept="image/*"
          placeholder="Upload Image"/>
        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="text" placeholder="Enter Email"/>
        </div>
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="number" placeholder="Enter Amount"/>
        </div>  
        <div className="input-field-add-package">
          <input required="" className="input-add-package" type="text" placeholder="Enter Description"/>
        </div>
        
        <div className="input-field-add-package">
          <label className="label-add-package" for="input">
            <input required="" className="input-add-package-checkbox" type="checkbox" />
            I agree to the terms and conditions
          </label>
        </div>  


        <div className="input-field-add-package">
          <button className="submit-btn-add-package">Add Package</button>                   
        </div>
      </form>
    </>
  );
};

export default AddPackage;
