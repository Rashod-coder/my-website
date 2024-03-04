import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="footer">
            
            <p className="footer-text">&copy; {currentYear} Rishit Gupta</p>
        </footer>
    );
}

export default Footer;
