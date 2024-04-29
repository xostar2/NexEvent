import React, { useState ,useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AddEvent.css"
import {AppContext} from "../context/UserContext";
import { useContext } from "react";
import BackgroundImage from "../components/BackgroundImage";
const URL="http://localhost:8000/api/v1/events/addevent"

const eventTypes = [
  "Conferences",
  "Seminars",
  "Workshops",
  "Team Building Events",
  "Trade Shows",
  "Business Dinners",
  "Networking Events",
  "Product Launches",
  "VIP Events",
  "Award Ceremonies",
  "Office Parties",
  "Weddings",
  "Birthday Parties",
  "Anniversary Celebrations",
  "Baby Showers",
  "Engagement Parties",
  "Family Reunions",
  "Graduation Parties",
  "Holiday Parties",
  "Concerts",
  "Festivals",
  "Sporting Events",
  "Charity Events",
  "Community Events",
  "Political Rallies",
  "Public Demonstrations",
  "Movie Premieres",
  "Fashion Shows",
  "Celebrity Parties",
  "Entertainment and Award Nights",
  "Brand Promotions",
  "Sales Promotions",
  "Retail Promotions",
  "Roadshows",
  "Academic Conferences",
  "Alumni Events",
  "Lectures and Talks",
];

const AddEvent = () => {
  const navigate = useNavigate();
  const {handleEventCreate,handleEventUpdate,handleEventDelete,user}=useContext(AppContext);
  console.log(user);
  if(user===null){
    console.log("Please login to add event");

    useEffect(()=>{
      //navigate("/");
    },
    [])
  }
  const [eventData, setEventData] = useState({
    eventName: "",
    createDate: new Date(),
    thumbnail: null,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };
  const handleImageChange = (e) => {
    setEventData({ ...eventData, thumbnail: e.target.files[0] });
  };

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(eventData);
      const formData = new FormData();
      formData.append("eventName", eventData.eventName);
      formData.append("thumbnail", eventData.thumbnail);
      formData.append("description", eventData.description);
      formData.append("createDate", eventData.createDate);  
      const response = await axios.post(URL, formData, {
        "Content-Type": "multipart/form-data",
      });
     
      if(response.status===200){
      handleEventCreate(response.data);
      useEffect(()=>{   
      navigate("/vendorhomepage")
      },
      [])
      }
    } catch (error) {
      
      alert("event not created :",error?.response?.data?.message || " ");
      console.log("event not created :",error?.response?.data?.message || " ");
    }

    
  };

  return (
    <>
    <BackgroundImage/>
        <div className="add-event-container">
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group-event-name">
          <label htmlFor="eventName">Event Name:</label>
          <select
            name="eventName"
            id="eventName"
            value={eventData.eventName}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Event Type --</option>
            {eventTypes.map((eventType) => (
              <option key={eventType} value={eventType}>
                {eventType}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group-thumbnail">
          <label htmlFor="thumbnail">Event Thumbnail URL:</label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            accept="image/*"
            //value={eventData.thumbnail}
            onChange={handleImageChange}
            required
          />
        </div>
        <div className="form-group-description">
          <label htmlFor="description">Event Description:</label>
          <textarea
            name="description"
            id="description"
            value={eventData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        {/* <div className="form-group">
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="time"
            name="startTime"
            id="startTime"
            value={eventData.startTime}
            onChange={handleChange}
          />
        </div> */}
        <button className="button" type="submit">
                  <span className="button-content">Add Event </span>
                </button>
      </form>
    </div>
    </>

  );
};

export default AddEvent;
