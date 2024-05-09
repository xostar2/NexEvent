import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import "../styles/OrderDetails.css"
const OrderDetails = () => {
  return (
    <>
    <BackgroundImage    />
    <div className="form-container">
      <form className="form-order-details">
        <div className="form-group-order-details">
          <label htmlFor="email">Localtion</label>
          <input type="text" id="email" name="email" required="" placeholder='email'/>
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
        <button className="form-submit-btn" type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default OrderDetails
