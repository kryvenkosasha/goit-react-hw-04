import Modal from "react-modal";
import './ImageModal.css'

const ImageModal = ({ modalData, onRequestClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <img className="modal-image"  src={modalData} alt="Picture-description" />
    </Modal>
  );
};

export default ImageModal;
