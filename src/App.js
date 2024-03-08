import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './font.css';
import Projects from './Projects';
import AboutMe from './About';
import Contact from './Contact';

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

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowText(true);
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <div className='sectionHome home'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <div className={`align ${showText ? 'fade-in' : ''}`} style={{ textAlign: 'center', marginTop: '-150px' }}>
                <div className='welcomeText'>
                  <h1 className={`fade-in-text ${showText ? 'visible' : ''}`} style={{ color: '#ffffff', fontSize: 43, fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold' }}>I'm Rishit Gupta currently a Junior at Amador Valley High School</h1>
                </div>
              </div>
              <h2 style={{ textAlign: 'center' }}>hieeeee</h2>
            </div>
          </div>
        </div>
      </div>
      <div ref={aboutRef} className="section about">
        <AboutMe />
      </div>
      <div ref={projectsRef} className="section projects">
        <Projects/>
      </div>
      <div ref={contactRef} className="section contact">
        <Contact/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
