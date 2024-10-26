import React from 'react';
import './App.css';
import techImage from './Tech.jpg'; // Adjust the path accordingly
import coding from './icon-coding-logo-Q976Kx7-600.jpg'
import airplane from './Tpwmmfo3CiAJvwd4vXGzvn-1200-80.jpg'
import fresh from './Fresh.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported

const ProjectsPage = () => {
  return (
    <div style={{ height: '100%', backgroundColor: '#f4f4f4', padding: '20px' }}>
      <h1 className='display-2 text-center'> Personal Projects</h1>
      <hr style={{ width: '50%', margin: '20px auto', borderColor: '#007bff' }} /> {/* Horizontal line */}
      <div className="container">
        <div className="row align-items-center justify-content-center"> {/* Centering content */}
          <div className="col-md-6 d-flex justify-content-center"> {/* Center image on smaller screens */}
            <div className="card shadow mb-4" style={{ borderRadius: '8px', maxWidth: '400px' }}>
              <img 
                src={techImage} 
                alt="TechCore Project" 
                className="card-img-top" 
                style={{ borderRadius: '8px 8px 0 0', height: 'auto', maxWidth: '100%', maxHeight: '400px' }} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>TechCore</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
              TechCore is a nonprofit initiative aimed at reducing the digital divide in education through technology donations and programming classes. 
              We strive to enhance access to technology for underserved schools, empowering students with vital coding skills and resources for their future.
            </p>
            <a href="https://tech-core.xyz" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px' }}>
              Visit TechCore
            </a>
          </div>
          <hr/>
          <div className="col-md-6 d-flex justify-content-center"> {/* Center image on smaller screens */}
            <div className="card shadow mb-4" style={{ borderRadius: '8px', maxWidth: '400px' }}>
              <img 
                src={coding} 
                alt="TechCore Project" 
                className="card-img-top" 
                style={{ borderRadius: '8px 8px 0 0', height: 'auto', maxWidth: '100%', maxHeight: '400px' }} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>Website Solutions For Clubs</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
              I created tailored websites for clubs and organizations, to help enhance their community outreach and showcasing their missions. My solutions 
              streamline club managment with a seamless UI dashboard, allowing members to see overall statistics of the club, manage team members, carry out club
              tasks efficently. Visit the website(s) below for some past works I've done. 
            </p>
            <a href="https://sportinjurybio.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '10px', marginRight: '10px' }}>
              Visit Sport Injury Bio
            </a>
            <a href="https://fremont-youth.vercel.app/team" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: '10px' }}>
              Visit Fremont Youth
            </a>

          </div>
          <hr/>
          <div className="col-md-6 d-flex justify-content-center"> {/* Center image on smaller screens */}
            <div className="card shadow mb-4" style={{ borderRadius: '8px', maxWidth: '400px' }}>
              <img 
                src={airplane} 
                alt="TechCore Project" 
                className="card-img-top" 
                style={{ borderRadius: '8px 8px 0 0', height: 'auto', maxWidth: '100%', maxHeight: '400px' }} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>Research paper under a UT Austin Scientist</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
              My researcher paper explores the possiblities of integating nuclear fission reactors into aerospace applicatons. It examines the interactions between various materials of the reactor using a Software simulation tool OpenMc, to determine
              the feasbility and saftey of such integration. The findings revealed that it is indeed possible to incorporate nuclear fission technology into aerospace designs, with further and extensive research being conducted in this field this could become a reality.
              Paving a path for more sustainable, zero emission and energy efficent solutions in aviation. 
            </p>
            <a href="https://research-archive.org/index.php/rars/preprint/view/1683/2429" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px' }}>
              Read the paper!
            </a>

          </div>
          <hr/>
          <div className="col-md-6 d-flex justify-content-center"> {/* Center image on smaller screens */}
            <div className="card shadow mb-4" style={{ borderRadius: '8px', maxWidth: '400px' }}>
              <img 
                src={fresh} 
                alt="TechCore Project" 
                className="card-img-top" 
                style={{ borderRadius: '8px 8px 0 0', height: 'auto', maxWidth: '100%', maxHeight: '500px' }} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>Fresh Market Hub - Hackathon Project</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
              Fresh For All is a online digital farmers market, designed to reduce food waste and promote sustabinlity. By connecting local farmers and residents, the platform
              allows people to sell surplus produce grown in their backyards, fostering community engagement, and encouraging less food waste, preventing this home grown produce from going to waste. As well as helping farmers gain profits by directly selling on this site.
              <p style={{fontWeight: 'bold'}}>Won Best Hack award  </p>
            </p>
            <a href="https://fresh-produce.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px', marginRight: '10px' }}>
              View the prototype
            </a>
            <a href="https://devpost.com/software/fresh-for-all" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px' }}>
              View the devpost
            </a>
          </div>
        </div>
        <hr/>
      </div>
    </div>
    
  );
}

export default ProjectsPage;