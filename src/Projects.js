import React from 'react';
import './App.css';
import techImage from './Tech.jpg'; // Adjust the path accordingly
import Marble from './Screenshot 2025-05-19 at 4.22.23 PM.png'
import Car from './Screenshot 2025-05-19 at 4.29.22 PM.png'
import Glider from './Screenshot 2025-05-19 at 4.42.55 PM.png'
import airplane from './Screenshot 2025-05-19 at 5.01.14 PM.png'
import Airfoil from './Screenshot 2025-05-19 at 4.49.49 PM.png'
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
            <a href="https://techcore-rishits-projects-9b0c81d8.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px' }}>
              Visit TechCore
            </a>
          </div>
          <hr/>
          <div className="col-md-6 d-flex justify-content-center"> {/* Center image on smaller screens */}
            <div className="card shadow mb-4" style={{ borderRadius: '8px', maxWidth: '400px' }}>
              <img 
                src={Marble} 
                alt="TechCore Project" 
                className="card-img-top" 
                style={{ borderRadius: '8px 8px 0 0', height: 'auto', maxWidth: '100%', maxHeight: '400px' }} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>Marble Sorter - Honors Principles of Engineering </h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
              This project involved the design and contruction of a marble sorting machine using vex parts and 3D printed parts. The machine was designed to sort marbles based on their color, using a combination of sensors and mechanical components. I mainly learned how to CAD complicated parts as well improving problem solving skills, and improving group project skills, such as communication. 
            </p>
            <a href="https://docs.google.com/document/d/1OVU7jNyaU-6NkFlWGgw5PV7oJr_DraLtm4HFNrdJovY/edit?usp=sharing" target="_blank" rel="noopener noreferrer"   className="btn btn-primary mt-2 me-2 mb-4"
 style={{ marginTop: '10px', marginRight: '10px' }}>
              Read the Report
            </a>
            

          </div>
          <hr/>
          <div className="col-md-6 d-flex justify-content-center"> {/* Center image on smaller screens */}
            <div className="card shadow mb-4" style={{ borderRadius: '8px', maxWidth: '400px' }}>
              <img 
                src={Car} 
                alt="TechCore Project" 
                className="card-img-top" 
                style={{ borderRadius: '8px 8px 0 0', height: 'auto', maxWidth: '100%', maxHeight: '500px' }} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>Drift Car - Honors Principles of Engineering</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
              Our team was chosen to design and construct a project from PLTW curriculum and we choose a car, the point of the car was for us to be able to make it drift. Hence in the design we put 2 fixed tires in the back and 360 degree turning radius for the front tire to help it drift. In this project I mainly learned how to work with VEX parts more and how to use the VEX programming app in Python. 
            </p>
            <a href="https://docs.google.com/document/d/101oUAKx9IpXtgbuYCLG4Z2a6eqYulIDh2I6rsnvT3s4/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px', marginRight: '10px' }}>
              Read the Report
            </a>
            
          </div>
          <hr/>
          <div className="col-md-6 d-flex justify-content-center"> {/* Center image on smaller screens */}
            <div className="card shadow mb-4" style={{ borderRadius: '8px', maxWidth: '400px' }}>
              <img 
                src={Glider} 
                alt="TechCore Project" 
                className="card-img-top" 
                style={{ borderRadius: '8px 8px 0 0', height: 'auto', maxWidth: '100%', maxHeight: '500px' }} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>Glider - Honors Aerospace Engineering</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
            The purpose of this project is to apply engineering principles to design, build and test a functional glider using materials like balsa wood, basswood, glue, and clay. Our goal was to build a fully functional aerodynamic glider that can sustain a good airtime. Overall in our best iteration we were able to average around 3.5 seconds of airtime travelling around 600-800 meters. I learnt a lot about aerodynamics espically  how center of mass affects flight time, this learning affected how me and my teamate placed our wing on the glider and how much clay to add on the nose of the plane.              </p>
            <a href="https://docs.google.com/document/d/1F3Ss3c2TgLZND4xHHb-yRulNr3W4iFmG6AcLjBNZG4A/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px', marginRight: '10px' }}>
              Read the Report
            </a>
            
          </div>
          <hr/>
          <div className="col-md-6 d-flex justify-content-center"> {/* Center image on smaller screens */}
            <div className="card shadow mb-4" style={{ borderRadius: '8px', maxWidth: '400px' }}>
              <img 
                src={Airfoil} 
                alt="TechCore Project" 
                className="card-img-top" 
                style={{ borderRadius: '8px 8px 0 0', height: 'auto', maxWidth: '100%', maxHeight: '500px' }} 
              />
            </div>
          </div>
          <div className="col-md-6">
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>Airfoil - Honors Aerospace Engineering</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
            This project we were tasked to create a airfoil that would be efficent in providing a lot of lift while also having low drag. We were provided with using NASA's Airfoil Simulator which would help us optimize lift and drag. I applied aerodynamic skills in creating a efficent airfoul as well as using google sheets to streamline my calculations to determine total lift and drag. We had a criteria of meeting a required amount of lift and a maximum amount of drag in our airfoil design. In this project I learned as an aircraft designer it's super important to design efficent airfoils because it's cost effective as the aircraft won't be burning up a lot of fuel but also less carbon emissions, and I also learned specific factors that affect drag and lift such as angle of attack.    </p>
            <a href="https://docs.google.com/document/d/15fJNE1x-6hbJI_OTnA0u0-cLrolpfge7jbtc2FQf0kI/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px', marginRight: '10px' }}>
              Read the Report
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
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '2.5rem', fontWeight: '600' }}>Research paper about Nuclear Fission powering our planes</h2>
            <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
              My researcher paper explores the possiblities of integating nuclear fission reactors into aerospace applicatons. It examines the interactions between various materials of the reactor using a Software simulation tool OpenMc, to determine
              the feasbility and saftey of such integration. The findings revealed that it is indeed possible to incorporate nuclear fission technology into aerospace designs, with further and extensive research being conducted in this field this could become a reality.
              Paving a path for more sustainable, zero emission and energy efficent solutions in aviation. 
            </p>
            <a href="https://research-archive.org/index.php/rars/preprint/view/1683/2429" target="_blank" rel="noopener noreferrer" className="btn btn-primary mb-4" style={{ marginTop: '10px' }}>
              Read the paper!
            </a>

          </div>
        </div>
        <hr/>
      </div>
    </div>
    
  );
}

export default ProjectsPage;