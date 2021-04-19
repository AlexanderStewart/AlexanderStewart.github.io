import React from "react";

//Local stuff.
import "../../styles/main.scss";
import Navigation from "../../components/Navigation";

function Home() {
  return (
    <div className="about">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <Navigation />

          <div className="center">
            <h1 className="header-text-b black-text heavy-font">
              Golden <span className="period">Sum</span>
            </h1>
          </div>

          <div className="flex-content-a-container">
            <div className="blurb flex-content-a">
              <h1>Hello World</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
