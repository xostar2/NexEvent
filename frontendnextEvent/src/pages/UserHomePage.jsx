import React, { useEffect } from 'react';
import BackgroundImage from '../components/BackgroundImage'; // Or your combined component
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard'; // Or your combined component
import { AppContext } from '../context/UserContext';
import { useContext,useCallback,useState } from 'react';
import UserDashboard from '../components/UserDashboard';
const UserHomePage = () => {
  const { userdetails , setUserdetails,userType,setUserType } = useContext(AppContext);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        window.location.href = "/loginuser";
    } 
    else {
      console.log("token is in localstorage",token);
      console.log("userdetails is",userdetails);
    }
  },  []);

  return (

    <div className="user-home-page">
      <BackgroundImage />
      <UserDashboard  />
      
      <div className="content-container-user-home-page">
        

        <SearchBar />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          dolores, possimus pariatur animi temporibus nesciunt praesentium 
        </p>
        {/* <p>{userdetails}</p> */}
        <h2>{userType}</h2>       
        {/* <EventCard /> Or multiple EventCard components */}
      </div>
    </div>
  );
};

export default UserHomePage;
