import React from "react";
import ArrowLink from "./ArrowLink";
import "../components/ProjectSection/ProjectDisplay.css";

const ProjectButton = ({
  item,
  handleSendImg,
  grid3,
}) => {
  return (
    <div>
      <button
        onClick={() =>
          handleSendImg(item.image, item.title, item.projectImages)
        }
        className="project-button"
        style={{ position: "relative" }}
      >
        <div
          className={
            grid3 ? "btn-image-div contact-btn-image-div" : "btn-image-div"
          }
        >
          <img
            src={item.image}
            alt={item.title}
            className="project-image"
            loading="lazy"
          />
          <div className="overlay-base btn-overlay"></div>
          <span className="view-btn fC underline">
            <ArrowLink /> VIEW PROJECT
          </span>
        </div>
        <div className="project-description">
          <h2 className="project-title">{item.title}</h2>
          <ul className="project-tags">
            <li>design</li>
            <li>development</li>
            <li>strategy</li>
          </ul>
        </div>
      </button>
    </div>
  );
};

export default React.memo(ProjectButton);
