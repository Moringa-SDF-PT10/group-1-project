import { NavLink } from "react-router-dom";
function NavBar1(){
    return(
        <nav>
            <NavLink to="/Home" className="navbar">Home</NavLink>
            <NavLink to="/Restaurants" className="navbar">Restaurants</NavLink>
            <NavLink to="/Profile" className="navbar">Profile</NavLink>
            <NavLink to="/Signin" className="navbar">SignIn</NavLink>
            <NavLink to="/Login" className="navbar">Login</NavLink>
        </nav>
    )
}
export default NavBar1