import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Import icons
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div style={{ background: 'black', color: 'white', minHeight: '40vh', padding: '20px' }}>
        <h2 style={{textDecoration:'underline'}}>Contact</h2>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4'>
            <hr style={{
              width: '80%', // Adjust width as needed
              border: '2px solid white', // Increase thickness
              margin: '20px auto', // Center and add vertical spacing
            }} />
          </div>
          <div className='col-lg-4 d-flex justify-content-center align-items-center'>
            <a href="https://www.linkedin.com/in/rishitgupta2007" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '40px', margin: '0 10px' }}>
              <FaLinkedin />
            </a>
            <a href="https://github.com/Rashod-coder" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '40px', margin: '0 10px' }}>
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/ritzx.gupta_/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '40px', margin: '0 10px' }}>
              <FaInstagram />
            </a>
            <a href="mailto:rishit56700@gmail.com" style={{ color: 'white', fontSize: '40px', margin: '0 10px' }}>
              <FaEnvelope />
            </a>
          </div>
          <div className='col-lg-4'>
            <hr style={{
              width: '80%', // Adjust width as needed
              border: '2px solid white', // Increase thickness
              margin: '20px auto', // Center and add vertical spacing
            }} />
          </div>
        </div>
        <div className='row align-items-center'>
          <div className='col-lg-4 text-center text-lg-start'>
            <img className='mb-4 mt-4' src='./rg.png' alt="Rishit Gupta" style={{ maxWidth: '300px', maxHeight: '100%' }} />
          </div>
          <div className='col-lg-4 text-center'>
            <ul className='list-unstyled mt-'>
              <li><a href="#home" style={{ color: 'white', textDecoration: 'none', fontSize: '25px' }}>Home</a></li>
              <li><a href="#about" style={{ color: 'white', textDecoration: 'none' , fontSize: '25px' }}>About</a></li>
              <li><a href="#projects" style={{ color: 'white', textDecoration: 'none' , fontSize: '25px' }}>Projects</a></li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 text-center mt-4'>
            <p className='mb-0'>&copy; {new Date().getFullYear()} Rishit Gupta | Website Designed by Rishit Gupta</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
