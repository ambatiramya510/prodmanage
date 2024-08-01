
import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ showHome }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Perform any logout actions, e.g., clearing tokens or session data
    // Then redirect to the home page (ImageSlider)
    navigate('/');
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#/"><b>Product Management System</b></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {showHome && (
                <li className="nav-item">
                  <Link to="/home" className="nav-link text-black" aria-current="page"><b>Home</b></Link>
                </li>
              )}
          
              <li className="nav-item">
                <Link to="/signup" className="nav-link text-black" aria-current="page"><b>Signup</b></Link>
              </li>
              <li className="nav-item">
                <span className="nav-link text-black" style={{ cursor: 'pointer' }} onClick={handleLogout}><b>Logout</b></span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
