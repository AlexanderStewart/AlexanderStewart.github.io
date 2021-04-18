import React from "react";

//Local stuff.
import "../styles/main.scss";
import NavigationAbout from "../components/NavigationAbout";

function Home() {
  return (
    <div className="about">
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
            <div className="flex-content-a">
              <p className="blurb black-text light-font">
                I'm a Full Stack Web Developer living in Toronto. I currently
                attend Algonquin College for Computer Programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
