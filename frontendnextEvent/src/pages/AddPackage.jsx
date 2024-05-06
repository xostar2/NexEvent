import React from "react";
import "../styles/AddPackage.css";
import { Link } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppContext } from "../context/UserContext";
import { asyncHandler } from "../../../Nexeventbackend/src/utils/asyncHandler";
import axios from "axios";


const AddPackage = (eventId, vendorId) => {
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState({
    title: "",
    password: "",
    amount: "",
    description: "",
    checkbox: false,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckboxChange = (e) => {
    setPackageData({
      ...packageData,
      checkbox: e.target.checked,
    });
    setError(""); // Clear error message when checkbox state changes
  };

  const handleDataChange = (e) => {
    setPackageData({
      ...packageData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!packageData.checkbox) {
      alert("Please check the checkbox to add a package");
      setError("Please check the checkbox");
      return;
    }
    setIsSubmitting(true);
    const packageDatas={...packageData,eventId:eventId!=null?eventId:null,vendorId:vendorId!=null?vendorId:null}
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/packages/addpackage",
        packageDatas,
        {
          header: {
            "content-type": "application/json",
          },
        }
      );
      console.log(response.data);
      if (response.status != 200) {
        setError("failed to add package");
        setIsSubmitting(false);
        return;
      }
      if (response.status === 200) {
        setError("");
        setIsSubmitting(false);
        setPackageData({
          title: "",
          password: "",
          amount: "",
          description: "",
          checkbox: false,
        });
        navigate("/eventhomepage");
      }
    } catch (error) {
      console.log(error);
      setError("failed to add package");
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <BackgroundImage />
      <form className="form-control-add-package" onSubmit={handleSubmit}>
        <p className="title-add-package">Add Package</p>
        <div className="input-field-add-package">
          <input
            required
            className="input-add-package"
            type="text"
            name="title"
            placeholder="Add-Title"
            value={packageData.title}
            onChange={handleDataChange}
          />
        </div>
        
       
        <div className="input-field-add-package">
          <input
            required=""
            className="input-add-package"
            type="text"
            placeholder="Enter Amount"
            name="amount"
            value={packageData.amount}
            onChange={handleDataChange}
          />
        </div>
        <div className="input-field-add-package">
          <input
            required=""
            className="input-add-package"
            type="text"
            placeholder="Enter Description"
            name="description"
            value={packageData.description}
            onChange={handleDataChange}
          />
        </div>

        <div className="input-field-add-package">
          <label className="label-add-package" htmlFor="checkbox">
            <input
              required=""
              className="input-add-package-checkbox"
              type="checkbox"
              name="checkbox"
              value={packageData.checkbox}
              onChange={handleCheckboxChange}
            />
            I agree to the terms and conditions
          </label>
        </div>

        <div className="input-field-add-package">
          <button className="submit-btn-add-package"
          disabled={isSubmitting}
          type="submit"
          
          
          >{isSubmitting ? "Adding..." : "Add Package"}
          </button>
        </div>
        <div className="input-field-add-package">
          <label className="label-add-package">
            Read Term and Conditions here{" "}
            <Link to="/" color="blue">
              {" "}
              click here
            </Link>
          </label>
        </div>
      </form>
    </>
  );
};
export default AddPackage;

{
  /* <div className="input-field-add-package">
          <input required="" className="input-add-package" name="thumbnail" type="file"
              id="thumbnail"
              placeholder="Upload Thumbnail"
              multiple accept="image/*"
            
          />
          
        </div> */
}
{
  /* <div className="input-field-add-package">
          <input required="" className="input-add-package" type="file" 
          id="image"
          name="images[]"
          multiple accept="image/*"
          placeholder="Upload Image"
          />
        </div> */
}
