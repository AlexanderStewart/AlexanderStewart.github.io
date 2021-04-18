import React from "react";

//Local stuff.
import "../styles/main.scss";
import NavigationAbout from "../components/NavigationAbout";

function Home() {
  return (
    <div className="portfolio">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <NavigationAbout />

          <div className="center">
            <h1 className="header-text-b black-text heavy-font">
              About me
              <span className="period">.</span>
            </h1>
          </div>

          <div className="flex-content-a-container">
            <div className="flex-content-a"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
