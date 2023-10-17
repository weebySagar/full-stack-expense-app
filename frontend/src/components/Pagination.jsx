import React from 'react'

const Pagination=({
  previousPage,
  nextPage,
  renderPagination,
  currentPage,
  totalPages,
}) =>{
  return (
    <nav aria-label="pagination-page">
      <ul className="pagination">
        <li className={`page-item ${currentPage == 1 ? "disabled" : ""}`}>
          <button className="page-link" onClick={previousPage}>
            Prev
          </button>
        </li>
        {renderPagination()}
        <li className={`page-item ${currentPage == totalPages ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={nextPage}
            
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination