import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";
import "./DisplayPage.css";
import CloseSvg from "../../util/CloseSvg";
import ArrowLink from "../../util/ArrowLink";

const DisplayPage = ({ handleOpenDisplay, displayPageData, openDisplay }) => {
  const { displayPageTitle, displayPageDataImages } = displayPageData;
  const displayPageRef = useRef(null);

  useEffect(() => {
    const animation = gsap.to(displayPageRef.current, {
      y: openDisplay ? 0 : "100%",
      duration: 1.1,
      stagger: 0,
      ease: "power4.out",
    });
    return () => animation.kill();
  }, [openDisplay]);
  return (
    <div ref={displayPageRef} data-lenis-prevent className="display-page">
      <div className="flex-header">
        <a target="_blank" href="https://shoe-fang-v-indol.vercel.app/">
          <span className="showmobile job-title underline whiteColor flexSB">
            <ArrowLink /> VIEW LIVE PROJECT
          </span>
        </a>
        <div className="display-page-title">{displayPageTitle}</div>
        <div className="close-header" onClick={handleOpenDisplay}>
          <span className="job-title whiteColor showmobile">close</span>
          <div className="display-page-btn dp-btn">
            <CloseSvg isOpen={openDisplay} />
          </div>
        </div>
      </div>
      <div className="display-page-content">
        <div className="display-page-scroller">
          <div className="display-page-image snap-scroller">
            {displayPageDataImages.map((item, index) => (
              <div className="project-imgs-con fC" key={index}>
                <img
                  className="project-imgs"
                  src={item}
                  alt={`project-${index}`}
                />
              </div>
            ))}
            <div className="project-imgs project-imgs-link">
              <div className="pili fC">
                <a target="_blank" href="https://shoe-fang-v-indol.vercel.app/">
                  <span className="job-title underline whiteColor fC">
                    <ArrowLink /> VIEW LIVE PROJECT
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayPage.propTypes = {
  handleOpenDisplay: PropTypes.func.isRequired,
  displayPageData: PropTypes.shape({
    displayPageTitle: PropTypes.string.isRequired,
    displayPageDataImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  openDisplay: PropTypes.bool.isRequired,
};

export default DisplayPage;
