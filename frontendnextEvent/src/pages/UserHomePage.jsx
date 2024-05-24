import  { useEffect } from 'react';
import BackgroundImage from '../components/BackgroundImage'; // Or your combined component
import SearchBar from '../components/SearchBar';
import EventCard from '../components/EventCard'; // Or your combined component
import { AppContext } from '../context/UserContext';
import { useContext,useCallback } from 'react';
import UserDashboard from '../components/UserDashboard';
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Importing Search Icon
import "../styles/SearchBar.css"
import EventUserCard from '../components/EventUserCard';
import "../styles/UserHomePage.css"
import axiosInstance from './axiosInstance';


//============================================================================================================
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
const cityTypes = ["Hyderabad", "New Delhi", "Mumbai",
 "Chennai", "Kolkata", "Bengaluru", "Secunderabad", "Ahmadabad"
 , "Surat", "Pune", "Noida", "Visakhapatnam", "Vijayawada",
  "Kota", "Jaipur", "Udaipur", "Jaisalmer", "Jodhpuer", "Ajmer",
   "Raigad", "Tirupati", "Tiruttani", "Anantapur", "Guntur", 
   "Kurnool", "Cuddapah", "Chittor", "Hindupur", "Mahboobnagar",
    "Nizamabad", "Nandyal", "Warangal", "Adilabad", "Ramagundam", 
    "Khammam", "Karimnagar", "Nalgonda", "Vijayanagaram", "Srikakulam",
     "Kakinada", "Rajamandry", "Machilipatnam", "Amaravathi", "Ongole", "Nellore",
      "Eluru", "Bhimavaram", "Proddutur", "Narasaraopet", "Tenali", "Madurai",
       "Kancheepuram", "Coimbatore", "Vellore", "Pondicherry", 
       "Trichy", "Salem", "Tumkur", "Dharwad", "Hubli", "Mysuru", 
       "Mangaluru", "Bellary", "Hassan", "Mandya", "Raipur", "Jagdalpur", 
       "Puri", "Cuttack", "Bubhaneshwar", "Brahmapur", "Paradeep", "Howrah", 
       "Asansol", "Siliguri", "Darjeeling", "Guwahati", "Aizawl", "Itanagar", 
       "Agartala", "Shillong", "Dibrugarh", "Kohima", "Gangtok", "Dispur", "Patna",
        "Muzaffarpur", "Muzaffarnagar", "Gaya", "Jamshedpur", "Ranchi", "Bhilai", "Dhanbad",
         "Tiruvananthapuram", "Kochi", "Kozicode", "Kottayam", "Rameshwaram", "Udipi", 
         "Manipal", "Nanded", "Solapur", "Nasik", "Kalyan", "Aurangabad", "Thane", "Nagpur",
          "Rajkot", "Gandhinagar", "Jhamnagar", "Bhopal", "Itarsi", "Gwalior", "Indore", 
          "Bikaner", "Jammu", "Srinagar", "Jallandhar", "Chandigarh", "Ludhiana", "Amritsar",
           "Pathankot", "Mohali", "Shimla", "Manali", "Kullu", "Faridabad", "Gurugram", 
           "Dharmashala", "Patiala", "Bhatinda", "Leh", "Dehradun", "Nainital", 
           "Rishikesh", "Haridwar", "Lucknow", "Allahabad", "Varanasi", "Kanpur", "Aligarh",
            "Jhansi", "Ghaziabad", "Agra", "Moradabad", "Gorakhpur", "Satna", "Faizabad", 
            "Chandrapur", "Darbhanga", "Durgapur", "Kharagpur", "Imphal", "Konark",
             "Rayagad", "Bilaspur", "Raigarh", "Kothagudem", "Chirala", "Sivakasi", "Tirunelveli",
              "Tiruppur", "Alappey", "Aluva", "Alappuzha", "Kollam", "Malappuram", "Thrissur", "Bhadravathi",
               "Shimoga", "Dhavangere", "Bijar", "Bijapur", "Yadgir", "Raichur", "Kalburgi", "Bagalkot", 
               "Belgaun", "Balharshah", "Wardha", "Tuljapur", "Latur", "Port Blair", "Kawaratti", "Daman",
                "Silvassa", "Panaji", "Vasco", "Anand", "Kolhapur", "Vadodara", "Junagadh", "Bhuj", "Jabalpur", 
                "Mathura", "Meerut", "Roorkee", "Bareily", "Raebareily", "Bokaro", "Pilani", "Bhiwani", "Karnal",
                 "Ambala", "Panipat", "Kurukshetra", "Sonipat", "Hissar", "Rohtak", 
"Panchkula", "Anantnag", "Mandi", "Baramulla", "Kargil"]








const UserHomePage = () => {
  const { userdetails , setUserdetails,userType,setUserType } = useContext(AppContext);
  const [event,setevent]=useState({});
  const [isLoading, setIsLoading] = useState(false); // State for loading indicator
  const [error, setError] = useState(null); 
  const [searchdetails, setsearchdetails] = useState(
    {
      eventName:"",
      city:"",
    }
  );

  const handleSubmit = async(event) => {
    
    event.preventDefault(); // Prevent default form submission behavior
    setIsLoading(true);
    
    try {
        console.log("we entered here");
        console.log(searchdetails);
        const response=await axiosInstance.post(`http://localhost:8000/api/v1/events/getuserevent`,
        searchdetails,
        {
            headers:{
                "Content-Type": "application/json",
                "Authorization":`Bearer ${localStorage.getItem("token")}`
            }
        })
        console.log("we closed here");
        setevent(response.data.data);
        console.log("this is event::::::::::::::::::",response.data.data);

      
    } catch (error) {
      console.log(error);
      console.log("error is this :",error.message);
      setError(error.message);
    }finally{
      setIsLoading(false);
    }
    
  };
  
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
    <>
    <div className="user-home-page">
      <BackgroundImage />
      <UserDashboard  />
      
      <div className="content-container-user-home-page">
        <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <select
          name="eventName"
          id='eventName'
          value={searchdetails.eventName}
          onChange={(e)=>{
            setsearchdetails({ ...searchdetails, eventName: e.target.value });
          }}
          required
        >
          <option value="">-- Select--Event--Name --</option>
        {eventTypes.map((eventTypes)=>
          <option key={eventTypes} value={eventTypes}>
            {eventTypes}
          </option>
        )}
        </select>
        <select
          name="city"
          id="city"
          value={searchdetails.city}
          
          onChange={(e)=>{
            setsearchdetails({ ...searchdetails, city: e.target.value });
          }}
          required
        >
        <option value="">-- Select--City--Name --</option>
        {cityTypes.map((cityTypes)=>
          <option key={cityTypes} value={cityTypes}>
            {cityTypes}
          </option>
        )}
        </select>
       
        <button type="submit">
          <AiOutlineSearch className="search-icon" />
        </button>
      </div>
        </form>  
      </div>
      {isLoading && (
          <div className="loading-indicator">Loading events...</div>
        )}
        {error && ( // Handle API errors gracefully, e.g., display message
          <div className="error-message">Failed to load events: {error.message}</div>
        )}
        {event.length > 0 && ( // Conditionally render event cards
          <div className="event-card-container">
            {event.map((eventObject) => (
              <EventUserCard key={eventObject._id} event={eventObject} /> // Assuming ID for event
            ))}
          </div>
        )}
    
    </div>
    </>
  );
};

export default UserHomePage;
