import React from 'react';
import BackgroundImage from '../components/BackgroundImage'; // Or your combined component
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard'; // Or your combined component

const UserHomePage = () => {

  return (
    <div className="user-home-page">
      <BackgroundImage />
      
      <div className="content-container-user-home-page">
        <h1>Welcome to your event page</h1>
        <SearchBar />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium 
        </p>
        
        {/* <EventCard /> Or multiple EventCard components */}
      </div>
    </div>
  );
};

export default UserHomePage;
