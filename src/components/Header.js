import React from "react";
import LoginForm from "./LoginForm";

const Header = (props) => {
  console.log("props: ", props);
  return (
    <div className="container mt-3">
      <nav className="d-flex justify-center align-items-center">
        <img
          className="col-2"
          src="https://www.cscgfm.com/images/logos/csc-logo-marketing-horizontal-color.svg"
          alt="csc-main-logo"
        />
        <h1 className="text-center col-8"> Queue Management</h1>
        {/* <LoginForm />; */}
      </nav>
    </div>
  );
};

export default Header;
