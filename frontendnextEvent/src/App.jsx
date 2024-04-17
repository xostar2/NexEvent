import { BrowserRouter ,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import NavBar from "./components/NavBar"
import ContactUs from "./pages/ContactUs"
import UserSignUp from "./pages/UserSignUp"
import VendorSignUp from "./pages/VendorSignUp"
import VendorLogin from "./pages/VendorLogin"
import UserLogin from "./pages/UserLogin"
import EventCard from "./components/EventCard"
import AddEvent from "./pages/AddEvent"
import UserHomePage from "./pages/UserHomePage"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<AboutUs/>}/>
              <Route path="/contact" element={<ContactUs/>}/>
              <Route path="/usersignup" element={<UserSignUp/>}/>
              <Route path="/vendorsignup" element={<VendorSignUp/>}/>
              <Route path="/vendorlogin" element={<VendorLogin/>}/>
              <Route path="/userlogin" element={<UserLogin/>}/>
              <Route path="/eventcard" element={<EventCard/>}/>
              <Route path="/addevent" element={<AddEvent/>}/>
              <Route path="/userhomepage" element={<UserHomePage/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
