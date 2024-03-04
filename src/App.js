import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Home'; 
import ContactPage from './Contact';  
import ProjectsPage from './Projects'; // Ensure you have this component created
import Footer from './Footer';

function App() {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const text = "I'm Rishit Gupta currently a Junior at Amador Valley";
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(prevText => prevText + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <div className='section home'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='welcomeText'>
                  <h1 style={{ color: '#ffffff', fontSize: 35 }}>{displayText}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section about">
          <h1>My Skills</h1>
        </div>
        <div className="section projects">
          <h1>Projects that I have worked on & currently working on</h1>
        </div>
        <div className="section contact">
          <h1>My Socials are linked below</h1>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
