import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//Local stuff.
import "../styles/main.scss";
import NavigationAbout from "../components/NavigationAbout";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <p className="blurb text-align-left black-text light-font">
                Thanks to a knack for numbers and key role models in my youth,
                over the course of my life I have cultivated a love for all
                things mathematics and programming.
                <br></br>
                <br></br>
                After winning the Waterloo Math Contest in high school, I
                realized my math skills were easily transferable to programming,
                and soon printed my first “Hello World” to the console in a
                computer science course. I grew to love learning programming and
                self taught myself things like Node.js, MongoDB, and React. I
                then went on to study more methodically, taking Computer
                Programming at Algonquin College.
                <br></br>
                <br></br>I love the cerebral challenges that web development
                brings to the table and enjoy tackling those challenges head on.
                If you wish to have me tackle some of those challenges for your
                company, I’d love to hear from you!{" "}
                <Link to="/contact">Contact me.</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
