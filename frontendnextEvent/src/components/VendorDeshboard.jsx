import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/UserContext'
import moment from 'moment';
import { useNavigate } from 'react-router-dom'

const userImage = 'https://source.unsplash.com/random/300x300'
const VendorDeshboard = (props ) => {
    //console.log(props.props.startDate)
   
    const {vendor}=props.props
    console.log(props.props)
    console.log(vendor)
    

    const navigate =useNavigate();
   



  
  return (
    <>
         <div id="user-dashboard">
        <div id="user-data">
          <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>{vendor?.companyName}</h1>
          <div id="p-tag-for-userdashboard">Email:{vendor?.email}</div>
          <div id="p-tag-for-userdashboard">VendorName:{vendor?.vendorName}</div>
          <div id="p-tag-for-userdashboard">Registration No.:{vendor?.registrationNo}</div>
          
          <div id="p-tag-for-userdashboard">phone:{vendor?.phone}</div>
          
          
          
          <div id="p-tag-for-userdashboard">DoB:{moment(vendor?.DOB).format('DD/MM/YY')}</div>
          <div id="p-tag-for-userdashboard">aadhaar:{vendor?.aadhaar}</div>
          {/* Add more user data fields as needed */}
        </div>
        <div id="user-image">
          {userImage && <img src={userImage} alt={""} style={{ width: '100%', maxWidth: '300px', objectFit: 'cover', borderRadius: '135px' }} />}
        </div>
        <div id="buttons">
          <button>Update Profile</button>
          <button onClick={()=>{navigate("/vieworders ")}}>View Orders</button>
          <button onClick={()=>{navigate("/addevent")}}>Addevent</button>

        </div>
      </div>
    </>
  )
}

export default VendorDeshboard
