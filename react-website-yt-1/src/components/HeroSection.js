import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      {/* Background video loop */}
      <video src="videos/video-2.mp4" autoPlay loop muted />

      {/* Hero headline and subtext */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>

      {/* Call-to-action buttons */}
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          {/* Link to booking page */}
          <Link to='/booking' style={{ color: 'white', textDecoration: 'none' }}>
            BOOK A GAME
          </Link>
        </Button>

        {/* Secondary button (optional action) */}
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

export default HeroSection;