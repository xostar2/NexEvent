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
import AddPackage from "./pages/AddPackage"
import ViewPackage from "./pages/ViewPackage"
import EventHomePage from "./pages/EventHomePage"
import {AppProvider} from "./context/UserContext";


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
              <Route path="/userhomepage" element={<UserHomePage/>}/>

              <Route path="/signupvendor" element={<VendorSignUp/>}/>
              <Route path="/loginvendor" element={<VendorLogin/>}/>
              <Route path="/eventcard" element={<EventCard/>}/>
              <Route path="/addevent" element={<AddEvent/>}/>
              <Route path="/addpackage" element={<AddPackage/>}/>
              <Route path="/eventhomepage" element={<EventHomePage/>}/>
              <Route path="/viewpackage" element={<ViewPackage/>}/>
          </Routes>
      </BrowserRouter>
      </AppProvider>
    </>
  )
}

export default App
