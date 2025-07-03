import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='cards'>
      {/* Section title */}
      <h1>Explore Our Gaming Experiences</h1>

      {/* Container for all card items */}
      <div className="cards__container">
        <div className="cards__wrapper">

          {/* First row of cards */}
          <ul className="cards__items">
            <CardItem 
              src="images/VR-img.jpg"
              text="Step into fully immersive worlds with cutting-edge VR gaming. Explore, fight, and play in 360° freedom."
              label="VR Gaming"
              path="/booking"
            />
            <CardItem 
              src="images/Esports-img.jpg"
              text="Sharpen your skills or battle friends in high-stakes esports titles. Competitive setups for serious players."
              label="Esports"
              path="/booking"
            />
          </ul>

          {/* Second row of cards */}
          <ul className="cards__items">
            <CardItem 
              src="images/Party-img.jpg"
              text="Bring the crew. Perfect for couch co-op, chaotic multiplayer, and instant fun with friends."
              label="Party Games"
              path="/booking"
            />
            <CardItem 
              src="images/Solo-img.jpg"
              text="Need some game time to yourself? Play your favorite titles in peace with our solo mode sessions."
              label="Solo Play"
              path="/booking"
            />
            <CardItem 
              src="images/Board-img.jpg"
              text="Unplug and play. Enjoy classic and modern board games — perfect for groups and casual hangouts."
              label="Board Games"
              path="/booking"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;