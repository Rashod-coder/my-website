import React, { useState, useEffect } from 'react';
import './Home.css'; // Import the home.css file

const Home = () => {
    const [displayText, setDisplayText] = useState('');
    const [aboutMeText, setAboutMeText] = useState('');

    const fullText = 'Welcome to My Website';

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setDisplayText(fullText.substring(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === fullText.length) clearInterval(interval);
        }, 150); // Adjust typing speed as needed

        return () => clearInterval(interval);
    }, []);

    const handleAboutMeChange = (event) => {
        setAboutMeText(event.target.value);
    };

    return (
        <div className="home-page">
            <div className="banner">
                <h1>{displayText}</h1>
                <span className="cursor"></span>
            </div>
            <div>
                <h1>About Me:</h1>
                <div
                    className="about-textbox"
                    
                >

                    <h1>JOOJOOJOOJOOJOOJOOJO 

                        <br/>
                        JOOJOOJOOJOOJOOJOOJO 

                        <br/>
                        JOOJOOJOOJOOJOOJOOJO 

                        <br/>
                        JOOJOOJOOJOOJOOJOOJO 

                        <br/>
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
