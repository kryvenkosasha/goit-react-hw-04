import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { requestPicturesQuery } from "./api.js";
import Loader from "./Components/Loader/Loader";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import SearchBar from "./Components/SearchBar/SearchBar";
import LoadMoreBtn from "./Components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./Components/ImageModal/ImageModal.jsx";
import Modal from "react-modal";

Modal.setAppElement;

function App() {
  const [pictures, setPictures] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchPicturesQuery() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestPicturesQuery(query, page);
        setPictures((prev) => [...prev, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPicturesQuery();
  }, [query, page]);

  const onSearchBar = (name) => {
    setQuery(name);
    setPictures([]);
    setPage(1);
  };

  const onSearchPage = () => {
    setPage((page) => page + 1);
  };

  const openModal = (picture) => {
    setModalData(picture.urls.regular);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalData(null);
    setModalIsOpen(false);
  };

  return (
    <div>
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        modalData={modalData}
      />
      <SearchBar onSearchBar={onSearchBar} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {pictures && (
        <ImageGallery pictures={pictures} onImageClick={openModal} />
      )}
      {query.length !== 0 && <LoadMoreBtn onSearchPage={onSearchPage} />}
    </div>
  );
}

export default App;
