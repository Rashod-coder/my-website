import React, { useRef } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './font.css';
import Projects from './Projects';
import AboutMe from './About';
import Home from './Home'
import { Analytics } from "@vercel/analytics/react"
import info from './otherProjects'
import OtherProjects from './otherProjects';

function App() {
  

  


  return (
    <div className="App">
      <Navbar/>
      <div id='home'>
        <Home/>
      </div>
      <div id='about'>
        <AboutMe/>
      </div>
      <div id='projects'>
        <Projects/>
      </div>
      <div id='footer'>
      <Footer />

      </div>
      <Analytics />
    </div>
  );
}

export default App;
