import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";

const renderdata = (data) => {
  return (
    <ul>
      {data.map((todo, indx) => {
        return <li key={indx}>{todo?.title}</li>;
      })}
    </ul>
  );
};

const PaginationTwo = () => {
  const [data, setData] = useState([]);
  //   const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsperpage, setItemsperpage] = useState(5);

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxpageNumberLimit, setMaxpageNumberLimit] = useState(5);
  const [minpageNumberLimit, setMinpageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(data?.length / itemsperpage); i++) {
    pages.push(i);
  }

  const indexOfLastRecord = currentPage * itemsperpage;
  const indexOfFirstRecord = indexOfLastRecord - itemsperpage;
  const currentItems = data.slice(indexOfFirstRecord, indexOfLastRecord);

  const renderPageNumbers = pages.map((page) => {
    if (page < maxpageNumberLimit + 1 && page > minpageNumberLimit) {
      return (
        <>
          <li
            key={page}
            id={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </li>
        </>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setData(res.data);
        // setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const handlenextPage = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxpageNumberLimit) {
      setMaxpageNumberLimit(maxpageNumberLimit + pageNumberLimit);
      setMinpageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
  };
  const handleprevPage = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxpageNumberLimit(maxpageNumberLimit - pageNumberLimit);
      setMinpageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };

  let incrementButton = null;
  if (pages?.length > maxpageNumberLimit) {
    incrementButton = <li onClick={handlenextPage}>&hellip;</li>;
  }

  let decrementButton = null;
  if (minpageNumberLimit >= 1) {
    decrementButton = <li onClick={handleprevPage}>&hellip;</li>;
  }
  return (
    <div>
      {renderdata(currentItems)}
      <ul className="pagenumbers">
        <li>
          <button onClick={handleprevPage}>Prev</button>
        </li>
        {decrementButton}
        {renderPageNumbers}
        {incrementButton}
        <li>
          <button onClick={handlenextPage}>Next</button>
        </li>
      </ul>
    </div>
  );
};

export default PaginationTwo;
