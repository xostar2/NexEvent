import React, { useState } from "react";
import { Link } from "react-router-dom";
const UserLogin = () => {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  return (
    <section>
      <main>

        <div className="login-form-data">
          <div className="container-grid-grid-two-cols">
            <div className="login-form-img">
              <img src="/images/login.png" alt="login User" />
            </div>
            <h1 className="main-heading mb-3">User Login</h1>
              <br />
            <form>
            <div className="username" id="username">
            <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    required
                    autoComplete="off"
                    // value={user.username}
                    // onChange={handle_namechange}
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
      </main>
    </section>
  )
}

export default UserLogin
