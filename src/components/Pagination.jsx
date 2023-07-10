import React from "react";

function Pagination({
  currentPage,
  totalPages,
  handlePageChange,
  handleToggleShowAllPages,
  showAllPages,
}) {
  const maxVisiblePages = 6;

  const renderPaginationButtons = () => {
    const visiblePages = showAllPages ? totalPages : maxVisiblePages;
    const pageButtons = [];
    const startPage = Math.max(0, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(startPage + visiblePages, totalPages);

    for (let page = startPage; page < endPage; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`mx-1 px-3 py-1 rounded-md ${
            currentPage === page ? "bg-gray-600 text-white" : "bg-gray-300"
          }`}
        >
          {page + 1}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <div className="flex justify-center m-6">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === 0 ? "bg-gray-300" : "bg-blue text-white"
        }`}
        disabled={currentPage === 0}
      >
        Prev
      </button>
      {renderPaginationButtons()}
      {totalPages > maxVisiblePages && !showAllPages && (
        <button
          onClick={handleToggleShowAllPages}
          className="mx-1 px-3 py-1 rounded-md bg-blue text-white"
        >
          ...
        </button>
      )}
      {totalPages > maxVisiblePages && showAllPages && (
        <button
          onClick={handleToggleShowAllPages}
          className="mx-1 px-3 py-1 rounded-md bg-blue text-white"
        >
          Less
        </button>
      )}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className={`mx-1 px-3 py-1 rounded-md ${
          currentPage === totalPages - 1 ? "bg-gray-300" : "bg-blue text-white"
        }`}
        disabled={currentPage === totalPages - 1}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
