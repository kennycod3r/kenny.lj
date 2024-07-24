import "./Hero.css";
import React, { useState, useEffect, useCallback } from "react";
import gsap from "gsap";
import "../../Pages/Pages.css";

const HeroSection = () => {
  const runAnimation = useCallback(() => {
    const tl = gsap.timeline();
    tl.to("#heroHeader", {
      yPercent: -100,
      delay: 1.7,
      duration: 0.5,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    })
      .to(
        "#line1",
        {
          yPercent: -100,
          duration: 0.6,
          ease: "power4.out",
        },
        "-=0.4"
      )
      .to(
        "#line2",
        {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.4"
      )
      .to(
        "#line3",
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.out",
        },
        "-=0.4"
      );
  }, []);

  useEffect(() => {
    runAnimation();
  }, [runAnimation]);

  const [openAvailability, setOpenAvailability] = useState(false);

  function handleOpenAvailability() {
    setOpenAvailability((prevState) => !prevState);
  }

  return (
    <section className="hero-container fJc" role="banner">
      <div className="overlay-base hero-overlay">
        <div className="hero-caption flexStartC">
          <header className="hero-headtext">
            <span className="number o2">00</span>
            <div className="containerAnimate">
              <div className="hero-containerAnimate-div">
                <h1 className="Text_XL__ku5Fh" id="heroHeader">
                  Oguntola Kenny.
                </h1>
              </div>
            </div>
            <div className="arrowdiv showmobile">
              <p className="smallestp whiteColor" id="arrow">
                kenny.lj
              </p>
            </div>
            <div className="oshin-container">
              <div className="headerp smallp whiteColor">
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
          </header>
        </div>
      </div>
      <div className="slide-container" aria-hidden="true"></div>
      <div className="view-hero-header">
        <div className="explore-text">
          <p className="headerp whiteColor">00 - 09</p>
        </div>

        <div className="view-hero-header-details">
          <span className="hidemobile headerp">Web-Creator</span>
          <span className="headerp">Front-End Developer</span>
          <span className="hidemobile headerp">Interactive Designer</span>
        </div>
      </div>
      <div className={openAvailability ? `dd dd-open` : `dd`}>
        <div className="nav-dd">
          <div className="expand-icon  fJc " onClick={handleOpenAvailability}>
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
            <a aria-label="status" href="/ContactPage" className="dd-link">
              <h3 className="headerp">Status</h3>
              <div className="smallestp showmobile">
                Currently available for company hire
              </div>
            </a>
          </div>
          <div className="transparent-div">
            <a aria-label="Save" href="/save" className="dd-link">
              <h3 className="headerp orangeColor available-btn">Available</h3>
              <div className="smallestp showmobile">
                for Freelance projects
                <br />
                From 23, July
              </div>
            </a>
          </div>
          <div className="transparent-div">
            <a aria-label="Invest" href="/invest" className="dd-link">
              <h3 className="headerp">Collaborations</h3>
              <div className="smallestp showmobile">
                currently unavailable.
                <br />
                still contact!
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default React.memo(HeroSection);
