import React from "react";
//import '../components/BackgroundImagePackage'
import "../styles/EventHomePage.css";
import { useNavigate } from "react-router-dom";
const EventHomePage = ({ vendor }) => {
  return (
    <>
      <div className="event-home-page-header">
        <h1>Event Home Page</h1>
        <h2>Birthday Party</h2>
      </div>
      <div className="vendor-profile-box">
    <div className="vendor-profile-header">
      <h2 className="vendor-profile-company-name">radharani sweets</h2>
      <p className="vendor-profile-email"><span className="email-span" id="email-span">rajkishans88@gmail.com</span></p>
    </div>
    <div className="vendor-profile-details">
      <p className="vendor-profile-vendor-name">Vendor Name:rajkishan</p>
      <p className="vendor-profile-vendor-id">Vendor ID:123456</p>
      <p className="vendor-profile-event-id">Event ID: 123456</p>
    </div>
  </div>

      
    </>
  );
};

export default EventHomePage;
