import "./Hero.css";
import React, { useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import heroImg from "../../images/hello.webp";

const HeroSection = () => {
  const runAnimation = useCallback(() => {
    gsap
      .timeline()
      .to("#heroHeader", {
        yPercent: -100,
        rotate: 0.001,
        delay: 1.7,
        duration: 1.5,
        ease: "power3.out",
      })
      .to(
        "#line1, #line2, #line3",
        {
          yPercent: -100,
          duration: 0.6,
          stagger: 0.1,
          ease: "power4.out",
        },
        "-=0.4"
      );
  }, []);

  useEffect(() => {
    runAnimation();
  }, [runAnimation]);

  const [openAvailability, setOpenAvailability] = useState(false);

  const handleOpenAvailability = () => {
    setOpenAvailability((prevState) => !prevState);
  };

  return (
    <header className="home-header fC" role="banner">
      <div className="personal-image">
        <img src={heroImg} alt="Hero" />
      </div>
      <div className="overlay-base hero-overlay">
        <div className="hero-caption flexStartC">
          <div className="hero-headtext">
            <span className="number o2">00</span>
            <div className="hero-animate">
              <div id="heroHeader">
                <h1 className="Text_XL__ku5Fh">Oguntola Kenny</h1>
              </div>
            </div>
            <div className="arrowdiv showmobile">
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 14 14"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <title>arrow-up-right</title>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Artboard"
                    transform="translate(-1019.000000, -279.000000)"
                    stroke="#FFFFFF"
                    stroke-width="1.5"
                  >
                    <g
                      id="arrow-up-right"
                      transform="translate(1026.000000, 286.000000) rotate(90.000000) translate(-1026.000000, -286.000000) translate(1020.000000, 280.000000)"
                    >
                      <polyline
                        id="Path"
                        points="2.76923077 0 12 0 12 9.23076923"
                      ></polyline>
                      <line x1="12" y1="0" x2="0" y2="12" id="Path"></line>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div className="oshin-container">
              <div className="sP whiteColor">
                <div className="span-container">
                  <span id="line1" className="linehero">
                    — A freelance front-end developer and
                  </span>
                </div>
                <div className="span-container">
                  <span id="line2" className="linehero">
                    web designer helping startups around
                  </span>
                </div>
                <div className="span-container">
                  <span id="line3" className="linehero">
                    the world gain An Unfair advantage.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-container" aria-hidden="true"></div>
      <div className="view-hero-header">
        <div className="explore-text">
          <p className="sP whiteColor">00 - 09</p>
        </div>
        <div className="view-hero-header-details">
          <span className="hidemobile sP">Web-Creator</span>
          <span className="sP">Front-End Developer</span>
          <span className="hidemobile sP">Interactive Designer</span>
        </div>
      </div>
      <div className={openAvailability ? `dd dd-open` : `dd`}>
        <div className="nav-dd">
          <div className="expand-icon fJc" onClick={handleOpenAvailability}>
            <svg
              className={openAvailability ? `spinIcon` : "spinIcon-open"}
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="#f96d3f"
              ></path>
            </svg>
          </div>
          <div className="transparent-div">
            <div className="dd-link">
              <h3 className="sP">Status</h3>
              <div className="sP showmobile">
                Currently available for company hire
              </div>
            </div>
          </div>
          <div className="transparent-div">
            <div className="dd-link">
              <h3 className="sP orangeColor available-btn">Available</h3>
              <div className="sP showmobile">
                for Freelance projects
                <br />
                From 23, July
              </div>
            </div>
          </div>
          <div className="transparent-div">
            <div className="dd-link">
              <h3 className="sP">Collaborations</h3>
              <div className="sP showmobile">
                currently unavailable.
                <br />
                still contact!
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
