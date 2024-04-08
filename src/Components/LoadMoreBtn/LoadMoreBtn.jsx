import React from "react";

const LoadMoreBtn = ({ onSearchPage }) => {
  return (
    <button onClick={onSearchPage} type="submit">
      Load more... Load more
    </button>
  );
};

export default LoadMoreBtn;
