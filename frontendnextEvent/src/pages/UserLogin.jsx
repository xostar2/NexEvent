import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppProvider,AppContext } from "../context/UserContext";
const URL = "http://localhost:8000/api/v1/users/userlogin";

const UserLogin = () => {
  const navigate = useNavigate();
  const {handleUserLogin,handleUserLogout}=useContext(AppContext);  
  const [user, setUser] = useState({
    email: "",
    password: "",
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
     console.log(user);
    // console.log(password);
    try {
      const formData = user
      
      console.log(formData);
      const response = await axios.post(URL, formData, {
        "Content-Type": "application/json",
      });
      console.log(response);

      if (response.status === 200) {
        console.log("user login successfully");
        handleUserLogin(response.data);
        navigate("/");
      } else {
        // Handle unexpected response status
        console.error("Unexpected response status:", response.status);
      }
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
                <button className="button" type="submit">
                  <span className="button-content">Login </span>
                </button>
                <span>Register before login </span>
                <Link to="/UserSignUp" className="signup-link">
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
