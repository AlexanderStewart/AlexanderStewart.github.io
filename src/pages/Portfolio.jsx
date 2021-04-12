import React from "react";

//Local stuff.
import "../styles/main.scss";
import GoldenSum from "../assets/golden_sum.png";
import Circles from "../assets/circles.png";
import CigQuit from "../assets/cig_quit.jpeg";
import CompCalc from "../assets/comp_sci_calc.jpeg";
import NavigationPortfolio from "../components/NavigationPortfolio";

function Home() {
  return (
    <div className="portfolio">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <NavigationPortfolio />

          <div className="center">
            <h1 className="header-text-b black-text heavy-font">
              Here are<br></br>my<br></br>passion<br></br>projects
              <span className="period">.</span>
            </h1>
          </div>

          <div className="flex-content-a-container">
            <div className="flex-content-a">
              <div className="portfolio-content">
                <img
                  className="portfolio-content-image shadow"
                  src={GoldenSum}
                  alt="Golden Sum Screenshot"
                />
                <h2 className="heavy-font">
                  <a
                    className="red-text"
                    href="https://apps.apple.com/us/app/golden-sum-a-math-puzzle-game/id1458212055"
                  >
                    Golden Sum
                  </a>
                </h2>
                <p className="blurb-c black-text light-font">
                  Golden sum is a number puzzle game for Android and IOS. It was
                  built with the UI toolkit Flutter and features in-app
                  purchases as well as ads.
                </p>
              </div>
              <div className="space-b"></div>
              <div className="portfolio-content">
                <img
                  className="portfolio-content-image shadow"
                  src={Circles}
                  alt="Circles Screenshot"
                />
                <h2 className="heavy-font">
                  <a
                    className="red-text"
                    href="https://alexanderstewart.github.io/circles-web/"
                  >
                    Circles
                  </a>
                </h2>
                <p className="blurb-c black-text light-font">
                  Circles is a number puzzle game made for the web that was
                  built with the framework React. Circles (as you can probably
                  tell) is heavily inspired by Golden Sum.
                </p>
              </div>
              <div className="space-b"></div>
              <div className="portfolio-content">
                <img
                  className="portfolio-content-image"
                  src={CigQuit}
                  alt="CigQuit Screenshot"
                />
                <h2 className="heavy-font">
                  <a className="red-text" href="https://cigquit.org/">
                    CigQuit
                  </a>
                </h2>
                <p className="blurb-c black-text light-font">
                  CigQuit is a web app designed to help motivate you to quick
                  smoking by tracking various smoking metrics.
                </p>
              </div>
            </div>
            <div className="flex-content-b">
              <div className="portfolio-content">
                <img
                  className="portfolio-content-image"
                  src={CompCalc}
                  alt="CigQuit Screenshot"
                />
                <h2 className="heavy-font">
                  <a
                    className="red-text"
                    href="https://alexanderstewart.github.io/comp-sci-calculator/#/"
                  >
                    CompSciCalculator
                  </a>
                </h2>
                <p className="blurb-c black-text light-font">
                  A really simple tool to convert between number systems.
                </p>
              </div>
            </div>
          </div>

          <div className="space-a"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
