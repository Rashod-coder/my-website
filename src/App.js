import React, { useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './font.css';
import Projects from './Projects';
import AboutMe from './About';
import Contact from './Contact';
import Home from './Home'
import { Analytics } from "@vercel/analytics/react"

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


  return (
    <div className="App">
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Home/>
      <div ref={aboutRef} className="section about">
        <AboutMe />
      </div>
      <div ref={projectsRef} className="section projects">
        <Projects/>
      </div>
      
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
