import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from '../assets/bc_round_Logo.png'; 

function NavBar() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <header className="nav-header">
      <div className="nav-container">
        <Link to="/" className="nav-brand">
          BC Bio Lab Database
        </Link>
        <nav className="nav-links">
          <button onClick={() => handleNavigation('/home')} className="nav-link">
            Home
          </button>
          <button onClick={() => handleNavigation('/query')} className="nav-link">
            Query Test
          </button>
          <button onClick={() => handleNavigation('/logout')} className="nav-link">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;