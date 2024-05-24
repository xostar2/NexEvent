import React, { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import "../styles/UserLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/UserContext";    
import BackgroundImage from "../components/BackgroundImage";
import Cookies from 'js-cookie'

import axiosInstance from "./axiosInstance.js";

//====================================================================================================================
const URL = "http://localhost:8000/api/v1/users/userlogin";
const URL1="http://localhost:8000/api/v1/vendors/vendorlogin";
const URL2="http://localhost:8000/api/v1/admins/adminlogin";

//====================================================================================================================

const UserLogin = () => {
  const navigate = useNavigate();
  
  const {handleUserLogin,setUserDetails,handleUserLogout,handleUserUpdated,userdetails,handleVendorLogin,handleVendorLogout,handleVendorUpdated,vendordetails,setVendorDetails}=useContext(AppContext);
  
  const [user, setUser] = useState({
    email: "",
    password: "",
    userType:"user",
  });

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(user.email);
    console.log(user.password);
    console.log(user.userType);

    try {
      
      
      if(user.userType==="user"){
        const response = await axiosInstance.post(URL, user, {
          
          "Content-Type": "application/json",
        });

        
        if (response.status === 200) {
          console.log("this is access token",response.data.data);
          setUserDetails(response.data.data);
          handleUserLogin(response.data.data.accessToken);
          console.log("user login successfully");
          navigate("/userhomepage");
          
        } else {
          alert("please login first",response.data.data.message);
          console.error("Unexpected response status:", response);
        }
      
 
      }
      if(user.userType==="vendor"){
          
          const response = await axiosInstance.post(URL1, user, {
            "Content-Type": "application/json",
          });
          console.log(response);

          
          if (response.status === 200) {
              
            console.log(response.data.data);
            setVendorDetails(response.data.data);
            handleVendorLogin(response.data.data.accessToken);
            
            console.log("vendor login successfully");
            if(response.data.data.accessToken){
            navigate("/vendorhomepage");
            }
           else{
             alert("please login first");
             navigate("/loginuser");
           }
            
            
            
          } else {
           
            console.error("Unexpected response status:", response);
            navigate("/userlogin");
          }
        
  
        }
        if(user.userType==="admin"){
          formData.userType="admin"
          const response = await axios.post(
            URL2, 
            formData, 
            {
            "Content-Type": "application/json",
            },
            withCredentials =true,
        );
          console.log(response);
          if (response.status === 200) {
           
            console.log("user login successfully");
            
            const res_data= await response.data;
            navigate("/");
            
            
          } else {
           
            console.error("Unexpected response status:", response.status);
          }
        
  
        }
        
       
      
      
    } catch (error) {
      //alert(error);
      console.log(error);
      if (error.response) {
        
        console.error("Server Error:", error.response.data.message);
        alert(error.response.data.message);
     
      } else if (error.request) {
       
        console.error("No Response from Server:", error.request);
      
      } else {
     
        console.error("Request Error:", error.message);
     
      }
    }
  };
//====================================================================================================================
  return (
    
    <>
    <BackgroundImage/>
      <div className="login-form-user-border">
          <div className="user-login-form-login">
            <h1 className="main-heading mb-3-login">Login Here</h1>
            <br />

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  
                  placeholder="enter your email"
                  id="email"
                  required
                  autoComplete="off"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter your password"
                  id="password"
                  required
                  autoComplete="off"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="userType">User Type</label>
                <select
                  id="userType"
                  name="userType"
                  value={user.userType}
                  onChange={handleInput}
                >
                  <option value="user">User</option>
                  <option value="vendor">Vendor</option>
                  <option value="admin">Admin</option>
                </select>
                
              </div>

              <div className="form-group">
                <button className="button1" type="submit">
                  <span className="button-content">Login </span>
                </button>
                </div>
                <span className="signup-link">Register before login </span>
                <Link to="/signup" className="signup-link1">
                  SignUp
                </Link>
              
            </form>
          </div>
        
          </div>
          </>
  );
};

export default UserLogin;
