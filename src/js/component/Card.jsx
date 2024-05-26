import React from "react";
import PropTypes from 'prop-types';



const Card = ({image, text, description}) => {
    return (
      <div className=" card" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{text}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };

  Card.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    }
export default Card