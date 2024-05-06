import React from 'react';
import logonexevent from "../assets/logonexevent.png";
import { NavLink } from 'react-router-dom';
import "../styles/NavBar.css"; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/UserContext';

const NavBar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const { userType, setUserType,isLogin } = useContext(AppContext);
  
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

            { !isLogin ? 
            <>            <li>
              
            <NavLink to="/loginuser" >
              Login
            </NavLink>
            
          </li>
          <li>
            <NavLink to="/signup" >
              SignUp
            </NavLink>
          </li>
            
          </>

            :
            
            <li>
              <NavLink to={
                {
                  pathname: "/logout",
                  state: { userType: {userType} }
                }
              } onClick={()=>{
                
              }}>
                Logout
              </NavLink>
            </li>
            
            }
            
            
          </ul>
        </nav>
     

   </>
      
    
  );
};

export default NavBar;


