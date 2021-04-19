import React from "react";
import { Link } from "react-router-dom";

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
                <Link className="link" to="/golden_sum">
                  <img
                    className="portfolio-content-image shadow"
                    src={GoldenSum}
                    alt="Golden Sum Screenshot"
                  />
                </Link>
                <Link className="link" to="/golden_sum">
                  <h3 className="heavy-font portfolio-item-title">
                    <p className="red-text">Golden Sum</p>
                  </h3>
                </Link>
                <p className="blurb-c black-text light-font">
                  Golden sum is a number puzzle game for Android and IOS. It was
                  built with Flutter and features in-app purchases as well as
                  ads.
                </p>
              </div>
              <div className="portfolio-content">
                <a href="https://alexanderstewart.github.io/circles-web/">
                  <img
                    className="portfolio-content-image"
                    src={Circles}
                    alt="Circles Screenshot"
                  />
                </a>
                <h3 className="heavy-font portfolio-item-title">
                  <a
                    className="red-text"
                    href="https://alexanderstewart.github.io/circles-web/"
                  >
                    Circles
                  </a>
                </h3>
                <p className="blurb-c black-text light-font">
                  Circles is a number puzzle game made for the web that was
                  built with the framework React. Circles (as you can probably
                  tell) is heavily inspired by Golden Sum.
                </p>
              </div>
              <div className="portfolio-content">
                <Link className="link" to="/cig_quit">
                  <img
                    className="portfolio-content-image"
                    src={CigQuit}
                    alt="CigQuit Screenshot"
                  />
                </Link>
                <Link className="link" to="/cig_quit">
                  <h3 className="heavy-font portfolio-item-title">
                    <p className="red-text">CigQuit</p>
                  </h3>
                </Link>
                <p className="blurb-c black-text light-font">
                  CigQuit is a MERN stack web app designed to help motivate
                  users to quick smoking by tracking various smoking metrics.
                </p>
              </div>
            </div>
            <div className="flex-content-b">
              <div className="portfolio-content">
                <a href="https://alexanderstewart.github.io/comp-sci-calculator/#/">
                  <img
                    className="portfolio-content-image"
                    src={CompCalc}
                    alt="CigQuit Screenshot"
                  />
                </a>
                <h3 className="heavy-font portfolio-item-title">
                  <a
                    className="red-text"
                    href="https://alexanderstewart.github.io/comp-sci-calculator/#/"
                  >
                    CompSci
                    <br></br>
                    Calculator
                  </a>
                </h3>
                <p className="blurb-c black-text light-font">
                  CompSciCalculator is a really simple tool to convert between
                  number systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
