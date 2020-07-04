import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

function Circles() {
  return (
    <div className="navigation">
      <Link className="link" to="/">
        <p className="link-about black-text light-font">About</p>
      </Link>
      <Link className="link" to="/portfolio">
        <p className="link-portfolio black-text light-font">Portfolio</p>
      </Link>
    </div>
  );
}

export default Circles;
