import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import "../styles/OrderDetails.css"
import { useLocation } from 'react-router-dom'
const OrderDetails = () => {



  return (
    <>
    <BackgroundImage    />
    <div className="form-container">
      <h1 >Order Details</h1>
      <form className="form-order-details">
        <div className="form-group-order-details">
          <label htmlFor="email">Localtion</label>
          <input type="text" id="Location" name="Location" required="" placeholder='Location'/>
        </div>
        <div className="form-group-order-details">
          <label htmlFor="eventdate">Event Date</label>
          <input type="date" id="date" name="date" required="" placeholder='event date'/>
        </div>
        <div className="form-group-order-details">
          <label htmlFor="city">city</label>
          <input type="text" id="city" name="city" required="" placeholder='city'/>
        </div>
        <div className="form-group-order-details">
          <label htmlFor="textarea">Description</label>
          <textarea name="textarea" id="textarea" rows="10" cols="50" required="" placeholder='description'>  
          </textarea>
        </div>
        <div className="form-group-order-details-button">
        <button className="form-submit-btn" type="submit">Submit</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default OrderDetails
