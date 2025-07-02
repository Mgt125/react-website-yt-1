// Import core React features and hooks
import React, { useState, useEffect } from 'react';
// Import Link component from react-router-dom for internal navigation
import { Link } from 'react-router-dom';
// Import the CSS file for styling the navbar
import './Navbar.css';
// Import a custom Button component
import { Button } from './Button';

function Navbar() {
  // State to track whether the mobile menu icon is clicked (open or closed)
  const [click, setClick] = useState(false);
  // State to determine whether the "Sign Up" button should be shown (for responsive design)
  const [button, setButton] = useState(true);

  // Toggles the menu open/closed
  const handleClick = () => setClick(!click);
  // Closes the mobile menu (used when a nav link is clicked)
  const closeMobileMenu = () => setClick(false);

  // Determines whether to show the "Sign Up" button based on screen width
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false); // Hide button on small screens
    } else {
      setButton(true); // Show button on larger screens
    }
  };

  // Run showButton once on component mount
  useEffect(() => {
    showButton();
  }, []);

  // Add a window resize listener to update button visibility when screen size changes
  window.addEventListener('resize', showButton);

  return (
    // Navigation container
    <nav className='navbar'>
      <div className='navbar-container'>
        {/* Logo that navigates to the home page and closes mobile menu when clicked */}
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          TREK <i className='fab fa-typo3' />
        </Link>    

        {/* Menu icon that toggles between open (X) and closed (hamburger) */}
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'} />
        </div>

        {/* Navigation links list. 'active' class is added if menu is open on mobile */}
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>Services</Link>
          </li>
          <li className='nav-item'>
            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>Products</Link>
          </li>
          <li className='nav-item'>
            {/* This link only appears in the mobile view */}
            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
          </li>
        </ul>

        {/* "Sign Up" button is only shown on larger screens */}
        {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
      </div>
    </nav>
  );
}

// Export the Navbar component so it can be used in other parts of the app
export default Navbar;
