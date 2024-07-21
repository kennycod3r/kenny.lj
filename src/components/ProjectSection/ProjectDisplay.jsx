import React, { useState, useCallback } from "react";
import AboutMe from "../About-me/AboutMe";
import ProjectButton from "../../util/ProjectButton";
import "./ProjectDisplay.css";

const ProjectDisplay = ({
  handleGetImage,
  handleOpenDisplay,
  grid3,
  hProjectImages,
}) => {
  const [aboutSection, setAboutSection] = useState(false);

  const handleSendImg = useCallback(
    (image, title, projectImages) => {
      handleGetImage(image, title, projectImages);
      handleOpenDisplay();
    },
    [handleGetImage, handleOpenDisplay]
  );

  return (
    <div className="project-section">
      <div className="project-wrapper">
        {!aboutSection && (
          <h1 className="header--two">
            Selected Works. <span className="o2">02</span>
          </h1>
        )}
        <div>
          {!aboutSection ? (
            <div
              className={
                !grid3 ? "projectgrid " : " projectgrid Contactprojectgrid"
              }
            >
              {hProjectImages.map((item, index) => (
                <ProjectButton
                  key={index}
                  item={item}
                  handleSendImg={handleSendImg}
                  grid3={grid3}
                />
              ))}
            </div>
          ) : (
            <AboutMe />
          )}
        </div>
      </div>
      {!grid3 && (
        <div className="phone-btn-div">
          <p>Keep Exploring Projects?</p>
          <button
            className="phoneBtn fJc"
            onClick={() => setAboutSection(!aboutSection)}
          >
            <div className="circle fC">
              <div className="box"></div>
            </div>
          </button>
          <span className="toggle-text">
            {aboutSection ? "Click to Go back" : "Click to load more"}
          </span>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProjectDisplay);
