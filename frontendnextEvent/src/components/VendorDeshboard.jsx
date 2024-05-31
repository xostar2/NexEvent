import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/UserContext'
import moment from 'moment';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import ErrorBoundary from './ErrorBoundary';
const userImage = 'https://source.unsplash.com/random/300x300'
const VendorDeshboard = ( ) => {
    
    const [vendors_d,setVendors_d] = useState(null);
    const [Error,setError] =useState(null);
    const[isLoading,setIsLoading]=useState(null);
    
    const{vendordetails,setVendorDetails}=useContext(AppContext);

    const navigate =useNavigate();
   
    const fetchVendorDetails = async () => {
      try {
        const response = await axios.get(URL, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ventoken")}`,
          },
        });
        console.log("this is response data:::::::::::::::::::::this is data",response.data.data);
        setVendors_d(response.data.data);
        setVendorDetails(response.data.data);
        
        console.log("this is vendor details",response.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        console.log("this is error in vendor home page while fetching data:",error.message);
        setIsLoading(false);
      }
    };

    useEffect(()=>{
      
      fetchVendorDetails();
      console.log(":::::::::::::::::",vendors_d);
    },[])
  
  return (
    <ErrorBoundary>
    <>
         <div id="user-dashboard">
        <div id="user-data">
          <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>{vendors_d?.companyName}</h1>
          <div id="p-tag-for-userdashboard">Email:{vendors_d?.email}</div>
          <div id="p-tag-for-userdashboard">VendorName:{vendors_d?.vendorName}</div>
          <div id="p-tag-for-userdashboard">Registration No.:{vendors_d?.registrationNo}</div>
          
          <div id="p-tag-for-userdashboard">phone:{vendors_d?.phone}</div>
          
          
          
          <div id="p-tag-for-userdashboard">DoB:{moment(vendors_d?.DOB).format('DD/MM/YY')}</div>
          <div id="p-tag-for-userdashboard">aadhaar:{vendors_d?.aadhaar}</div>
          {/* Add more user data fields as needed */}
        </div>
        <div id="user-image">
          {userImage && <img src={userImage} alt={""} style={{ width: '100%', maxWidth: '300px', objectFit: 'cover', borderRadius: '135px' }} />}
        </div>
        <div id="buttons">
          <button>Update Profile</button>
          <button onClick={()=>{navigate("/vieworders",{state:{vendorId:vendors_d?._id}})}}>View Orders</button>
          <button onClick={()=>{navigate("/addevent")}}>Addevent</button>

        </div>
      </div>
    </>
    </ErrorBoundary>
  )
}

export default VendorDeshboard

