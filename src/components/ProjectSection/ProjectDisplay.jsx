import React, { useState, memo } from "react";
import AboutMe from "../About-me/AboutMe";
import Services from "../MyService/Services";
import projectImg1 from "../../images/shoefang1.webp";
import Screenshot from "../../images/Screenshot.webp";
import Screenshot2 from "../../images/projectss2.webp";
import Screenshot3 from "../../images/projectss3.webp";
import ProjectButton from "../../util/ProjectButton";
import "./ProjectDisplay.css";

const images = [
  {
    projectImages: [projectImg1, Screenshot2, Screenshot3],
    image: projectImg1,
    title: "SHOEFANG",
  },
  {
    projectImages: [Screenshot],
    image: Screenshot,
    title: "MOTHER",
  },
  {
    projectImages: [projectImg1],
    image: projectImg1,
    title: "SHOEfANG3",
  },
];

const ProjectDisplay = memo(({ handleGetImage, handleOpenDisplay }) => {
  const [aboutSection, setAboutSection] = useState(false);

  const btnText = aboutSection ? (
    <p className="click-btn">
      Click <br /> to Go back
    </p>
  ) : (
    <p className="click-btn">click to load more</p>
  );

  const handleSendImg = (image, title, projectImages) => {
    handleGetImage(image, title, projectImages);
    handleOpenDisplay();
  };

  return (
    <>
      <div className="project-section">
        <div className="project-wrapper">
          {!aboutSection && (
            <h1 className="header--two">
              Selected Works. <span className="o2">03</span>
            </h1>
          )}
          <div>
            {!aboutSection ? (
              <div className="projectgrid">
                {images.map((item, index) => (
                  <ProjectButton
                    key={index}
                    item={item}
                    handleSendImg={handleSendImg}
                  />
                ))}
              </div>
            ) : (
              <AboutMe />
            )}
          </div>
        </div>
        <div className="phone-btn-div fC">
          <p>Keep Exploring Projects?</p>
          <button
            className="phoneBtn fC"
            onClick={() => setAboutSection(!aboutSection)}
          >
            <div className="circle fC">
              <div className="box"></div>
            </div>
          </button>
          <span className="smallestp">{btnText}</span>
        </div>
      </div>
      <Services />
    </>
  );
});

export default ProjectDisplay;
