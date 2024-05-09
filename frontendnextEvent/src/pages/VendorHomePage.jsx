
import React, { useContext, useEffect, useState } from 'react';
import '../styles/VendorHomePage.css'; // Import the CSS file for styling
import BackgroundImage from '../components/BackgroundImage';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/UserContext';
import axios from 'axios';
//====================================================================================================================

const URL = "http://localhost:8000/api/v1/vendors/getdetails";
//====================================================================================================================



const VendorHomePage = () => {
 
  const navigate = useNavigate();
  const [vendorDetails,setVendorDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  // let vendorDetails = {};
  

  const ventoken = localStorage.getItem('ventoken'); // Assuming you store the token in localStorage
  console.log("this is token in vendor home page:",ventoken);
  
  const fetchVendorDetails = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${ventoken}`,
        },
      });
      // console.log("this is response data",response.data.data);
      setVendorDetails(response.data.data);
      // vendorDetails = response.data.data;
      console.log("this is vendor details",vendorDetails);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log("this is error in vendor home page while fetching data:",error.message);
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    if (!ventoken) {
      window.location.href = "/loginuser";
     throw new Error('Vendor token not found in vendorHomePage');
   }
    
    fetchVendorDetails();

  },[])

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }





  
  return (
    <>
    
    <BackgroundImage />
    <div className="vendor-home-container">
      <div className="vendor-info-box">
        <div className="profile-image-container">
          <img src="/images/about.png" alt="Vendor Profile" className="profile-image" />
        </div>
        <div className="vendor-details">
          
          <h1>VendorName:{vendorDetails?.vendorName}</h1>
          <p>companyName:{vendorDetails?.companyName}</p>
          <ul>
            <li>Email:{vendorDetails?.email}</li>
            <li>Phone:{vendorDetails?.phone}</li>
            <li>Address:{vendorDetails?.address}</li>
            <li>City:{vendorDetails?.city}</li>
            <li>Registration Number:{vendorDetails?.registrationNo}</li>
            <li>StartDate:{vendorDetails?.startDate}</li>
            <li>vendorId:{vendorDetails?._id}</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="two-buttton-for-addevent-viewevents">
      <button className="button-two-button-vendor" onClick={()=>{navigate("/viewevent")}}>
          Viewevent
      </button>
      <button className="button-two-button-vendor" onClick={()=>{navigate("/addevent")}}>
          Addevent
      </button>
    </div>
    
    </>
  );
};
 export default VendorHomePage;
