import { Link } from "react-router-dom";
import "../styles/routing.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}

export default Navbar;