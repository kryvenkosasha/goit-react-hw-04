import React from "react";

const LoadMoreBtn = ({ onSearchPage }) => {
  return (
    <button className="search-button" onClick={onSearchPage} type="submit">
      Load more
    </button>
  );
};

export default LoadMoreBtn;
