import React from 'react';
import logonexevent from "../assets/logonexevent.png";
import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';


const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  
  return (
   <>
   
        <nav >
          <Link to="/" className="NavBar-title">
            NexEvent
          </Link>
          <div className="menu" onClick={()=>{
            setIsOpen(!isOpen);
          }}>
            <span></span>
            <span></span>
            <span></span>
           

          </div>
          <ul className={isOpen ? "open" : ""}>
            <li>
              <NavLink to="/" >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" >
                Contact
              </NavLink>
            </li>
            <li>
              
              <NavLink to="/loginuser" >
                Login
              </NavLink>
              
            </li>
            <li>
              <NavLink to="/signup" >
                SignUp
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
     

   </>
      
    
  );
};

export default NavBar;


