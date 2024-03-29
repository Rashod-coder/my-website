import React, { useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import './font.css';
import Projects from './Projects';
import AboutMe from './About';
import Contact from './Contact';
import Home from './Home'

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

  // Set the displayText directly without typing animation
  const displayText = "Hi, I'm Rishit Gupta";

  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <div className='sectionHome home'>
        <Home/>
          
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
