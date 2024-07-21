import "./Hero.css";
import React, { useEffect, useCallback } from "react";
import gsap from "gsap";
import "../../Pages/Pages.css";

const HeroSection = () => {
  const runAnimation = useCallback(() => {
    const tl = gsap.timeline();
    tl.to("#heroHeader", {
      yPercent: -100,
      delay: 0.4,
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
                    the world gain their Unfair advantage.
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
    </section>
  );
};

export default React.memo(HeroSection);
