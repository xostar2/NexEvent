import React from "react";
import "../styles/EventCard.css"; // Assuming your CSS file is named EventCard.css
const EventCard = () => {
  return (
    <>
      <div className="card-event-card">
        <div className="image-event-card"></div>
        <div className="content-event-card">
          <a href="#">
            <span className="title-event-card">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
          </a>

          <p className="desc-event-card">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
            dolores, possimus pariatur animi temporibus nesciunt praesentium
          </p>

          <a className="action-event-card" href="#">
            Find out more
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default EventCard;
