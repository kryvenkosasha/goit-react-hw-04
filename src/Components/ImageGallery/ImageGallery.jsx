import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ pictures, onImageClick }) => {
  return (
    <ul >
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
