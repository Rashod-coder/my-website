// Home.js
import React from 'react';


const ContactPage = () => {
  return (
    <div>
    <h1 className="text-center" style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 'bold', fontSize: 50, color: 'white'}}>Socials</h1>
    <p style={{color: '#75C3FB'}}>Feel free to reach out to me</p>
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-auto'>
          <div className='equalBox'>Instagram
          <br/>
          
          <a href="https://github.com/Rashod-coder" target="_blank" rel="noopener noreferrer">

          <img src="./instagram.png" alt="Github Logo" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </a>

         
          </div>
        </div>
        <div className='col-auto'>
          <div className='equalBox'>E-mail
          <a href="mailto:rishit56700@gmail.com">
          <img src="./emails.png" alt="Github Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </a>
          </div>
        </div>
        <div className='col-auto'>
          <div className='equalBox'>Linkdein
          <br/>
          <a href="https://www.linkedin.com/in/rishit-gupta-8623752b4/" target="_blank" rel="noopener noreferrer">

          <img src="./link.png" alt="Github Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
          </a>
          </div>
        </div>
        <div className='col-auto'>
          <div className='equalBox'>Github
          <a href="https://github.com/Rashod-coder" target="_blank" rel="noopener noreferrer">

          <img src="./github.png" alt="Github Logo" style={{ maxWidth: '80%', maxHeight: '80%' }} />
          </a>
          </div>
        </div>
        <div className='col-auto'>
          <div className='equalBox'>Placeholder 5</div>
        </div>
        <div className='col-auto'>
          <div className='equalBox'>Placeholder 6</div>  
        </div>
        <br/>
        <p></p>
        <p></p>
      </div>
    </div>
</div>


  );
}

export default ContactPage;
