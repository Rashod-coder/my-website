import React, { useState, useEffect } from 'react';
import './App.css';
import { FaBeer } from "react-icons/fa";

const ProjectsPage = () => {
  return (
    <div>
    <div className='row'> 
        <div className='col-sm-12'>
          <h1 className="text-center oxygen-bold" style={{ color: '#black' }}>Projects</h1>
          <p>These are my personal projects that I am currently working on</p>
        </div>
      </div>
      
      <div className='row'>
        <div className='col-sm-12'>
            <br/>
            <br/>
            <br/>
            <div className='boxProject'>
                <div className="d-flex align-items-center">
                    <div>
                        <h1 style={{color: '#033559'}}> TechCore</h1>
                        <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                            TechCore is a local non profit in Bay Area California founded by me that strives to reduce the digital divide in education to learn more  <a href="https://techcore.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: 'black' }}>visit our site</a>.


                        </p>
                    </div>
                    <div className="ml-3">
                        <img src="./splash36.png" alt="Logo of TechCore" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className='row'>
        <div className='col-sm-12'>
            <br/>
            <br/>
            <br/>
            <div className='boxProject'>
                <div className="d-flex align-items-center">
                    <div>
                        <h1 style={{color: '#033559'}}> DevTrex</h1>
                        <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                          DevTrex is a business club that strives to teach students about the world of buisness, such as consulting, financial literacy, supply chain... (Website is WIP)
                        </p>
                    </div>
                    <div className="ml-3">
                        <img src="./splash36.png" alt="Description of your image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='row'>
        <div className='col-sm-12'>
            <br/>
            <br/>
            <br/>
            <div className='boxProject'>
                <div className="d-flex align-items-center">
                    <div>
                        <h1 style={{color: '#033559'}}> Placeholder</h1>
                        <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                          DevTrex is a business club that strives to teach students about the world of buisness, such as consulting, financial literacy, supply chain... (Website is WIP)
                        </p>
                    </div>
                    <div className="ml-3">
                        <img src="./splash36.png" alt="Description of your image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className='row'>
        <div className='col-sm-12'>
            <br/>
            <br/>
            <br/>
            <div className='boxProject'>
                <div className="d-flex align-items-center">
                    <div>
                        <h1 style={{color: '#033559'}}>Placeholder</h1>
                        <p style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 20, color: 'black' }}>
                          DevTrex is a business club that strives to teach students about the world of buisness, such as consulting, financial literacy, supply chain... (Website is WIP)
                        </p>
                    </div>
                    <div className="ml-3">
                        <img src="./splash36.png" alt="Description of your image" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </div>
      
      
      
    </div>
    
  );
}

export default ProjectsPage;
