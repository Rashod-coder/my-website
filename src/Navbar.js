import React from 'react';
import './navbar.css'; // Import the navbar.css file

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
      <div className="container">
      
      <p className='navbar-brand'>Rishit Gupta</p>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Offcanvas Sidebar */}
        <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          {/* Offcanvas Header */}
          <div className="offcanvas-header text-white border-bottom"> 
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Rishit Gupta</h5>
            <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          
          {/* Offcanvas Body */}
          <div className="offcanvas-body">
            {/* Navigation Links */}
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-5">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{ color: 'white', fontSize: '20px' }} href="/">Home</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" style={{ color: 'white', fontSize: '20px' }} href="/projects">Projects</a>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" style={{ color: 'white', fontSize: '20px' }} href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
