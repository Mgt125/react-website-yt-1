// Import the core React library
import React from 'react';
// Import CSS styles specific to the Button
import './Button.css';
// Import Link from react-router-dom to navigate to other pages
import { Link } from 'react-router-dom';

// Define acceptable button styles
const STYLES = ['btn--primary', 'btn--outline'];

// Define acceptable button sizes
const SIZES = ['btn--medium', 'btn--large'];

// Export a reusable Button component
export const Button = ({
  children,      // Text or elements inside the button (e.g., "GET STARTED")
  type,          // Button type (e.g., "button", "submit")
  onClick,       // Function to execute when button is clicked
  buttonStyle,   // Style class for the button
  buttonSize     // Size class for the button
}) => {
  // Validate the button style or fall back to the default
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  // Validate the button size or fall back to the default
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    // Wrap button in a Link to make it navigate to the Sign Up page when clicked
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} // Combine base class with validated style and size
        onClick={onClick}  // Attach the click handler
        type={type}        // Set the button type
      >
        {children}         {/* Render the content inside the button */}
      </button>
    </Link>
  );
};