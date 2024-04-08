import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Axios from "axios";
import SearchBar from "./Components/SearchBar/SearchBar.jsx";
import ImageGallery from "./Components/ImageGallery/ImageGallery.jsx";
import ImageModal from "./Components/ImageModal/ImageModal.jsx";

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page > 1) {
      fetchImages();
    }
  }, [page]);

  const fetchImages = async (query) => {
    // setLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos?query=${query}&page=${page}&client_id=m1_aCrol2RAfZegER2hGtnnENwyk2fMJV8g0UuvwyNs`
      );
      setImages([...images, ...response.data.results]);
    } catch (error) {
    } finally {
      // setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <>
      <SearchBar onSubmit={(query) => fetchImages(query)} />
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={handleImageClick} />
      )}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      {images.length > 0 && <button onClick={handleLoadMore}>Load more</button>}
    </>
  );
};

export default App;
