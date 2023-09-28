import React from "react";
import "./pagination.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      {/* <ul className="pagination justify-content-center">
        <li className="page-item">
          <a className="page-link" onClick={prevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="page-link"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-link" onClick={nextPage} href="#">
            Next
          </a>
        </li>
      </ul> */}

      <div class="pagination">
        <a href="#" onClick={prevPage}>
          &laquo;
        </a>
        {pageNumbers.map((pgNumber) => (
          <a
            key={pgNumber}
            className={`page-item ${currentPage == pgNumber ? "active" : ""} `}
            onClick={() => setCurrentPage(pgNumber)}
          >
            {pgNumber}
          </a>
        ))}
        <a href="#" onClick={nextPage}>
          &raquo;
        </a>
      </div>
    </nav>
  );
};

export default Pagination;
