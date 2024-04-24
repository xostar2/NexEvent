import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/VendorSignUp.css";
import { AiOutlinePlus } from "react-icons/ai"; 
import BackgroundImage from '../components/BackgroundImage'; 
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
  const [vendor,setvendor]= useState({
    vendorname: "",
    email: "",
    companyname: "",
    phone: "",
    aadhaar: "",
    registrationno: "",
    gender: "",
    password: "",
    avatar: null,
    address:"",
  });

  const handleNameChange = (e) => {
    setvendor({ ...vendor, [e.target.name]: e.target.value });  
  };
  const [gender,setgender]= useState("");
  const [cityName, setCityName] = useState("");
  const handlevalueChange=(e)=>{
    setvendor({...vendor,[e.target.name]:e.target.value});
  }
  const handleGenderChange = (e) => {
    setgender({...vendor,gender: e.target.value});
  }
  const handleCityChange = (e) => {
    setCityName({...vendor,city: e.target.value});  
  }
  const handleImageChange = (e) => {
    setUser({ ...user, avatar: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("username", user.username);
      formData.append("email", user.email);
      formData.append("gender", user.gender);
      formData.append("phone", user.phone);
      formData.append("DOB", user.DOB.toISOString());
      formData.append("aadhar", user.aadhar);
      formData.append("address", user.address);
      formData.append("password", user.password);
      formData.append("avatar", user.avatar);

      // Make POST request using Axios
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/userregister",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);

      if (response.status === 200) {
        navigate("/");
      }

      // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.log(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Server Error:", error.response.data);
        // Handle server error response, show error message to the user, etc.
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No Response from Server:", error.request);
        // Handle request timeout or network error, show error message to the user, etc.
      } else {
        // Something else happened in making the request that triggered an error
        console.error("Request Error:", error.message);
        // Handle other types of errors, show error message to the user, etc.
      }
    }   
  }


  return (

    <>
    <BackgroundImage />
      <div className="signup-form-vendor-container">
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
           already have an account?
          <Link to="/loginuser"><span className="signup-link-span">Login</span></Link>
        </p>
      </form>
      </div>
    </>
  );
};

export default VendorSignUp;
