import React from "react";
import { Table } from "react-bootstrap";
import "./record.css";

const Records = ({ data }) => {
  return (
    <table style={{ marginBottom: "1rem" }}>
      <thead>
        <tr>
          {/* <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>City</th> */}
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            {/* <td>{item.id} </td>
                    <td>{item.first_name} </td>
                    <td>{item.last_name} </td>
                    <td>{item.city} </td> */}
            <td>{item.id} </td>
            <td>{item.name} </td>
            <td>{item.email} </td>
            <td>{item.body.substring(0, 20)} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Records;
