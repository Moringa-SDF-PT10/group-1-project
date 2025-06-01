import { NavLink } from "react-router-dom";


function NavBar1() {
  return (
    <nav className="navbar-container">
      <NavLink to="/" className="navbar-link">Home</NavLink>
      <NavLink to="/Restaurants" className="navbar-link">Restaurants</NavLink>
      <NavLink to="/Profile" className="navbar-link">Profile</NavLink>
      <NavLink to="/Signin" className="navbar-link">Sign In</NavLink>
      <NavLink to="/Login" className="navbar-link">Log In</NavLink>
    </nav>
  );
}

export default NavBar1;
