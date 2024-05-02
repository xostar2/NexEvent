import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react'
import '../styles/ContactUs.css'
import BackgroundImage from '../components/BackgroundImage'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');


  const onNameChange = (event) => {
    setName(event.target.value);
  }

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, message });
    // Add your API call or email sending logic here
  }
  return (
    <>
    <BackgroundImage/>   
     <div className="container">
    <h1>Contact Us</h1>
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={onNameChange} placeholder='Your Name' />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={onEmailChange}placeholder='Your Email' />
      <br />
      <label>Message:</label>
      <textarea value={message} onChange={onMessageChange} placeholder='Your Message' />
      <br />
      <button type="submit">Send</button>
    </form>
  </div>
  </>

  )
}

export default ContactUs
