import { NavLink } from "react-router-dom";

function NavBar1() {
  return (
    <nav className="navbar-container">
      <div className="logo">Nairobi Bitez</div>
      <div className="nav-links">
        <NavLink to="/" className="navbar-link">Home</NavLink>
        <NavLink to="/restaurants" className="navbar-link">Restaurants</NavLink>
        <NavLink to="/favorites" className="navbar-link">Favorites</NavLink>
        <NavLink to="/profile" className="navbar-link">Profile</NavLink>
        <NavLink to="/signup" className="navbar-link">Sign Up</NavLink>
        <NavLink to="/login" className="navbar-link">Log In</NavLink>
      </div>
    </nav>
  );
}

export default NavBar1;
