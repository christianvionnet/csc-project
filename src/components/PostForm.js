import React from "react";
import { useState } from "react";
// import { getAllNotes, createNote } from "../services/notes";
import Axios from "axios";

const PostForm = () => {
  const url = "http://localhost:3001/api/notes";

  const initialInfo = { name: "", data: "" };
  const [info, setInfo] = useState(initialInfo);
  const [infos, setInfos] = useState([]);
  const [error, setError] = useState(null);

  const handleInfo = (e) => {
    const newInfo = { ...info };
    newInfo[e.target.id] = e.target.value;
    setInfo(newInfo);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!info.name.trim() || !info.data.trim()) {
      setError("All fields are required.");
      return;
    }
    console.log(info);

    // <createNote information={info} />;
    Axios.post(url, {
      name: info.name,
      data: info.data,
    }).then((response) => {
      console.log(response.info);
    });
    setInfos([...infos, info]);
    setInfo({ name: "", data: "" });
    setError(null);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Queue Management</h1>
      <hr />
      <div className="col-12">
        <form onSubmit={(e) => submit(e)} className="container w-80">
          <input
            id="name"
            onChange={(e) => handleInfo(e)}
            type="text"
            className="form-control mb-2"
            placeholder="Enter Job"
            value={info.name}
          />
          <input
            id="data"
            onChange={(e) => handleInfo(e)}
            type="text"
            className="form-control mb-2"
            placeholder="Enter Data"
            value={info.data}
          />
          {error ? <span className="text-danger">{error}</span> : null}
          <button
            className="btn btn-dark btn-block mx-auto w-100 mt-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <form></form>
    </div>
  );
};

export default PostForm;
