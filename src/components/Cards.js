// Import React library to use JSX and create components
import React from 'react';
// Import the CardItem component which renders individual card content
import CardItem from './CardItem';
// Import the CSS styling for the Cards component
import './Cards.css';

// Define a functional component called Cards
function Cards() {
  return (
    // Main container for all card content
    <div className='cards'>
        {/* Heading text for the section */}
        <h1>Check out these EPIC Destinations!</h1>

        {/* Outer container for layout structure */}
        <div className="cards__container">
            {/* Inner wrapper to control layout and responsiveness */}
            <div className="cards__wrapper">

                {/* First row of card items */}
                <ul className="cards__items">
                    {/* Each CardItem represents a single destination card with props */}
                    <CardItem 
                        src="images/img-9.jpg" 
                        text="Explore the hidden waterfall inside the amazon jungle"
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-2.jpg" 
                        text="Travel through the island of Bali in a private cruise"
                        label='Luxury'
                        path='/services'
                    />
                </ul>

                {/* Second row of card items */}
                <ul className="cards__items">
                    <CardItem 
                        src="images/img-3.jpg" 
                        text="Set sail in the Atlantic Ocean's uncharted waters"
                        label='Mystery'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-4.jpg" 
                        text="Experience football on top of mountains"
                        label='Adventure'
                        path='/services'
                    />
                    <CardItem 
                        src="images/img-8.jpg" 
                        text="Ride through the Sahara Desert on a camel tour"
                        label='Adventure'
                        path='/services'
                    />
                </ul>
            </div>
        </div>
    </div>
  )
}

// Export the Cards component to be used in other parts of the app
export default Cards;
