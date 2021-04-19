import React from "react";

//Local stuff.
import "../../styles/main.scss";
import Navigation from "../../components/Navigation";
import CompSciCalcImage from "../../assets/compscicalc_screen_shot.png";

function CompSciCalc() {
  return (
    <div className="comp-sci-calc">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <Navigation />

          <div className="center">
            <h1 className="header-text black-text heavy-font">
              CompSci<br></br>Calculator
              <span className="period">.</span>
            </h1>
          </div>

          <div className="flex-content-a-container">
            <div className="flex-content-a">
              <div className="portfolio-content-b mt-5">
                <p className="blurb-c black-text light-font">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
              <div className="animate-from-right">
                <img
                  className="golden-sum-image"
                  src={CompSciCalcImage}
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

export default CompSciCalc;
