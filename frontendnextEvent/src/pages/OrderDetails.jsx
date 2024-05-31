import React, { useEffect, useState } from 'react';
import BackgroundImage from '../components/BackgroundImage';
import "../styles/OrderDetails.css";
import { useLocation } from 'react-router-dom';
import axiosInstance from './axiosInstance';
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const OrderDetails = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    userId: "",
    vendorId: "",
    packageId: "",
    description: "",
    locations: "",
    eventDate: "",
    amount: "",
    packageName: "",
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleVendorId = () => {
    setOrder((prevOrder) => ({
      ...prevOrder,
      vendorId: location.state.vendor?._id,
      packageId: location.state.packages?._id,
      userId: user,
      amount: location.state.packages?.amount,
      packageName: location.state.packages?.title,
    }));
  };

  const fetchUserDetails = async () => {
    try {
      const response = await axiosInstance.get(`http://localhost:8000/api/v1/users/getuserprofile`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        setUser(response.data.data?._id);
        return response.data.data;
      }
    } catch (error) {
      console.log("Error in fetching user details:", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    handleVendorId();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (order.locations === "" || order.eventDate === "" || order.description === "") {
      alert("Please fill all the required fields");
      return;
    }

    axiosInstance.post(`http://localhost:8000/api/v1/orders/addorder`, order, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setOpen(true);
          setTimeout(() => {
            navigate("/userhomepage");
          }, 2000); // Redirect after 2 seconds
        }
      })
      .catch((error) => {
        console.log("Error in handleSubmit:", error);
      });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <BackgroundImage />
      <div className="form-container">
        <h1>Order Details</h1>
        <form className="form-order-details" onSubmit={handleSubmit}>
          <div className="form-group-order-details">
            <label htmlFor="Location">Location</label>
            <input type="text" id="Location" name="locations" required placeholder='Location'
              value={order.locations}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-order-details">
            <label htmlFor="eventDate">Event Date</label>
            <input
              type="date"
              id="eventDate"
              name="eventDate"
              required
              placeholder='Event date'
              value={order.eventDate}
              onChange={handleChange}
            />
          </div>
          <div className="form-group-order-details">
            <label htmlFor="textarea">Description</label>
            <textarea name="description" value={order.description} onChange={handleChange} id="textarea" rows="10" cols="50" required placeholder='Description'></textarea>
          </div>
          <div className="form-group-order-details-button">
            <button className="form-submit-btn" type="submit">Submit</button>
          </div>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Order placed successfully!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default OrderDetails;
