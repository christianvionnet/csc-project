import React from "react";

const Header = () => {
  return (
    <div className="container mt-3">
      <nav className="d-flex justify-center align-items-center">
        <img
          className="col-2"
          src="https://www.cscgfm.com/images/logos/csc-logo-marketing-horizontal-color.svg"
          alt="csc-main-logo"
        />
        <h1 className="text-center col-8"> Queue Management</h1>
      </nav>
    </div>
  );
};

export default Header;
