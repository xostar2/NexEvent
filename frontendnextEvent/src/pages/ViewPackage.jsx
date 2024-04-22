import React from 'react'
import "../styles/ViewPackage.css"

const ViewPackage = ({ title, description, amount, ownerName, thumbnail ,vendorid,createdAt,eventid}) => {
  return (
    <>
        {/* <div className="background-image">
     
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" />
    </div> */}
    <div className="package-container-viewpackage" >
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Package Thumbnail" className='package-thumbnail-viewpackage' />
      <div className="package-title-viewpackage">
        <label className="title-viewpackage">title:{title}</label>

      </div>
      <div className="package-description-viewpackage">
        <label className="description-viewpackage">description:{description}</label>
        
      </div>
      <div className="package-ownerdetails-viewpackage">
        <label className="owner-details-viewpackage">owner:{ownerName}</label>
        
      </div>
      <div className="package-amount-viewpackage">
        <label className="amount-viewpackage">amount:{amount}</label>
        
      </div>
      <div className="package-createddate-viewpackage">
        <label className="created-date-viewpackage">createdDate:{createdAt}</label>
        
      </div>
      <div className="package-eventid-viewpackage">
        <label className="eventid-viewpackage">eventid:{eventid}</label>
        
      </div>
      <div className="package-vendorid-viewpackage">
        <label className="vendorid-viewpackage">vendorid:{vendorid}</label>
        
      </div>
    



    </div>
    </>
  )
}

export default ViewPackage
