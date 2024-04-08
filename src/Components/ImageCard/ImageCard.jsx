import React from "react";

const ImageCard = ({ picture, onClick }) => {
  return (
    <li key={picture.id}>
      <img
        onClick={onClick}
        src={picture.urls.small}
        alt={picture.alt_description}
      />
    </li>
  );
};

export default ImageCard;
