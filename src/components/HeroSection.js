// Import core React library
import React from 'react';
// Import global styles
import '../App.css';
// Import custom Button component
import { Button } from './Button';
// Import specific styles for the HeroSection
import './HeroSection.css';

function HeroSection() {
    return (
        // Main container for the hero section
        <div className='hero-container'>
            {/* Background video that plays automatically, loops, and is muted */}
            <video src="videos/video-2.mp4" autoPlay loop muted />

            {/* Main heading text */}
            <h1>ADVENTURE AWAITS</h1>

            {/* Subheading text */}
            <p>What are you waiting for?</p>

            {/* Container for the call-to-action buttons */}
            <div className='hero-btns'>
                {/* "Get Started" button with outlined style and large size */}
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>

                {/* "Watch Trailer" button with primary style and large size, includes play icon */}
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>
    );
}

// Export the component to be used in other parts of the app
export default HeroSection;
