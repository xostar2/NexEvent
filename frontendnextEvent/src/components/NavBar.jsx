import React from 'react';
import logonexevent from "../assets/logonexevent.png";
import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css"; 
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (


   <>
     <div className="container-nav-bar">
        <div className="logo-brand-nav-bar">
          <NavLink to="/">
            {/* <div className="company-name-next-event"><h2>NexEvent</h2></div> */}
            <img src="./src/assets/logonexevent.png" alt="NexEvent Logo" /> NexEvent
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
              
              <NavLink to="/loginuser" className="active">
                Login
              </NavLink>
              
            </li>
            <li>
              <NavLink to="/signupuser" className="active">
                SignUp
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
   </>
      
    
  );
};

export default NavBar;


