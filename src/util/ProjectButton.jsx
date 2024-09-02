import React from "react";
import ArrowLink from "./ArrowLink";
import '../components/ProjectSection/ProjectDisplay.css';

const ProjectButton = ({ item, handleSendImg }) => {
  return (
    <button
      onClick={() =>
        handleSendImg(
          item.image,
          item.title,
          item.projectImages,
          item.projectTags
        )
      }
      className="project-button"
      style={{ position: "relative" }}
    >
      <div className="btn-image-div">
        <img
          src={item.image}
          alt={item.title}
          className="project-image"
          loading="lazy"
        />
        <div className="overlay-base btn-overlay"></div>
        <div className="view-btn fC">
          <span className="vd1">
            {" "}
            <ArrowLink />{" "}
          </span>
          VIEW PROJECT
        </div>
      </div>
      <div className="project-description">
        <h3 className="sP name">{item.title}</h3>
        <ul className="project-tags">
          {item.projectTags.map((item, index) => (
            <li className="sP" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
};

export default ProjectButton;
