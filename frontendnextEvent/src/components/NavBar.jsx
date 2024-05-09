import React, { useEffect } from "react";
import logonexevent from "../assets/logonexevent.png";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/UserContext";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    userType,
    setUserType,
    isLogin,
    userdetails,
    eventdetails,
    packagesdetails,
    vendordetails,
    handleUserLogin,
    handleUserLogout,
    handleUserUpdate,
    handleEventCreate,
    handleEventUpdate,
    handleEventDelete,
    handlePackageCreate,
    handlePackageUpdate,
    handlePackageDelete,
    handleVendorLogin,
    handleVendorLogout,
    handleVendorUpdate,
    handleVendorDelete,
    admindetails,
  } = useContext(AppContext);

  useEffect(() => {
    const setLogout = async () => {
      if (isLogin) {
        if (userType === "user") {
          try {
            const response = await axios.post(
              "http://localhost:8000/api/v1/users/userlogout",
              null,
              { withCredentials: true }
            );
            console.log("this is response data", response.data.data);
            handleUserLogout();
            window.location.href("/loginuser");
          } catch (error) {
            console.log("error while logout in frontend", error.message);
          }
        } else if (userType === "vendor") {
          try {
            const response = await axios.post(
              "http://localhost:8000/api/v1/vendors/vendorlogout",
              null,
              { withCredentials: true }
            );
            console.log("this is response data", response.data.data);
            handleVendorLogout();
            window.location.href("/loginuser");
          } catch (error) {
            console.log("error while logout in frontend", error.message);
          }
        }
      }
    };
  }, [isLogin, userType, handleUserLogout, handleVendorLogout]);
  return (
    <>
      <nav>
        <Link to="/" className="NavBar-title">
          NexEvent
        </Link>
        <div
          className="menu"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>

          {!isLogin ? (
            <>
              {" "}
              <li>
                <NavLink to="/loginuser">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup">SignUp</NavLink>
              </li>
            </>
          ) : (
            <li>
              <NavLink
                to={{
                  pathname: "/logout",
                  state: { userType: { userType } },
                }}
                onClick={() => {
                  console.log("clicked logout");
                  setLogout();
                }}
              >
                Logout
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
