import React from "react";
import "../components/ProjectSection/ProjectDisplay.css";

const ProjectButton = ({ item, handleSendImg }) => {
  return (
    <div
      onClick={() =>
        handleSendImg(
          item.image,
          item.title,
          item.projectImages,
          item.projectTags
        )
      }
      className="project-button"
    >
      <div className="btn-image-div">
        <img
          src={item.image}
          alt={item.title}
          className="project-image"
          loading="lazy"
        />
      </div>
      <div className="product-description">
        <h3 className="sP name">{item.title}</h3>
        <div className="product-dis-list fC">
          {item.projectTags.map((tag, index) => (
            <div className="sP" key={index}>
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectButton;
