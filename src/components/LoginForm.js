import React from "react";
import Togglable from "./Togglable";

const LoginForm = (props) => {
  return (
    <Togglable buttonLabel="Logout">
      <form onSubmit={props.handleSubmit}>
        <div>
          <input
            type="text"
            value={props.userName}
            name="UserName"
            placeholder="Username"
            onChange={props.handleUsernameChange}
          />
        </div>
        <div>
          <input
            type="password"
            value={props.password}
            name="Password"
            placeholder="Password"
            onChange={props.handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </Togglable>
  );
};

export default LoginForm;
