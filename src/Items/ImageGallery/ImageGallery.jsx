import ImageCard from "../ImageCard/ImageCard";
import './ImageGallery.css'

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <ul className="images-list">
      {pictures &&
        pictures.length > 0 &&
        pictures.map((picture) => {
          return (
            <ImageCard
              key={picture.id}
              picture={picture}
              onClick={() => onImageClick(picture)}
            />
          );
        })}
    </ul>
  );
};

export default ImageGallery;
