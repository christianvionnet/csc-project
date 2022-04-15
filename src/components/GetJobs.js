import React from "react";
import { useState } from "react";

const GetJobs = () => {
  const [status, setStatus] = useState(null);
  const url = "http://localhost:3001/api/notes";
  const statusUrl = "http://localhost:3001/api/notes?status=";

  return (
    <div className="container col-8 mb-5">
      <h1 className="text-center mb-3">Get registers</h1>
      <hr />
      <div className="d-flex justify-content-center align-items-center">
        <div className="col-6">
          <button className="btn btn-csc mx-2 p-0">
            <a className="link-light nav-link" href={url} target="_blank">
              Get all posts
            </a>
          </button>
        </div>
        <div className="col-6 d-flex justify-content-end align-items-center ">
          <select onChange={(e) => setStatus(e.target.value)}>
            <option value="">Please select a status</option>
            <option value="pending">Pending</option>
            <option value="processed">Processed</option>
          </select>
          <button className="btn btn-csc p-0 mx-2" type="submit">
            <a
              className="link-light nav-link"
              href={statusUrl + status}
              target="_blank"
            >
              Get posts by status
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetJobs;
