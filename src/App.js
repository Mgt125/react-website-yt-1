// Importing the core React library
import React from 'react';

// Importing global CSS styles for the app
import './App.css';

// Importing the Navbar component to display the navigation menu
import Navbar from './components/Navbar.js';

// Importing necessary components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing the page components for different routes
import Home from './components/pages/Home.js';
import Services from './components/pages/Services.js';
import Games from './components/pages/Games.js';
import SignUp from './components/pages/SignUp.js';
import Booking from './components/pages/Booking';

// Main App component
function App() {
  return (
    <>
      {/* Wrap the entire app with Router to enable routing */}
      <Router>
        {/* Navbar will be visible on all pages */}
        <Navbar />

        {/* Define app routes for different pages */}
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/games' element={<Games />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/booking' element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

// Export the App component to be rendered in index.js
export default App;
