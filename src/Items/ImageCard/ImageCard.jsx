import React from "react";
import './ImageCard.css'

const ImageCard = ({ picture, onClick }) => {
  return (
    <li key={picture.id}>
      <img className="image-item"
        onClick={onClick}
        src={picture.urls.small}
        alt={picture.alt_description}
      />
    </li>
  );
};

export default ImageCard;
