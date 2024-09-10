import React from "react";
import "../components/ProjectSection/ProjectDisplay.css";

const ProjectButton = ({ item, handleSendImg }) => {
  return (
    <>
      <li
        onClick={() =>
          handleSendImg(
            item.image,
            item.title,
            item.projectImages,
            item.projectTags
          )
        }
        className="single-team-item"
      >
        <div>
          <div className="col2 col-image">
            <div className="image proj-img">
              <img
                className="overlay thumbnail lazy entered loaded"
                data-src={item.image}
                src={item.image}
                alt={item.title}
                loading="lazy"
                width="810"
                height="1080"
                data-ll-status="loaded"
              />
              <div className="overlay image-dark"></div>
            </div>
          </div>
          <div className="col-content">
            <h3 className="sP small-listsh3">{item.title}</h3>
            <p className="small-lists sP">
              {item.projectTags.map((tag, index) => (
                <span key={index}>
                  {tag}
                </span>
              ))}
            </p>
            
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectButton;
