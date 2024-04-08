import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <>
      <header>
        <div className="cantainer">
            <div className="logo-brand">
              <NavLink to="/">NexEvent</NavLink>
            </div>
            <nav>
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink> </li>
                <li><NavLink to="/contact">Contact</NavLink> </li>
                <li><NavLink to="/UserLogin">Login</NavLink> </li>
                <li><NavLink to="UserSignup">SignUp</NavLink> </li>
                
              </ul>
            </nav>
        </div>
        </header>
          </>
  )
}

export default NavBar
