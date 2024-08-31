import React, { useCallback } from "react";
import ProjectButton from "../../util/ProjectButton";
import "./ProjectDisplay.css";
import { Link } from "react-router-dom";

const ProjectDisplay = ({
  handleGetImage,
  handleOpenDisplay,
  grid3,
  hProjectImages,
}) => {
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
        <h1 className="header--two ">
          Selected Works.<span className="o2">02</span>
        </h1>

        <div className={`projectgrid ${grid3 ? "Contactprojectgrid" : ""}`}>
          {hProjectImages.map((item, index) => (
            <ProjectButton
              key={index}
              item={item}
              handleSendImg={handleSendImg}
              grid3={grid3}
            />
          ))}
        </div>
      </div>
      {!grid3 && (
        <div className="phone-btn-div">
          <p className="headerp">click to view more</p>
          <Link to={"CaseStudy"}>
            <button className="phoneBtn fJc">
              <div className="circle fC">
                <div className="box"></div>
              </div>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProjectDisplay;
