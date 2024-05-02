import { BrowserRouter ,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import NavBar from "./components/NavBar"
import ContactUs from "./pages/ContactUs"
import UserSignUp from "./pages/UserSignUp"
import VendorSignup from "./pages/VendorSignup"
import VendorHomePage from "./pages/VendorHomePage"
import TestingRoute from "./pages/TestingRoute"
import UserLogin from "./pages/UserLogin"
import EventCard from "./components/EventCard"
import AddEvent from "./pages/AddEvent"
import UserHomePage from "./pages/UserHomePage"
import AddPackage from "./pages/AddPackage"
import ViewPackage from "./pages/ViewPackage"
import EventHomePage from "./pages/EventHomePage"
import {AppProvider} from "./context/UserContext";
import Footer from "./pages/Footer"
import {useEffect,useState,useRef} from "react";
import SignUp from "./pages/SignUp"



const App = () => {


  return (
    <>
    <AppProvider>
      <BrowserRouter>
      <NavBar/>
    
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<AboutUs/>}/>
              <Route path="/contact" element={<ContactUs/>}/>
              <Route path="/signupuser" element={<UserSignUp/>}/>
              <Route path="/loginuser" element={<UserLogin/>}/>
              <Route path="/vendorhomepage" element={<VendorHomePage/>}/>
              <Route path="/userhomepage" element={<UserHomePage/>}/>
              <Route path="/testing" element={<TestingRoute/>}/>
              <Route path="/signupvendor" element={<VendorSignup/>}/>
              <Route path="/eventcard" element={<EventCard/>}/>
              <Route path="/addevent" element={<AddEvent/>}/>
              <Route path="/addpackage" element={<AddPackage/>}/>
              <Route path="/eventhomepage" element={<EventHomePage/>}/>
              <Route path="/viewpackage" element={<ViewPackage/>}/>
              <Route path="/contactus" element={<ContactUs/>}/>
              <Route path="/signup" element={<SignUp/>}/>
          </Routes>
          
      </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
