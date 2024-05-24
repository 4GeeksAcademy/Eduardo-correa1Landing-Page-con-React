import React from "react";

const Cards = ({image, text, description}) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{text}</p>
          <p className="card-description">{description}</p>
        </div>
      </div>
    );
  };

export default Cards