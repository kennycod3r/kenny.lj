import React, { memo } from "react";

const ProjectButton = memo(({ item, handleSendImg }) => {
  return (
    <div>
      <button
        onClick={() =>
          handleSendImg(item.image, item.title, item.projectImages)
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
        </div>
        <div className="project-description">
          <h2 className="shoefang">{item.title}</h2>
          <ul className="fC">
            <li className="grey-text">design</li>
            <li className="grey-text">development</li>
            <li className="grey-text">strategy</li>
          </ul>
        </div>
      </button>
    </div>
  );
});

export default ProjectButton;
