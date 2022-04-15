import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./PostForm.css";
import Header from "./Header";
import GetJobs from "./GetJobs";
import loginService from "../services/notes/login";
import noteService from "../services/notes/notes";

const PostForm = () => {
  const url = "http://localhost:3001/api/notes";

  const initialInfo = { name: "", data: "" };
  const [info, setInfo] = useState(initialInfo);
  const [infos, setInfos] = useState([]);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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

    Axios.post(url, {
      name: info.name,
      data: info.data,
    }).then((response) => {
      console.log(response.data);
    });
    setInfos([...infos, info]);
    setInfo({ name: "", data: "" });
    setError(null);
    setSuccess("Job successfully posted!");
    setTimeout(() => {
      setSuccess(null);
    }, 3000);
  };

  const getInfo = () => {
    Axios.get("http://localhost:3001/api/notes").then((response) => {
      console.log(response.data);
    });
  };

  useEffect(() => {
    getInfo();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const user = await loginService.login({
        username,
        password,
      });

      window.localStorage.setItem("loggedNoteAppUser", JSON.stringify(user));

      noteService.setToken(user.token);

      setUser(user);
      setUsername("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
    // loginService;
    console.log("SUBMIT");
  };

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedNoteAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      noteService.setToken(user.token);
    }
  }, []);

  const handleLogout = () => {
    setUser(null);
    noteService.setToken(user.token);
    window.localStorage.removeItem("loggedNoteAppUser");
  };

  const handlePasswordChange = () => {};
  const handleUsernameChange = () => {};

  return (
    <>
      <div className="">
        <Header />
        <hr />
        <GetJobs />

        <div className="row">
          <div className="col-6">
            <h2 className="text-center">Add a new Job</h2>
            <hr />
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
              {success ? <span className="text-success">{success}</span> : null}
              <button
                className="btn btn-csc btn-block mx-auto w-100 mt-2"
                type="submit"
              >
                Post Job
              </button>
            </form>
          </div>
          <div className="col-6">
            <h2 className="text-center">Job queue - Last posts</h2>
            <hr />
            <ul className="list-group">
              {infos.length === 0 ? (
                <h5 className="text-center"> There are no jobs in the list</h5>
              ) : (
                infos.map((item) => (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={item.id}
                  >
                    <span className="text-center">
                      name: {item.name} - data: {item.data}
                    </span>
                    {/* <span className="lead">data: {item.data}</span> */}
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostForm;
