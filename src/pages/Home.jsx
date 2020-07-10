import React from "react";

//Local stuff.
import "../styles/main.scss";
import HeadShot from "../assets/head_shot.png";
import NavigationAbout from "../components/NavigationAbout";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="center-page">
          <div className="main-width">
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
              I'm a front end web developer living in Toronto. I currently
              attend Algonquin College for computer programming.<br></br>
              <br></br>
              Here is my github:{" "}
              <a href="https://github.com/AlexanderStewart">
                github.com/AlexanderStewart
              </a>
              <br></br>
              Here is my linkedin:{" "}
              <a href="https://www.linkedin.com/in/alexander-stewart-aaa048156/">
                www.linkedin.com/in/alexander-stewart-aaa048156/
              </a>
            </p>
            <div className="space-a"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
