// Import the React library to use JSX and create components
import React from 'react';
// Import the Link component from react-router-dom to enable client-side navigation
import { Link } from 'react-router-dom';

// Define a functional component called CardItem that receives props
function CardItem(props) {
    return(
        <>
            {/* List item representing one card */}
            <li className="cards__item">
                {/* Link to navigate to the path provided in props.path */}
                <Link className="cards__item__link" to={props.path}>
                    {/* Image wrapper with a label as a data attribute for styling or display */}
                    <figure className="cards__item__pic-wrap" data-category={props.label}>
                        {/* Card image using the source from props.src */}
                        <img src={props.src} alt="Travel Image" className="cards__item__img"/>
                    </figure>
                    {/* Container for the text info of the card */}
                    <div className="cards__item__info">
                        {/* Display text from props.text */}
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

// Export the component to be used in other parts of the app
export default CardItem;
