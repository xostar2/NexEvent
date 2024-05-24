import React from "react";
import "../styles/AddPackage.css";
import { Link } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { AppContext } from "../context/UserContext";
import axiosInstance from "./axiosInstance.js";
import { useLocation } from "react-router-dom";

const AddPackage = () => {
   const location=useLocation();
  const navigate = useNavigate();
  const [packageData, setPackageData] = useState({
    title: "",
    amount: "",
    description: "",
    avatar: null,
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDataChange = (e) => {
    setPackageData({
      ...packageData,
      [e.target.name]: e.target.value,
    });
  };
  const handleImageChange = (e) => {
   setPackageData({
    ...packageData,
    avatar: e.target.files[0]

   })
  };

  useEffect(() => {
    

  },
[]);


//==============================================================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    const event=location.state.event?._id;
    const vn=location.state.vendor?._id;
    if (!packageData.title) {
      alert("Please check the title to add a package");
      setError("Please check the checkbox");
    }
    if (!packageData.description) {
      alert("Please check the title to add a package");
      setError("Please check the checkbox");
    }
    if (!packageData.amount) {
      alert("Please check the title to add a package");
      setError("Please check the checkbox");
    }
    setIsSubmitting(true);
    try {
      const formData = new FormData();
      formData.append("title", packageData.title);
      formData.append("description", packageData.description);
      formData.append("amount", packageData.amount);
      formData.append("avatar", packageData.avatar);
      formData.append("eventOwnerId",event);
      formData.append("vendorOwnerId",vn);
      
      const response = await axiosInstance.post(
        "http://localhost:8000/api/v1/packages/addpackage",
        formData,
        {
          header: {
            "content-type": "multipart/form-data",
          },
        }
      );
      console.log("this is the response of create package",response.data);
      if (response.status != 200) {
        setError("failed to add package");
        setIsSubmitting(false);
        alert("failed to add package try again");
        return;
      }
      if (response.status === 200) {
        setError("");
        setIsSubmitting(false);
        console.log("add package successfully",response.data);
        navigate("/eventhomepage",{
          state:{
            event:location.state.event
          }
        });
      }
    } catch (error) {
      console.log(error);
      setError("failed to add package",error.messsage);
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
          <input required="" className="input-add-package" 
              name="avatar" 
              type="file"
              id="avatar"
              placeholder="Upload Thumbnail"
              accept="image/*"
              onChange={handleImageChange}
            
          />
          
        </div> 
        <div className="input-field-add-package">
          <textarea
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
