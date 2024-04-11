import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import '../styles/UserSignUp.css'
const UserSignUp = () => {
  const [DOB, setDOB] = useState(null);
  const [gender, setgender] = useState("");
  const [image,setimage] =useState(null);
  const [user,setuser] = useState({
    username:"",
    email:"",
    phone:"",
    aadhar:"",
    password:"",
    address:""
  });


  

  const handleImageChange=(event)=>{
    setimage(event.target.files[0]);
  }

  const handleGenderChange = (event) => {
    setgender(event.target.value);
  };

  const handle_namechange=(event)=>{
    const name=event.target.name;
    const value=event.target.value;

    setuser({
      ...user,
      [name]:value,
    })
  }

  //handleing form submit


  const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(DOB)
        console.log(user);
        console.log(gender);
        console.log(image);
        alert(user);
  }
  return (
    <section>
      <main>
        <div className="user-registration">
          <div className="container grid grid-two-cols">
            <div className="registration-img">
              <img
                src="/images/register.png"
                alt="trying to fill registration form"
                height="500"
                width="500"
              />
            </div>
            <div className="user-registration-form">
              <h1 className="main-heading mb-3">registration form</h1>
              <br />

              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    name="username"
                    placeholder="username"
                    id="username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handle_namechange}
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    id="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handle_namechange}
                  />
                </div>
                <div>
                  <label htmlFor="gender">gender</label>
                  <label htmlFor="male">
                    Male
                    <input
                      id="male"
                      name="male"
                      type="radio"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={handleGenderChange}
                    />
                  </label>
                  <label htmlFor="female">
                    Female
                    <input
                      id="female"
                      name="female"
                      type="radio"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={handleGenderChange}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="phone">Phone No.</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="enter your phone number"
                    id="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handle_namechange}
                  />
                </div>
                <div>
                  <label htmlFor="birthdate">Date of Birth</label>
                  <DatePicker
                      selected={DOB}
                      onChange={(DOB)=>{
                        setDOB(DOB)
                        console.log();
                          }
                        }
                      dateFormat="yyy/MM/dd"
                      showYearDropdown
                      scrollableMonthYearDropdown

                  />
                </div>
                <div>
                  <label htmlFor="aadhar">Aadhar No.</label>
                  <input
                    type="text"
                    name="aadhar"
                    placeholder="enter your aadhar number"
                    id="aadhar"
                    required
                    autoComplete="off"
                    value={user.aadhar}
                    onChange={handle_namechange}
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    placeholder="enter your address"
                    id="address"
                    required
                    autoComplete="off"
                    value={user.address}
                    onChange={handle_namechange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    id="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handle_namechange}
                  />
                </div>
                <div>
                  <label htmlFor="image">
                    Profile Image:
                    <input
                      name="image"
                      type="file"
                      accept="image/*"
                      required
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
                <br/>

                <button type="submit" className="btn btn-submit" id="btn btn-submit">
                   Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default UserSignUp;
