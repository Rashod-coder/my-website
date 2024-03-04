import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the home.css file

const Home = () => {
    const [displayText, setDisplayText] = useState('');
    const fullText = 'Welcome to My website';

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === fullText.length) clearInterval(interval);
        }, 150); // Adjust typing speed as needed

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="body"> {/* Wrap the content with home-page class */}
            <div className="banner">
                <h1>
                <br/>
                {displayText}
                </h1>
                <span className="cursor"></span> {/* Cursor */}
            </div>
            <h1>About me: !</h1>
        </div>
    );
}

export default Home;
