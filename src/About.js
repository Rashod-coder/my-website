import React, { useState, useEffect } from 'react';
import './App.css';

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

      <div className='row'> 
        <div className='col-sm-12'>
          <h1 className="text-center oxygen-bold" style={{ color: '#black' }}>About me</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-12'>
          <br/>
          <br/>
          <div className='box'>
            <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'white' }}>I'm Rishit Gupta, a Junior at Amador Valley! I intend to major in Aerospace once I graduate as I find it one of my passions. I have taken summer classes which can be found on my LinkedIn page <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">here</a>.</p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <br/>
          <br/>
          <br/>
          <div className='box'>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'white', }}>
            Place Holder
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className='col-sm-4 offset-sm-8'>          <br/>
          <br/>
          <br/>
          <div className='box'>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'white', }}>
            Place Holder
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <br/>
          <br/>
          <br/>
          <div className='box'>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'white', }}>
            Place Holder
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className='col-sm-4 offset-sm-8'>         <br/>
          <br/>
          <br/>
          <div className='box'>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'white', }}>
            Place Holder
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-sm-4'>
          <br/>
          <br/>
          <br/>
          <div className='box'>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'white', }}>
            Place Holder
            </p>
          </div>
        </div>
      </div>
      <div className='row'>
      <div className='col-sm-4 offset-sm-8'> {/* Adjusted column classes */}          <br/>
          <br/>
          <br/>
          <div className='box'>
          <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'white', }}>
            Place Holder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
