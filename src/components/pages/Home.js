// Import the core React library
import React from 'react';
// Import global styles
import '../../App.css';
// Import the HeroSection component used on the homepage
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer.js';


// Define the Home component
function Home() {
  return (
    <>
      {/* Render the HeroSection as the main content of the Home page */}
      <HeroSection />

      <Cards />

      <Footer />
    </>
  );
}

// Export the Home component so it can be used in routing
export default Home;
