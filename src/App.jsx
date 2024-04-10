import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { requestPicturesQuery } from "./api.js";
import Loader from "./components/Loader/Loader.jsx";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal.jsx";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage.jsx";
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
  const [showLoadMore, setShowLoadMore] = useState(true);

  useEffect(() => {
    if (query.length === 0) return;

    async function fetchPicturesQuery() {
      try {
        setError(false);
        setLoading(true);
        const data = await requestPicturesQuery(query, page);
        setPictures((prev) => [...prev, ...data.results]);
        if (data.total === 0) {
          setError(true);
          setShowLoadMore(false);
          return
        }
        setShowLoadMore(true);

      } catch (error) {
        setError(true);
        setShowLoadMore(false);
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
      {query.length !== 0 && showLoadMore && (
        <LoadMoreBtn onSearchPage={onSearchPage} />
      )}
    </div>
  );
}

export default App;
