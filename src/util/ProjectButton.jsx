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
            <div className="image">
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
              <div className="col-tags">
                <div className="tags">
                  <div className="single-tag primary">
                    <span>tag</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-content">
            <h3 className="sP">{item.title}</h3>
            <p className="small">
              {item.projectTags.map((tag, index) => (
                <span className="sP" key={index}>
                  {tag}
                </span>
              ))}
            </p>
            <div className="arrow small border">
              <div className="arrow-fill"></div>
              <div className="arrow-fill-hover"></div>
              <div className="arrow-content">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <polyline
                    points="18 8 18 18 8 18"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                  ></polyline>
                  <line
                    x1="18"
                    y1="18"
                    x2="5"
                    y2="5"
                    fill="none"
                    stroke="#000"
                    strokeMiterlimit="10"
                  ></line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProjectButton;
