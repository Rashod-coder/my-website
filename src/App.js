import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Home'; // Ensure you have this component created
import ContactPage from './Contact'; // Ensure you have this component created
import ProjectsPage from './Projects'; // Ensure you have this component created
import Footer from './Footer';

function App() {
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
          <h1>Hi!</h1>
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
