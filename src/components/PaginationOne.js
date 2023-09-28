import React, { useState, useEffect } from "react";
import axios from "axios";
import Records from "./Records";
import Pagination from "./Pagination";

const PaginationOne = () => {
  // To hold the actual data
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setData(res.data.slice(0, 100));
        setLoading(false);
      })
      .catch(() => {
        alert("There was an error while retrieving the data");
      });
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);

  return (
    <div className="container mt-5">
      <h2> Simple Pagination Example in React </h2>
      <Records data={currentRecords} />

      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default PaginationOne;
