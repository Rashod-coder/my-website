import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './Navbar';
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
          <div className='container'>
            <div className='row'> 
              <div className='col-sm-12'>
              <h1 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold' }}>About me</h1>
                <div className='row'> 
    <div className='col-sm-4'>
        <div className='box'> {/* Added mx-auto class to center the box */}
            <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 45, textAlign: 'center' }}>Programmer!</p>
        </div>
    </div>
    <div className='col-sm-2'>
    <img src={require('./splash11.jpg')} alt="Image" className="img-fluid custom-image" />
    </div>
</div>
              <div className='row'> 
              <div className='col-sm-4 offset-sm-8'>
                      <div className='box'> 
                        <p>Hello! I'm</p>
                  </div>
                  
                </div>
              </div>
            
            
              
          </div>
          </div>
              </div>
        </div>
        <div ref={projectsRef} className="section projects">
        <h1 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold' }}>Projects</h1>
        </div>
        <div ref={contactRef} className="section contact">
        <h1 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold' }}>Contact & Socials</h1>

        </div>
      
      <Footer />
    </div>
  );
}

export default App;
