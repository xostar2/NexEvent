import React from "react";
import "./UserDashboard.css";
import BackgroundImage from "./BackgroundImage";
import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/UserContext";
import moment from "moment";
import ErrorBoundary from "./ErrorBoundary";
import { useNavigate } from "react-router-dom";
import { Typography, Box, Grid } from "@mui/material";
const userData = {
  name: "John Doe",
  email: "johndoe@example.com",
  company: "Example Corp.",
};

const userImage = "https://source.unsplash.com/random/300x300";
const URL = "http://localhost:8000/api/v1/users/getuserprofile";

//======================================================================================
const UserDashboard = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token"); // Assuming you store the token in localStorage
  console.log("this is token in vendor home page:", token);

  const fetchVendorDetails = async () => {
    try {
      const response = await axios.get(URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(
        "this is response data in user dashboard",
        response.data.data
      );
      setUser(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(
        "this is error in vendor home page while fetching data:",
        error.message
      );
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (!token) {
      window.location.href = "/loginuser";
      throw new Error("Vendor token not found in vendorHomePage");
    }

    fetchVendorDetails();
  }, []);

  return (
    <ErrorBoundary>
      <>
        <div id="user-dashboard">
          <div id="user-data">
            <h1 style={{ textAlign: "center", fontSize: "3rem" }}>
              {" "}
              <span>{user.username}</span>
            </h1>
            <Box>
              
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Email:</Typography>
                  <Typography variant="body1">{user?.email}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Phone:</Typography>
                  <Typography variant="body1">{user?.phone}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Gender:</Typography>
                  <Typography variant="body1">{user?.gender}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">User ID:</Typography>
                  <Typography variant="body1">{user?._id}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Join Date :</Typography>
                  <Typography variant="body1"> {moment(user?.createdAt).format("DD/MM/YY")}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Date of Birth:</Typography>
                  <Typography variant="body1">
                    {moment(user?.DOB).format("DD/MM/YY")}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            {/* Add more user data fields as needed */}
          </div>
          <div id="user-image">
            {userImage && (
              <img
                src={userImage}
                alt={userData.name}
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  objectFit: "cover",
                  borderRadius: "135px",
                }}
              />
            )}
          </div>
          <div id="buttons">
            <button>Update Profile</button>
            <button
              onClick={() => {
                navigate("/userorderlist");
                console.log("this is navigate function in user dashboard:");
              }}
            >
              View Orders
            </button>
          </div>
        </div>
      </>
    </ErrorBoundary>
  );
};

export default UserDashboard;
