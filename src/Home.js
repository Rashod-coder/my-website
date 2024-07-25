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
        justifyContent: 'center' // Center horizontally
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
      </div>
    </div>
  );
}

export default Home;
