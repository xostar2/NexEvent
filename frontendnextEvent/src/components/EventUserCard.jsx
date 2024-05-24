import React, { useEffect } from 'react'
import './EventUserCard.css'
import moment from 'moment'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const userImage = 'https://source.unsplash.com/random/300x300'



const EventUserCard = (props) => {
  const navigate=useNavigate()
  const [vendorDetails, setVendorDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
 const  fetchVendor = async ()=>{
  try {
    setIsLoading(true)
    setError(null)
    const ownerId = props.event.owner;
    const res = await axios.get(`http://localhost:8000/api/v1/vendors/getvendordetails/${ownerId}`
      ,{
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      }
    )
      if(res.status === 200){
        console.log("res is vendor:::::::::::::",res.data.data)
        setVendorDetails(res.data.data.vendorName)
      }
  } catch (error) {
    console.log(error.message)
    setError(error.message)
    
  }finally{
    setIsLoading(false)
  } 
      
      
 }


  useEffect(() => {
    console.log("props is::::::::::::::::::",props);
    console.log("event name is ",props.event);
    fetchVendor();
    console.log("vendorDetails is",vendorDetails);  
  }, [])

  return (
    <>
    <div className="card">
  <div className="card-image">{userImage||props.event.thumbnail}</div>
  <p className="card-title">{props.event.eventName}</p>
  <p className="card-body">
    {props.event.description}
  </p>
  <p className="footer">Written by <span className="by-name">{vendorDetails}</span> on <span className="date">{moment(props.event.createdAt).format('MMMM Do YYYY')}</span></p>
    <div className="card-button-container">
   <button className="card-button" onClick={()=>{
    navigate("/eventhomepageuser",{state:{event:props.event}})
   }}>
          View Event
  </button>
  </div>
</div>
        
    </>
  )
}

export default EventUserCard
