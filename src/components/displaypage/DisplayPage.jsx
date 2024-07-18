import React from "react";
import "./DisplayPage.css";
import CloseSvg from "../../util/CloseSvg";

const DisplayPage = ({ handleOpenDisplay,displayPageData,openDisplay}) => {
  const {
    displayPageTitle,
    displayPageText,
    displayPageDataImg,
    displayPageDataImages,
  } = displayPageData;

  return (
    <div className={`display-page ${openDisplay ? "" : "DisplayPageHide"}`}>
      <div className="display-page-content">
        <div className="flex-header">
          <div className="display-page-title">{displayPageTitle}</div>
          <div className="fC">
            <span className="job-title whiteColor">close</span>
            <button className="display-page-btn" onClick={handleOpenDisplay}>
              <CloseSvg isOpen={openDisplay} />
            </button>
          </div>
        </div>
        <div className="display-page-scroller">
          <div
            className={
              !displayPageText
                ? "display-page-image snap-scroller"
                : "small-img"
            }
          >
            <div></div>
            {displayPageDataImages.map((item, index) => (
              <div className="projectImgss" key={index}>
                <img src={item} alt={"flex-img"} />
              </div>
            ))}
            <div>
              <img src={displayPageDataImg} alt={displayPageTitle} />
            </div>
            <div></div>
          </div>
          {displayPageText && (
            <div className="display-page-text">
              <p className="headerp">{displayPageText}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayPage;
