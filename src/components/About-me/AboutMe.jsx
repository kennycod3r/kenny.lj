import React, { useState } from "react";
import "./AboutMe.css";
import { Link } from "react-router-dom";
import TextAbout from "../../util/TextAbout";

export default function AboutMe() {
  const [openText, setOpenText] = useState(false);

  function handleOpenText() {
    setOpenText((prev) => !prev);
  }

  return (
    <div className="aboutme-pages">
      <div className="aboutherocontainer">
        <div className="about-content-wrapper">
          <TextAbout />
          <div className="pad-20">
            <div className="  p-20 profilegrid">
              <div className="  p-20 proDiv pg1" onClick={handleOpenText}>
                <div className="  p-20 profilediv mediv">
                  <div className="  p-20 overlay-base hero-overlay"></div>
                </div>
                <span className="fJc">Kenny</span>
              </div>
              <div className="p-20 proDiv pg2" onClick={handleOpenText}>
                <div className="  p-20 profilediv syddiv">
                  <div className="  p-20 overlay-base hero-overlay"></div>
                </div>
                <span className="fJc">Sid</span>
              </div>
            </div>
            <div className="  p-20 textexpandDiv">
              <p className="sP">
                {openText
                  ? "Sid from Ice Age is my favorite animated character."
                  : "I began my frontend career in 2019, gaining extensive knowledge and experience. I continually strive to improve and seek new opportunities with future partners."}
              </p>
            </div>
            <div>
              <Link to="/ContactPage">
                <button className="more-button about-btn">
                  <p>Contact me</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="  p-20 mobileBorder">
          <div className="ab-div2">
            <div className="pad-20 about-content-wrapper2">
              <h1 className="fStart fadeIndiv ">
                Front-End Developer<span className="o2">04</span>
              </h1>
              <p className="sP orangeColor">Interactive Developer, Creator</p>
            </div>
            <div className=" pad-20 sP textexpandDiv fadeIndiv">
              Driven by a passion for design and development, I take projects
              from ideation to launch, ensuring a seamless journey that leaves a
              lasting positive impact on both the digital landscape and your
              business.
            </div>
            <div className=" pad-20 sP textexpandDiv fadeIndiv">
              Creating exceptional web experiences is my primary focus. I ensure
              each project evokes a feel-good sensation through meticulous
              attention to detail and user-centric design principles. Outside of
              web development and design, I enjoy listening to The Weeknd and
              spending time with my pups.
            </div>
          </div>
        </div>
      </div>
      <div className="  p-20 about-me-section fadeIndiv"></div>
    </div>
  );
}
