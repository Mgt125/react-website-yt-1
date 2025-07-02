// Importing the core React library
import React from 'react';

// Importing global CSS styles for the app
import './App.css';

// Importing the Navbar component to display the navigation menu
import Navbar from './components/Navbar.js';

// Importing necessary components from react-router-dom for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing the Home page component
import Home from './components/pages/Home.js';

// Main App component
function App() {
  return (
    <>
      {/* Router wraps the app to enable client-side routing */}
      <Router>
        {/* Navbar component is displayed on all pages */}
        <Navbar />
        
        {/* Define the different routes/pages of the app */}
        <Routes>
          {/* Route for the home page ('/') */}
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

// Export the App component so it can be used in index.js
export default App;
