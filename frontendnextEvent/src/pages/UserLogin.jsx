import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/UserLogin.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:8000/api/v1/users/userlogin";

const UserLogin = () => {
  const navigate = useNavigate();
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
     alert(user);
    console.log(password);
    try {
      const formData=JSON.stringify(user);
     // console.log(formData);
      const response = await axios.post(URL, formData, {
        "Content-Type": "application/json",
      });
      console.log(response);

      if (response.status === 200) {
        
        console.log("user login successfully");
        navigate("/");
      }
      else {
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
        <div className="container grid grid-two-cols">
          <div className="login-form-img">
            <img src="/images/login.png" alt="login User" />
          </div>
          <div className="user-login-form">
            <h1 className="main-heading mb-3">User Login</h1>
            <br />

            <form onSubmit={handleSubmit}>
              <div>
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
              <div className="password" id="password">
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

              <div>
                <button
                  type="submit"
                  className="btn btn-submit"
                  id="btn btn-submit"
                >
                  Login
                </button>
                <span>Register before login </span>
                <Link to="/UserSignUp">SignUp</Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
};

export default UserLogin;
