import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">&copy; {currentYear} Rishit Gupta</p>
                <a href="#" className="footer-link" onClick={scrollToTop}>
                    <p className="footer-text">Home</p>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
