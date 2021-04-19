import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useRef, useLayoutEffect } from "react";

//Local stuff.
import "../styles/main.scss";
import "../styles/lines.scss";
import HeadShot from "../assets/head_shot.png";
import NavigationHome from "../components/NavigationHome";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home">
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
          <NavigationHome />
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
            I'm a Full Stack Web Developer living in Toronto. I currently attend
            Algonquin College for Computer Programming.{" "}
            <Link to="/about">Learn more about me.</Link>
          </p>

          <p className="blurb-b black-text light-font text-align-right">
            <a href="https://www.linkedin.com/in/alexander-stewart-aaa048156/">
              Resume
            </a>
            <br></br>
            <a href="https://github.com/AlexanderStewart">GitHub</a>
            <br></br>
            <a href="https://www.linkedin.com/in/alexander-stewart-aaa048156/">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
