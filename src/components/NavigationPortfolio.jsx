import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

function Circles() {
  return (
    <div className="navigation">
      <Link className="link" to="/">
        <p className="link-about link-about-b black-text light-font">About</p>
      </Link>
      <Link className="link" to="/portfolio">
        <p className="link-portfolio link-portfolio-b black-text light-font">
          Portfolio
        </p>
      </Link>
    </div>
  );
}

export default Circles;
