import React, { useState, useEffect } from 'react';
import './App.css';
import { FaLaptop, IoPhonePortraitOutline } from "react-icons/fa";



function AboutMe() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 200) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`about-container ${isScrolled ? 'scrolled' : ''}`}>
      <h1 style={{color: 'white'}}>About me</h1>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
  <div className="container">
  <div className="row justify-content-center">
    <div className="col-sm-12">
      <div className="boxAbout">
        <h1>Skills</h1>
        <span className="ml-lg-5 ml-xl-10">&nbsp;</span>
        <h4 style={{ textAlign: 'left' }}><FaLaptop/> Frontend Developer: 
        
          <p style={{fontSize: 18, color: 'black'}}>
          <br/>
            I'm experienced in react JavaScript, CSS, & HTML I have some examples that are linked below or feel free to check out my github.</p>
        </h4>
        <br/>
        <h4 style={{ textAlign: 'left' }}>Computer Science
        <p style={{fontSize: 18, color: 'black'}}>
          <br/>
          I'm well versed in Java and Python, I have took AP Computer Science, a Community College Course about Java.
        </p>
        </h4>
        <br/>
        <h4 style={{ textAlign: 'left' }}>Outreach</h4>
        <br/>
        <h4 style={{ textAlign: 'left' }}>Hardware</h4>
        <br/>
        <h4 style={{ textAlign: 'left' }}>Leadership</h4>
        <br/>
        <h4 style={{ textAlign: 'left' }}>Placeholder</h4>
        <br/>


      </div>
    </div>
  </div>
</div>
</div>

  );
}

export default AboutMe;
