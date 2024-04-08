import Modal from "react-modal";

const ImageModal = ({ modalData, onRequestClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img  src={modalData} alt="Picture-description" />
    </Modal>
  );
};

export default ImageModal;
