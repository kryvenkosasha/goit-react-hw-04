import React from "react";
import Modal from "react-modal";

const ImageModal = ({ selectedImage, onClose }) => {
  return (
    <Modal isOpen={!!selectedImage} onRequestClose={onClose}>
      {selectedImage && (
        <div>
          <img
            src={selectedImage.urls.regular}
            alt={selectedImage.alt_description}
          />
        </div>
      )}
    </Modal>
  );
};

export default ImageModal;
