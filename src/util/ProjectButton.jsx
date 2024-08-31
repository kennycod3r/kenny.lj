import React from "react";
import ArrowLink from "./ArrowLink";
import "../components/ProjectSection/ProjectDisplay.css";

const ProjectButton = ({ item, handleSendImg, grid3 }) => {
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
        <div className="view-btn fC">
          <span className="vd1">
            {" "}
            <ArrowLink />{" "}
          </span>
          VIEW PROJECT
        </div>
      </div>
      <div className="project-description">
      <h3 className="headerp name">{item.title}</h3>
        <ul className="project-tags">
          {item.projectTags.map((item, index) => {
            return (
              <li className="smallestp headerp" key={index}>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </button>
  );
};

export default React.memo(ProjectButton);
