import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './font.css';
import Projects from './Projects'
import AboutMe from './About';

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
  const text = "I 'm Rishit Gupta currently a Junior at Amador Valley High School";
  let index = 1; // Start from index 1 to skip the initial character

  // Initialize displayText with the first character of the text
  setDisplayText(text.charAt(0));

  const typingInterval = setInterval(() => {
    if (index < text.length) {
      setDisplayText(prevText => prevText + text.charAt(index));
      index++;
    } else {
      clearInterval(typingInterval);
    }
  }, 60); // Adjust interval timing here if needed

  return () => clearInterval(typingInterval);
}, []);

  return (
    <div className="App">
      
        <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
        
        <div className='sectionHome home'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='align'>
                  <div className='welcomeText'>
                  <h1 style={{ color: '#ffffff', fontSize: 40, fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold' }}>{displayText}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div ref={aboutRef} className="section about">
        <AboutMe />
        </div>
        <div ref={projectsRef} className="section projects">
        <h1 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold' }}>Projects</h1>
        <Projects/>
        </div>
        <div ref={contactRef} className="section contact">
        <h1 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold' }}>Contact & Socials</h1>

        </div>
      
      <Footer />
    </div>
  );
}

export default App;
