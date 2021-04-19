import React, { useEffect } from "react";

//Local stuff.
import "../../styles/main.scss";
import Navigation from "../../components/Navigation";
import CigQuitImage from "../../assets/cig_quit_screen_shot.png";

function CigQuit() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="cig-quit">
      <div className="half-background"></div>
      <div className="horizontally-center-page">
        <div className="main-width">
          <Navigation />

          <div className="center">
            <h1 className="header-text black-text heavy-font">
              CigQuit
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
