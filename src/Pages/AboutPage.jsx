import React from "react";
import AboutMe from "../components/About-me/AboutMe";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <div className="whitecontainer">
        <div className="about-nav fC">
          <div>Circle</div>
          <div>Kenny</div>
        </div>
        <AboutMe />
      </div>
    </div>
  );
};

export default AboutPage;

