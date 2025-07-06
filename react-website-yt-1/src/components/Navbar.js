import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  // Track if the mobile menu is open
  const [click, setClick] = useState(false);

  // Track whether to show the "Sign Up" button (desktop only)
  const [button, setButton] = useState(true);

  // Toggle mobile menu open/close
  const handleClick = () => setClick(!click);

  // Close mobile menu when a link is clicked
  const closeMobileMenu = () => setClick(false);

  // Show or hide the button based on screen width
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false); // Hide button on small screens
    } else {
      setButton(true); // Show button on wider screens
    }
  };

  // Check screen width once on mount
  useEffect(() => {
    showButton();
  }, []);

  // Re-check screen width on resize
  window.addEventListener('resize', showButton);

  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* App logo linking to homepage */}
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          GameRoom <i className='fab fa-typo3' />
        </Link>

        {/* Hamburger menu icon for mobile */}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
        </div>

        {/* Navigation links */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
          </li>
          <li className='nav-item'>
            <Link to='/games' className='nav-links' onClick={closeMobileMenu}>Games</Link>
          </li>
          <li className='nav-item'>
            <Link to='/user-bookings' className='nav-links' onClick={closeMobileMenu}>Bookings</Link>
          </li>
          <li className='nav-item'>
            {/* Sign-up link visible only in mobile menu */}
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
          </li>
        </ul>

        {/* Sign-up button shown only on desktop view */}
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
  );
}

export default Navbar;
