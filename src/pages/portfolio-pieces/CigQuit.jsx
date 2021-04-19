import React from "react";

//Local stuff.
import "../../styles/main.scss";
import Navigation from "../../components/Navigation";
import CigQuitImage from "../../assets/cig_quit_screen_shot.png";

function CigQuit() {
  return (
    <div className="cig-quit">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <Navigation />

          <div className="center">
            <h1 className="header-text-b black-text heavy-font">
              CigQuit
              <span className="period">.</span>
            </h1>
          </div>

          <div className="flex-content-a-container">
            <div className="flex-content-a">
              <div className="portfolio-content-b mt-5">
                <p className="blurb-c black-text light-font">
                  Golden Sum is a free math based puzzle game played on a 5x5
                  grid. The purpose of the game is to add the green circles to
                  fill in the Gold circle with its number.
                  <br></br>
                  <br></br>
                  Golden Sum was made with the UI toolkit Flutter. What appealed
                  to me about Flutter is you can develop for both Android and
                  IOS with a single code base.
                  <br></br>
                  <br></br>
                  Golden Sum features in-app purchases and ads. It features 100
                  levels.
                </p>
              </div>
              <div>
                <img
                  className="golden-sum-image"
                  src={CigQuitImage}
                  alt="Cig Quit Screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CigQuit;
