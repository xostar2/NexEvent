import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/UserContext'
import moment from 'moment';
import { useNavigate } from 'react-router-dom'

const userImage = 'https://source.unsplash.com/random/300x300'
const VendorDeshboard = (props ) => {
    // console.log(props.props.startDate)
    
    

    const navigate =useNavigate();
    useEffect(() => {
        console.log("this is props in VendorDeshboard",props);
    }, [props])



  
  return (
    <>
         <div id="user-dashboard">
        <div id="user-data">
          <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>{props?.props?.vendorName}</h1>
          <div id="p-tag-for-userdashboard">Email:{props?.props?.companyName}</div>
          <div id="p-tag-for-userdashboard">Address:{props?.props?.phone}</div>
          
          <div id="p-tag-for-userdashboard">phone:{props?.props?.gender}</div>
          
          <div id="p-tag-for-userdashboard">Aadhar:{props?.props?._id}</div>
          
          <div id="p-tag-for-userdashboard">DoB:{moment(props?.props?.startDate).format('DD/MM/YY')}</div>
          <div id="p-tag-for-userdashboard">aadhaar:{props?.props?.aadhaar}</div>
          {/* Add more user data fields as needed */}
        </div>
        <div id="user-image">
          {userImage && <img src={userImage} alt={""} style={{ width: '100%', maxWidth: '300px', objectFit: 'cover', borderRadius: '135px' }} />}
        </div>
        <div id="buttons">
          <button>Update Profile</button>
          <button onClick={()=>{navigate("/vieworders ")}}>View Orders</button>
          <button onClick={()=>{navigate("/addevent")}}>Addevent</button>
          <button onClick={()=>{navigate("/viewevent")}}>Viewevent</button>
        </div>
      </div>
    </>
  )
}

export default VendorDeshboard
