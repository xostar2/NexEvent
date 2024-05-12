import React from 'react'
import '../styles/ViewOrders.css'
import BackgroundImage from '../components/BackgroundImage'
import { useEffect, useState } from 'react'
import { AppContext } from '../context/UserContext'
import { useContext } from 'react'
const ViewOrders = (props) => {
    const {vendorDetails,eventDetails,packagesDetails}=useContext(AppContext);
    
    
    console.log("this is vendor details in view orders page",props)
    console.log("this is packages details in view orders page",vendorDetails)
  return (
    <>
    <BackgroundImage />
    <h2>{vendorDetails}</h2>
      <div className="table-container-user-details">
        <h1>View Orders</h1>
       
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
                        {/*<button className="button">
                            <span className="button-content">approve</span>
                        </button>
                        <button className="button">
                            <span className="button-content">reject</span>
                            </button>*/}
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
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
                            {/* <td><button className="button">
                            approve
                        </button>
                              </td> */}
                        </tr>
                      

                   
                </tbody>


            </table>
        </div>
    </>
  )
}

export default ViewOrders
// const ViewOrders = ({ vendordetails }) => {
//     return (
//       <>
//         <BackgroundImage />
//         <div className="table-container-user-details">
//           <h1>View Orders</h1>
//           <h2>{vendordetails?.vendorName}</h2>
//           <table className="user-table-testing-user-details">
//             <thead>
//               <tr>
//                 <th>User ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Amount</th>
//                 <th>Event ID</th>
//                 <th>Event Name</th>
//                 <th>Package ID</th>
//                 <th>Package Name</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {vendordetails?.orders.map(order => (
//                 <tr key={order.orderId}>
//                   <td>{order.userId}</td>
//                   <td>{order.name}</td>
//                   <td>{order.email}</td>
//                   <td>{order.amount}</td>
//                   <td>{order.eventId}</td>
//                   <td>{order.eventName}</td>
//                   <td>{order.packageId}</td>
//                   <td>{order.packageName}</td>
//                   <td>{order.status}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </>
//     );
//   };
  
//   export default ViewOrders;
  