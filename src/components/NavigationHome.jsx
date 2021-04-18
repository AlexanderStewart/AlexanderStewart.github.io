import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

function Nav() {
  return (
    <div className="navigation">
      <Link className="link" to="/">
        <p className="link-text link-underline black-text light-font">Home</p>
      </Link>
      <Link className="link" to="/portfolio">
        <p className="link-text black-text light-font">Portfolio</p>
      </Link>
      <Link className="link" to="/about">
        <p className="link-text black-text light-font">About</p>
      </Link>
    </div>
  );
}

export default Nav;
