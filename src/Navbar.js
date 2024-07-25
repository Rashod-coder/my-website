import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './navbar.css'; // Import the navbar.css file

const Navbar = () => { // Define the Navbar component
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black"> {/* Changed to bg-black */}
      <div className="container">
        <a href="https://rishitgupta.xyz" className="navbar-brand">
          <img src="./rg.png" alt="Rishit Gupta" style={{ maxWidth: '95%', maxHeight: '95px' }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Sidebar */}
        <div
          className="sidebar offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          {/* Offcanvas Header */}
          <div className="offcanvas-header bg-black text-white border-bottom"> {/* Changed to bg-black */}
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Rishit Gupta</h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button> {/* Changed to btn-close-white */}
          </div>

          {/* Offcanvas Body */}
          <div className="offcanvas-body bg-black d-flex justify-content-center align-items-center"> {/* Changed to bg-black and centered */}
            {/* Navigation Links */}
            <ul className="navbar-nav d-flex justify-content-center flex-grow-1">
              <li className="nav-item mx-2">
                <a href='#about'className="nav-link active" aria-current="page" style={{ color: 'white', fontSize: '28px' }}>
                  About
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href='#projects'className="nav-link" style={{ color: 'white', fontSize: '28px' }}>
                  Projects
                </a>
              </li>
              <li className="nav-item mx-2">
                <a href='#footer'className="nav-link" style={{ color: 'white', fontSize: '28px' }}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
