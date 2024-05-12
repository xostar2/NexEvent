import React from 'react'
import "./UserDashboard.css"
import BackgroundImage from './BackgroundImage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/UserContext'

const userData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  company: 'Example Corp.',
}

const userImage = 'https://source.unsplash.com/random/300x300'
const URL = "http://localhost:8000/api/v1/users/getuserprofile"

//======================================================================================
const UserDashboard = () => {
  
    const [user,setUser]=useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token'); // Assuming you store the token in localStorage
  console.log("this is token in vendor home page:",token);
  
  const fetchVendorDetails = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("this is response data in user dashboard",response.data.data);
      setUser(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log("this is error in vendor home page while fetching data:",error.message);
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    if (!token) {
      window.location.href = "/loginuser";
     throw new Error('Vendor token not found in vendorHomePage');
   }
    
    fetchVendorDetails();

  },[])

  return (
    <>
        
        <div id="user-dashboard">
        <div id="user-data">
          <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>{user.username}</h1>
          <div id="p-tag-for-userdashboard">Email:{user?.email}</div>
          <div id="p-tag-for-userdashboard">Address:{user?.phone}</div>
          
          <div id="p-tag-for-userdashboard">phone:{user?.gender}</div>
          
          <div id="p-tag-for-userdashboard">Aadhar:{user?._id}</div>
          
          <div id="p-tag-for-userdashboard">DoB:{user?.DOB}</div>
          {/* Add more user data fields as needed */}
        </div>
        <div id="user-image">
          {userImage && <img src={userImage} alt={userData.name} style={{ width: '100%', maxWidth: '300px', objectFit: 'cover', borderRadius: '135px' }} />}
        </div>
        <div id="buttons">
          <button>Update Profile</button>
          <button>View Orders</button>
        </div>
      </div>
    </>
  )
}

export default UserDashboard
