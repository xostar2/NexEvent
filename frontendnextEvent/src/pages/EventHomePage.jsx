import React from 'react'
//import '../components/BackgroundImagePackage'
import "../styles/EventHomePage.css"
import { useNavigate } from 'react-router-dom'
const EventHomePage = ({title}) => {
  
  return (

    <>

<div className="card-event-card">
        <div className="image-event-card"></div>
        <div className="content-event-card">
          
            <span className="title-event-card">
              Rajkishan singh
            </span>
          

          <p className="desc-event-card">
            <span>title:{title}</span>
          </p>
          <p className="desc-event-card">
          <span>title:{title}</span>
          </p>
          <p className="desc-event-card">
          <span>title:{title}</span>
          </p>
          <p className="desc-event-card">
          <span>title:{title}</span>
          </p>
          <p className="desc-event-card">
          <span>title:{title}</span>
          </p>
          <a className="action-event-card"
            href='/addpackage'
          >

            Add New Package
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  

  )
}

export default EventHomePage
