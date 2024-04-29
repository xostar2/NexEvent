
import React from 'react';
import '../styles/VendorHomePage.css'; // Import the CSS file for styling
import BackgroundImage from '../components/BackgroundImage';

const VendorHomePage = ({ vendorData }) => {
  // Destructure vendor data for cleaner access
  //const { vendorName, companyName, startDate, registrationNumber, vendorId, email, phone, profileImage } = vendorData;

  return (
    <>
    <BackgroundImage />
    <div className="vendor-home-container">
      <div className="vendor-info-box">
        <div className="profile-image-container">
          <img src="/images/about.png" alt="Vendor Profile" className="profile-image" />
        </div>
        <div className="vendor-details">
          <h2>raj kidshan</h2>
          <p>raj kishan</p>
          <ul>
            <li>Start Date: </li>
            <li>Registration Number: xwfefege</li>
            <li>Vendor ID: cerver</li>
            <li>Email: raj@123</li>
            <li>Phone: 145226</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="table-container-user-details">
            <table className="user-table-testing-user-details">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Event ID</th>
                        <th>Event Name</th>
                        <th>Package ID</th>
                        <th>Package Name</th>
                        <th>Status</th>
                        <button className="button">
                            <span className="button-content">approve</span>
                        </button>
                        <button className="button">
                            <span className="button-content">reject</span>
                        </button>
                    </tr>
                </thead>
                <tbody>
                <tr key="">
                            <td>raj kishan</td>
                            <td>rajkishan</td>
                            <td>raj@123</td>
                            <td>5000</td>
                            <td>kjiardscer145236987</td>
                            <td>Weeding</td>
                            <td>14782369</td>
                            <td>Catring Package</td>
                            <td>pending</td>
                        </tr>
                    {/* {users?.map((user) => (
                        <tr key={user.userId}>
                            <td>{user.userId}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.amount}</td>
                            <td>{user.eventId}</td>
                            <td>{user.eventName}</td>
                            <td>{user.packageId}</td>
                            <td>{user.packageName}</td>
                            <td>{user.status}</td>
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    </>
  );
};
 export default VendorHomePage;
