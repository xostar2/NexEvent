import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VendorSignUp.css";
import { AiOutlinePlus } from "react-icons/ai"; 
import BackgroundImage from '../components/BackgroundImage'; // Or your combined component
import axios from "axios";
const genderselect=["Male","Female","Divided"]
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
           "Dharmashala", "Patiala", "Bhatinda", "Kargil", "Leh", "Dehradun", "Nainital", 
           "Rishikesh", "Haridwar", "Lucknow", "Allahabad", "Varanasi", "Kanpur", "Aligarh",
            "Jhansi", "Ghaziabad", "Agra", "Moradabad", "Gorakhpur", "Satna", "Faizabad", 
            "Chandrapur", "Darbhanga", "Durgapur", "Kharagpur", "Imphal", "Itanagar", "Konark",
             "Rayagad", "Bilaspur", "Raigarh", "Kothagudem", "Chirala", "Sivakasi", "Tirunelveli",
              "Tiruppur", "Alappey", "Aluva", "Alappuzha", "Kollam", "Malappuram", "Thrissur", "Bhadravathi",
               "Shimoga", "Dhavangere", "Bijar", "Bijapur", "Yadgir", "Raichur", "Kalburgi", "Bagalkot", 
               "Belgaun", "Balharshah", "Wardha", "Tuljapur", "Latur", "Port Blair", "Kawaratti", "Daman",
                "Silvassa", "Panaji", "Vasco", "Anand", "Kolhapur", "Vadodara", "Junagadh", "Bhuj", "Jabalpur", 
                "Mathura", "Meerut", "Roorkee", "Bareily", "Raebareily", "Bokaro", "Pilani", "Bhiwani", "Karnal",
                 "Ambala", "Panipat", "Kurukshetra", "Sonipat", "Hissar", "Rohtak", 
"Panchkula", "Anantnag", "Mandi", "Baramulla", "Kargil"]


const VendorSignUp = () => {

  const [gender,setgender]= useState("");
  const [cityName, setCityName] = useState("");
  const handleGenderChange = (e) => {
    setgender(e.target.value);
  }
  const handleCityChange = (e) => {
    setCityName(e.target.value);
  }


  return (

    <>
    <BackgroundImage />
      <form className="signup-form-vendor">
        <p className="form-title-sign-up-vendor">Sign in to your account</p>
        <div className="input-container-vendr">
          <input type="email" placeholder="Enter email" />
          <span></span>
        </div>
        <div className="input-container-vendr">
          <input type="text" placeholder="Enter Vendor Name" />
        </div>
        <div className="input-container-vendr">
          <input type="text" placeholder="Enter Company Name" />
        </div>
        <div className="input-container-vendr">
            <select 
            name="gender" 
            id="gendertype"
            placeholder="Select Gender"
            value={gender}
            onChange={handleGenderChange}
            required
            >
              <option value="">--select--gender--</option>{
                genderselect.map((genderselect)=>{
                  <option key={genderselect} value={genderselect}>
                    {genderselect}
                  </option>
                })
              }
            </select>
        </div>
        <div className="input-container-vendr">
          <input type="text" placeholder="Enter Phone Number" />
        </div>
        <div className="input-container-vendr">
          <input type="text" placeholder="Enter Aaddhar" />
        </div>
        <div className="input-container-vendr">
          <input type="password" placeholder="Enter password" />
        </div>
        <div className="input-container-vendr">
          <input type="text" placeholder="Enter Registration No" />
        </div>
        <div className="input-container-vendr">
        <select
          name="cityName"
          placeholder="Others"
          value={cityName} 
          onChange={handleCityChange}
          required
        >
        <option value="">-- Select--City--Name --</option>
        {cityTypes.map((cityTypes)=>
          <option key={cityTypes} value={cityTypes}>
            {cityTypes}
          </option>
        )}
        </select>
       
        </div>
        
        <button type="submit" className="submit-button-sign-up-vendor">
          Sign in
        </button>

        <p className="signup-link">
          No account?
          <a href="">Sign up</a>
        </p>
      </form>
    </>
  );
};

export default VendorSignUp;
