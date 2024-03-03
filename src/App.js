import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './Home'; // Ensure you have this component created
import ContactPage from './Contact'; // Ensure you have this component created
import ProjectsPage from './Projects'; // Ensure you have this component created

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
      </Router>
    </div>
  );
}

export default App;
