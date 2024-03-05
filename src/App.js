// App.js
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Home'; 
import ContactPage from './Contact';  
import ProjectsPage from './Projects'; // Ensure you have this component created
import Footer from './Footer';

function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: 'smooth'
      });
    }
  };

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
    }, 50); // Adjust typing speed here (in milliseconds)

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <div className='sectionHome home'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='align'>
                  <div className='welcomeText'>
                  <h1 style={{ color: '#ffffff', fontSize: 40 }}>{displayText}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div ref={aboutRef} className="section about">
        <div className='container'>
          <div className='row'> 
            <div className='col-sm-12'>
              <h1 className='text-center pt- -200'>My Skills</h1>
            </div>
          </div>
        </div>
      </div>
        <div ref={projectsRef} className="section projects">
          <h1>Projects that I have worked on & currently working on</h1>
        </div>
        <div ref={contactRef} className="section contact">
          <h1>Contact</h1>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
