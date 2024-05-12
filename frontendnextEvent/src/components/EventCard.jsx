import React, { useEffect } from "react";
import { useState } from "react";
import "../styles/EventCard.css"; // Assuming your CSS file is named EventCard.css
import { useContext } from "react";
import { AppContext } from "../context/UserContext";
const userImage = 'https://source.unsplash.com/random/300x300'
const EventCard = ({ props }) => {

  const [EventData, setEventData] = useState();
  const {venderdetails} = useContext(AppContext);


  useEffect(() => {
    console.log("this is props in EventCard", props);
      setEventData(props);
      console.log("this is vendordata data in EventCard", venderdetails);
  }, [props]);

 
  return (
    <>
      <article className="card-event-card">
  <div className="card-img-event-card">
    <img   src={EventData?.thumbnail||userImage} alt="event-card-image" style={{ width: '100%', maxWidth: '15rem', objectFit: 'cover', borderRadius: '10px' ,height:'101%'}} />
  </div>

  <div className="project-info-event-card">
    <div className="flex-event-card">
      <div className="project-title-event-card">{EventData?.eventName}</div>
      <span className="tag-event-card">{EventData?.companyName}</span>
    </div>
    <span className="lighter-event-card"
      >{EventData?.description}</span>
      <button className="btn-event-card" onClick={()=>{
        window.location.href="/viewpackage"
      }}>View Packages</button>
  </div>
  
</article>

    </>
  );
};

export default EventCard;
