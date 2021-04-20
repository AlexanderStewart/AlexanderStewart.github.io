import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.scss";

function Nav() {
  return (
    <div className="navigation">
      <Link className="link-text black-text light-font" to="/">
        Home
      </Link>
      <br></br>
      <Link className="link-text black-text light-font" to="/portfolio">
        Portfolio
      </Link>
      <br></br>
      <Link className="link-text black-text light-font" to="/about">
        About me
      </Link>
      <br></br>
      <Link className="link-text black-text light-font" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Nav;
