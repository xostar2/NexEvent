import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css"; // Assuming your CSS file is named NavBar.css

const NavBar = () => {
  return (
   
      <div className="container-nav-bar">
        <div className="logo-brand-nav-bar">
          <NavLink to="/">
            <div className="company-name-next-event"><h2>NexEvent</h2></div>
            {/* <img src="your_logo.png" alt="NexEvent Logo" /> Replace with your logo path */}
          </NavLink>
        </div>
        <nav className="nav-links-container-next-event-NavBar">
          <ul>
            <li>
              <NavLink to="/" className="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="active">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/UserLogin" className="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/UserSignup" className="active">
                SignUp
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    
  );
};

export default NavBar;

