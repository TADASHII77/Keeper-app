import React from "react";
import "./Pagination.css";

function Pagination({ notesPerPage, totalNotes, paginate, currentPage }) {
  const totalPages = Math.ceil(totalNotes / notesPerPage);

  return (
    <nav className="pagination-container">
      <ul className="pagination">
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-link"
          >
            Previous
          </button>
        </li>
        <li className="page-item">
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-link"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
