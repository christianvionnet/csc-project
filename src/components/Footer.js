import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer position-absolute bottom-0 vw-100">
      <div className="container m-4 d-flex justify-content-around align-items-center">
        <img
          className="col-1 m-2"
          src="https://ocp.cscglobal.com/cdn/gateway/csc/csc_logo_white.svg"
          alt="csc-logo"
        />

        <span className="text-light">
          Copyright ©2022 Corporation Service Company. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
