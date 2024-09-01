import React, { useCallback, useEffect } from "react";
import gsap from "gsap";
import "./Loading.css";

const Loading = ({ isLoading }) => {
  const loaderAnimation = useCallback(() => {
    const tl = gsap.timeline();
    tl.to("#Loaderline1", {
      yPercent: -100,
      delay: 0,
      duration: 0.7,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    })
    .to(
      "#Loaderline3",
      {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.out",
      },
      "-=0.2"
    );
  }, []);

  useEffect(() => {
    if (isLoading) {
      loaderAnimation();
    }
  }, [loaderAnimation, isLoading]);

  return (
    <div className={`loading-container ${isLoading ? "" : "loading-fade-out"}`}>
      <div className="loading-screen">
        <div className="head-text lsht">
          <div className="loader-container">
            <div id="Loaderline1" className="inner-loader-container">
              <h3>PORTFOLLIO.</h3>
              <h3>
                KNNY 24 <span className="orangeColor">©</span>
              </h3>
            </div>
          </div>
          <div className="loader-container">
            <div id="Loaderline3" className="flexSB inner-loader-container">
              <h3 className="sP">DEVELOPER</h3>
              <span className="orangeColor mr1">•</span>
              <h3 className="sP">DESIGNER</h3>
              <span className="orangeColor mr1">•</span>
              <h3 className="sP">CREATOR</h3>
            </div>
          </div>
        </div>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
