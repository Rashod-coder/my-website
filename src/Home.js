import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the home.css file

const Home = () => {
    const [displayText, setDisplayText] = useState('');
    const [aboutMeVisible, setAboutMeVisible] = useState(false); // State to control the visibility of "About me"

    const fullText = 'Welcome to My Website';

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === fullText.length) clearInterval(interval);
        }, 150); // Adjust typing speed as needed

        // After some delay, set aboutMeVisible to true to trigger animation
        setTimeout(() => {
            setAboutMeVisible(true);
        }, 1000); // Adjust the delay as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="home-page">
            <div className="banner">
                <h1>{displayText}</h1>
                <span className="cursor"></span>
            </div>
            <div className={`about-section ${aboutMeVisible ? 'show' : ''}`}>
                <div className="small-textbox">
                    <h3>About me</h3>
                </div>
            </div>
        </div>
    );
}

export default Home;
