import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import { CheckCircle, Work } from '@mui/icons-material'; // Import MUI icons

const OtherProjects = () => {
  return (
    <div 
      style={{ 
        padding: '20px', 
        background: 'linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(255, 255, 255, 0.8))', 
        color: '#333', 
        fontFamily: 'Arial, sans-serif' 
      }}>
      <h1 className='display-2 text-center' style={{ fontWeight: 'bold' }}>Additional Information</h1>
      <hr style={{ width: '50%', margin: '20px auto', borderColor: 'white' }} /> {/* Horizontal line */}
      
      <div className="container">
        {/* Honors Section */}
        <section style={{ borderBottom: '2px solid white', paddingBottom: '20px' }}>
          <h2 className='text-center' style={{ fontWeight: 'bold' }}>Honors</h2>
          <div className="d-flex justify-content-center mb-4" style={{ gap: '40px' }}>
            <div className="d-flex align-items-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              <CheckCircle style={{ color: 'white', marginRight: '10px' }} />
              Best Hack Award @ Los Altos Hackathon
            </div>
            <div className="d-flex align-items-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              <CheckCircle style={{ color: 'white', marginRight: '10px' }} />
              AP Scholar with Honor 
            </div>
            <div className="d-flex align-items-center" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
              <CheckCircle style={{ color: 'white', marginRight: '10px' }} />
              Publication - Modeling Shileding for Nuclear fission Powered Aircrafts
            </div>
          </div>
        </section>

        {/* Mini Projects / Work Experience Section */}
        <section className="mt-4"style={{ borderBottom: '2px solid white', paddingBottom: '20px' }}>
          <h2 className='text-center' style={{ fontWeight: 'bold' }}>Mini Projects / Work Experience</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card shadow" style={{ borderRadius: '8px', border: 'none' }}>
                <div className="card-body">
                  <Work style={{ color: 'black', marginBottom: '10px' }} />
                  <h5 className="card-title" style={{ fontWeight: 'bold' }}>Bellarmine Hacks</h5>
                  <p className="card-text"> Developed a wildfire prediction tool using ML on NASA topography and soil dryness datasets. Hosted online to help the public in wildfire preparation. </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow" style={{ borderRadius: '8px', border: 'none' }}>
                <div className="card-body">
                  <Work style={{ color: 'black', marginBottom: '10px' }} />
                  <h5 className="card-title" style={{ fontWeight: 'bold' }}>Amador UAV's Hover Game </h5>
                  <p className="card-text">Designed a drone to carry a 1kg payload of pesticides, using sensors, and cameras to detect infested plants aiding farmers in boosting crop yield.    </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card shadow" style={{ borderRadius: '8px', border: 'none' }}>
                <div className="card-body">
                  <Work style={{ color: 'black', marginBottom: '10px' }} />
                  <h5 className="card-title" style={{ fontWeight: 'bold' }}>Ace Coding - Programming Tutor</h5>
                  <p className="card-text">Taught 6-8th grade students how to develop a number game in Python by creating a curriculum, conducting weekly meetings, and debugging students' code.</p>
                </div>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default OtherProjects;