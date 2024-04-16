import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/AddEvent.css"

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
  const [eventData, setEventData] = useState({
    eventName: "",
    createDate: new Date(),
    thumbnail: "",
    packageList: [],
    description: "",
    // Omit rating and owner for simplicity (populate server-side)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handlePackageSelect = (e) => {
    // Implement logic to handle package selection (if applicable)
    // Update eventData.packageList accordingly
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/events", eventData);
      console.log("Event created successfully:", response.data);
      navigate("/events"); // Redirect to events list page
    } catch (error) {
      console.error("Error creating event:", error);
      // Handle errors appropriately (display error message to user)
    }
  };

  return (
    <div className="add-event-container">
      <h1>Add Event</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
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
        <div className="form-group">
          <label htmlFor="thumbnail">Event Thumbnail URL:</label>
          <input
            type="file"
            name="thumbnail"
            id="thumbnail"
            accept="thumbnail/*"
            value={eventData.thumbnail}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Event Description:</label>
          <textarea
            name="description"
            id="description"
            value={eventData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="startTime">Start Time:</label>
          <input
            type="time"
            name="startTime"
            id="startTime"
            value={eventData.startTime}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
