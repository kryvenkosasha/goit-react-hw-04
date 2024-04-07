import React from "react";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <div onClick={() => onImageClick(image)}>
            <img src={image.urls.small} alt={image.alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
