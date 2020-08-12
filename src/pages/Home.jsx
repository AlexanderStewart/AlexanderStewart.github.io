import React from "react";
// import { useRef, useLayoutEffect } from "react";

//Local stuff.
import "../styles/main.scss";
import "../styles/lines.scss";
import HeadShot from "../assets/head_shot.png";
import NavigationAbout from "../components/NavigationAbout";

function Home() {
  return (
    <div className="home 1.1">
      <div className="line-a"></div>
      <div className="line-b"></div>
      <div className="line-c"></div>
      <div className="line-d"></div>
      <div className="line-e"></div>
      <div className="line-f"></div>
      <div className="line-g"></div>
      <div className="line-h"></div>

      <div className="half-background"></div>

      <div className="center-page">
        <div className="main-width">
          <div className="space-c"></div>
          <NavigationAbout />
          <div className="flex-content-a-container">
            <div className="flex-content-a">
              <h1 className="header-text black-text heavy-font">
                Hi, I'm<br></br>Alexander<br></br>Stewart
                <span className="period">.</span>
              </h1>

              <div className="head-shot-container">
                <img
                  id="hsc"
                  className="head-shot"
                  src={HeadShot}
                  alt="Alexander Stewart head shot"
                />
              </div>
            </div>
          </div>

          <p className="blurb black-text light-font">
            I'm a front end web developer living in Toronto. I currently attend
            Algonquin College for computer programming.
          </p>

          <p className="blurb-b black-text light-font text-align-right">
            <a href="https://github.com/AlexanderStewart">github</a>
            <br></br>
            <a href="https://www.linkedin.com/in/alexander-stewart-aaa048156/">
              linkedin
            </a>
          </p>
          <div className="space-c"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
