import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  return (
    <div 
      style={{ 
        padding: '40px 20px',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        flexDirection: 'column' // Stack content vertically
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 text-left mb-4 mb-lg-0"
            style={{ 
              animation: 'fadeIn 1s ease-out',
              opacity: 0,
              animationFillMode: 'forwards',
              animationDelay: '0.5s',
              marginTop: '20px' // Lower the content
            }}
          >
            <h1
              style={{ 
                fontFamily: 'Open Sans, sans-serif',
                fontWeight: 'bold',
                fontSize: '5rem', // Adjust for responsiveness
                color: '#333',
                marginBottom: '20px' // Adjust spacing
              }}
            >
              Hi, I'm Rishit Gupta.
            </h1>
            <p
              style={{
                fontFamily: 'Open Sans, sans-serif',
                fontSize: '1.5rem', // Adjust font size
                color: '#555',
                marginBottom: '20px' // Space below the paragraph
              }}
            >
              I'm currently a senior High School interested in majoring in Aerospace Engineering.
            </p>
          </div>
          <div className="col-lg-6 text-center text-lg-right"
            style={{ 
              animation: 'fadeIn 1s ease-out',
              opacity: 0,
              animationFillMode: 'forwards',
              animationDelay: '1s',
              marginTop: '20px' // Lower the content
            }}
          >
            <img 
              src="./rishitg.png" 
              alt="Rishit Gupta" 
              style={{ 
                width: '100%', // Adjust for zoom-out effect
                maxWidth: '400px', // Maximum width
                height: 'auto', // Maintain aspect ratio
                objectFit: 'cover',
                border: '5px solid #333',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                transform: 'scale(0.9)' // Zoom-out effect
              }} 
            />
          </div>
        </div>
        <div 
          style={{
            marginTop: '40px', // Space between image and buttons
            display: 'flex',
            justifyContent: 'center',
            gap: '20px' // Space between buttons
          }}
        >
          <a
            href="#footer"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              fontSize: '26px',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#333',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#333'}
          >
            Contact
          </a>
          <a
            href="#about"
            style={{
              display: 'inline-block',
              padding: '10px 20px',
              fontSize: '26px',
              fontWeight: 'bold',
              color: '#fff',
              backgroundColor: '#333',
              borderRadius: '5px',
              textDecoration: 'none',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#333'}
          >
            About Me
          </a>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
