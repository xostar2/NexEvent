import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/UserLogin.css'
const UserLogin = () => {

  const [user,setUser]= useState({
    email:"",
    password:"",

  });

  const handleInput=(e)=>{
     let name=e.target.name 
     let value=e.target.value

     setUser({
      ...user,
      [name]:value,
     })
  }
  
  const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(user);
  }
  return (
    <section>
      <main>

        <div className="login-form-data">
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
                    // value={user.password}
                    // onChange={handle_namechange}
                  />

            </div>
            

            <div>
            <button type="submit" className="btn btn-submit" id="btn btn-submit">
                   Login
                </button>
                <span>Register before login </span>
                <Link to="/UserSignUp">SignUp</Link>
            </div>
            </form>  
            </div>

          </div>
        </div>
      </main>
    </section>
  )
}

export default UserLogin
