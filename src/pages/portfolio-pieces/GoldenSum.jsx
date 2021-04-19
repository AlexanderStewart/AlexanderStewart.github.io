import React from "react";

//Local stuff.
import "../../styles/main.scss";
import Navigation from "../../components/Navigation";
import GoldenSumImage from "../../assets/golden_sum_screen_shot.png";

function GoldenSum() {
  return (
    <div className="golden-sum">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <Navigation />

          <div className="center">
            <h1 className="header-text black-text heavy-font">
              Golden Sum
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
                  Golden Sum features in-app purchases and ads. It has 100
                  uniquely crafted levels.
                  <br></br>
                  <br></br>
                  View Golden Sum on the{" "}
                  <a href="https://apps.apple.com/us/app/golden-sum-a-math-puzzle-game/id1458212055">
                    IOS
                  </a>{" "}
                  or{" "}
                  <a href="https://play.google.com/store/apps/details?id=com.goldensum&hl=en_CA&gl=US">
                    Android
                  </a>{" "}
                  store.
                </p>
              </div>
              <div className="animate-from-right">
                <img
                  className="golden-sum-image"
                  src={GoldenSumImage}
                  alt="Golden Sum Screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GoldenSum;
