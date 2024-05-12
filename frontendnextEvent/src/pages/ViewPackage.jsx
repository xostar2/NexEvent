import React from "react";
import "../styles/ViewPackage.css";
import BackgroundImage from "../components/BackgroundImage";

const ViewPackage = ({
  title,
  description,
  amount,
  ownerName,
  thumbnail,
  vendorid,
  createdAt,
  eventid,
}) => {
  return (
    <>
      {/* <div className="background-image">
     
      <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" />
    </div> */}
    <BackgroundImage/>
      <div className="package-container-viewpackage">
        <div className="package-thumbnail-viewpackage">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Package Thumbnail"
            className="package-thumbnail-viewpackage"
          />
        </div>
        {/* <div className="package-details-grid-viewpackage">
          <div className="package-title-viewpackage">
            <label className="title-viewpackage">title:{title}</label>
          </div>
          <div className="package-description-viewpackage">
            <label className="description-viewpackage">
              description:{description}
            </label>
          </div>
          <div className="package-ownerdetails-viewpackage">
            <label className="owner-details-viewpackage">
              owner:{ownerName}
            </label>
          </div>
          <div className="package-amount-viewpackage">
            <label className="amount-viewpackage">amount:{amount}</label>
          </div>
          <div className="package-createddate-viewpackage">
            <label className="created-date-viewpackage">
              createdDate:{createdAt}
            </label>
          </div>
          <div className="package-eventid-viewpackage">
            <label className="eventid-viewpackage">eventid:{eventid}</label>
          </div>
          <div className="package-vendorid-viewpackage">
            <label className="vendorid-viewpackage">vendorid:{vendorid}</label>
          </div>
        </div> */}
        <div class="product-post-viewpackage">
  <div class="product-post-viewpackage__item">
    <label class="title-viewpackage"><span>title:</span>Test Product</label>
  </div>
  <div class="product-post-viewpackage__item">
    <label class="description-viewpackage">
     <span>description:</span> This is a test product for demonstration purposes only.
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit similique nulla maxime dolores aut nemo atque recusandae, at rem exercitationem amet blanditiis cum laudantium pariatur totam omnis voluptates perferendis.
     <ul>
      <li>
        <label class="product-post-viewpackage__item">
          <span>description:</span> This is a test product for demonstration purposes only.
        </label>
      </li>
      <li>
        <label class="product-post-viewpackage__item">
          <span>description:</span> This is a test product for demonstration purposes only.
        </label>
      </li>
     </ul>
    </label>
  </div>
  <div class="product-post-viewpackage__item">
    <label class="owner-details-viewpackage"><span>owner:</span>John Doe</label>
  </div>
  <div class="product-post-viewpackage__item">
    <label class="amount-viewpackage"><span>amount:</span>$99.99</label>
  </div>
  <div class="product-post-viewpackage__item">
    <label class="created-date-viewpackage"><span>createdDate:</span>2023-03-14</label>
  </div>
  <div class="product-post-viewpackage__item">
    <label class="eventid-viewpackage"><span>eventid:</span>123456</label>
  </div>
  <div class="product-post-viewpackage__item">
    <label class="vendorid-viewpackage"><span>vendorid:</span>ABCDEF</label>
  </div>
</div>
        <div className="package-button-add-package">
          <div className="input-field-add-package">
            <button className="submit-btn-add-package">Book Package</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewPackage;
