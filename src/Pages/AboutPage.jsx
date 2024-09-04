import React from "react";
import AboutMe from "../components/About-me/AboutMe";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <div className="about-nav fC">
        <h1 className="header--two">About Me.</h1>
      </div>
      <div className="whitecontainer">
        <AboutMe />
      </div>
    </div>
  );
};

export default AboutPage;
