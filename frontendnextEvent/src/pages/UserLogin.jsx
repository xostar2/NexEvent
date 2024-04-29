import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppProvider, AppContext
          
          } from "../context/UserContext";
const URL = "http://localhost:8000/api/v1/users/userlogin";
const URL1="http://localhost:8000/api/v1/vendors/vendorlogin";
const URL2="http://localhost:8000/api/v1/admins/adminlogin";

const UserLogin = () => {
  const navigate = useNavigate();
  const { 
    handleUserLogout,
    handleUserUpdate,
    handleUserLogin,
    handleAdminLogin,
    handleVendorLogin,
    handleVendorLogout,
    handleVendorUpdate,
    handleVendorDelete,} = useContext(AppContext);
  
  
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

    console.log(email);
    console.log(password);
    console.log(userType);
    try {
      
      console.log(user);
      if(user.userType==="user"){
        const response = await axios.post(URL, user, {
          "Content-Type": "application/json",

        });

        console.log(response.data);
        if (response.status === 200) {
          handleUserLogin(response.data);
          console.log("user login successfully");
          handleUserLogin(response.data);
        
            navigate("/userhomepage");
          
         
          
        } else {
         
          console.error("Unexpected response status:", response.status);
        }
      
 
      }
      if(user.userType==="vendor"){
          
          const response = await axios.post(URL1, user, {
            "Content-Type": "application/json",
          });
          console.log(response.data);
          if (response.status === 200) {
            handleVendorLogin(response.data);
            console.log("user login successfully");
            handleUserLogin(response.data);
            navigate("/eventhomepage");
            
            
          } else {
           
            console.error("Unexpected response status:", response.status);
          }
        
  
        }
        if(user.userType==="admin"){
          formData.userType="admin"
          const response = await axios.post(URL2, formData, {
            "Content-Type": "application/json",
          });
          console.log(response);
          if (response.status === 200) {
            handleAdminLogin(response.data);
            console.log("user login successfully");
            handleUserLogin(response.data);
              navigate("/");
            
            
          } else {
           
            console.error("Unexpected response status:", response.status);
          }
        
  
        }
        
       
      
      
    } catch (error) {
      console.log(error);
      if (error.response) {
        
        console.error("Server Error:", error.response.data);
     
      } else if (error.request) {
       
        console.error("No Response from Server:", error.request);
      
      } else {
     
        console.error("Request Error:", error.message);
     
      }
    }
  };

  return (
    <section>
      <main>
        <div className="container grid grid-two-cols-login">
          <div className="login-form-img-login">
            <img src="/images/login.png" alt="login User" />
          </div>
          <div className="user-login-form-login">
            <h1 className="main-heading mb-3-login">User Login</h1>
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
                <button className="button" type="submit">
                  <span className="button-content">Login </span>
                </button>
                
                <span className="signup-link">Register before login </span>
                <Link to="/signupuser" className="signup-link">
                  SignUp
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default UserLogin;
