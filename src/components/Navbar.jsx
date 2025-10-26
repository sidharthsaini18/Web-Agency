import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import "../styling/navbar.css";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
  const navigate = useNavigate();

  const togglemenu = () => {
    setActive(!active);
  };
  const handlelogin = () => {
    navigate("/login");
  }
  
  const handleSignup = () => {
    navigate("/signup");
  }

 
  useEffect(() => {
    const handleResize = () => {
      const isLg = window.innerWidth >= 992;
      setIsLargeScreen(isLg);
      if (isLg) setActive(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar custom-navbar fixed-top px-3 py-2">
      <div className="container-fluid d-flex flex-wrap align-items-center justify-content-between">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center text-white" href="/">
          <img src={logo} alt="logo" style={{ height: "2rem" }} />
          <h4 className="mx-2 mb-0">COLD PRODUCTIONS</h4>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler text-white border-white d-lg-none"
          type="button"
          onClick={togglemenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu (single ul for both views) */}
        <ul
          className={`nav-menu list-unstyled mb-0 ${
            isLargeScreen ? "d-flex" : active ? "mobile-open" : "mobile-closed"
          }`}
        >
        <Link className="nav-link" to="/"> <li><a  className="nav-link px-3 text-white">Home</a></li></Link> 
         <Link className="nav-link" to='/features'> <li><a  className="nav-link px-3 text-white">Features</a></li></Link>
         <Link className="nav-link" to="/pricing"><li><a href="#"  className="nav-link px-3 text-white">Pricing</a></li></Link> 
        <Link className="nav-link" to='/faqs'> <li><a href="#" className="nav-link px-3 text-white">FAQs</a></li></Link> 
         <Link className="nav-link" to='/about'><li><a href="#" className="nav-link px-3 text-white">About</a></li></Link> 
          <li className="d-flex mt-2 mt-lg-0">
  <button className="btn btn-outline-light me-2" onClick={handlelogin}>Login</button>
            <button className="btn btn-light" onClick={handleSignup}>Sign-up</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;