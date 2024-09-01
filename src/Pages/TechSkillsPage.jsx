import React from "react";
import ReactImgSvg from "../assets/react.svg";
import javascriptimgSvg from "../assets/javascriptImg.svg";
import scssimgSvg from "../assets/scssImg.svg";
import figmaSvg from "../assets/figma.svg";
import "./Pages.css";
import webflowSvg from "../assets/webflow.svg";

const TechSkillsPage = () => {
  const techCardData = [
    {
      techstackTitle: "REACT.JS",
      techText:
        "As a highly skilled React frontend developer, I excel in creating dynamic and responsive user interfaces with a strong focus on performance and user experience. With a deep understanding of React's ecosystem, including hooks, state management, and component lifecycle, I efficiently translate complex designs into clean, maintainable code. My expertise in modern frontend technologies, combined with a keen eye for detail and a passion for innovation, enables me to deliver seamless and engaging web applications that consistently exceed client expectations.",
      displayPageImg: ReactImgSvg,
    },
    {
      techstackTitle: "JAVASCRIPT",
      techText:
        "I bring extensive experience in building robust and scalable web applications. My deep understanding of JavaScript's core principles, coupled with expertise in modern frameworks and libraries, allows me to write clean, efficient, and maintainable code. I excel in problem-solving and debugging, ensuring optimal performance and seamless functionality. My passion for continuous learning and staying updated with the latest industry trends empowers me to deliver innovative solutions that drive business success and enhance user experience.",
      displayPageImg: javascriptimgSvg,
    },
    {
      techstackTitle: "SCSS/CSS/STYLED COMPONENT",
      techText:
        "As an adept frontend developer, I specialize in crafting visually appealing and responsive designs using SCSS, CSS, Styled Components, and Bootstrap. My expertise in these styling technologies allows me to create clean, maintainable code and ensure a seamless user experience across devices. With a keen eye for design and a strong understanding of modern web standards, I deliver polished and professional interfaces that elevate any project.",
      displayPageImg: scssimgSvg,
    },
    {
      techstackTitle: "FIGMA",
      techText:
        "With my expertise in Figma, I excel in translating design concepts into functional, responsive interfaces with precision. My ability to quickly learn and adapt to emerging technologies ensures I stay ahead of industry trends, delivering innovative and up-to-date solutions. My commitment to continuous improvement and speed in mastering new tools and frameworks enables me to bring cutting-edge designs to life efficiently and effectively.",
      displayPageImg: figmaSvg,
    },
    {
      techstackTitle: "WEBFLOW",
      techText:
        "As an accomplished frontend developer with expertise in Webflow, I excel in creating visually stunning and highly functional websites. My proficiency in Webflow allows me to design, develop, and deploy responsive websites efficiently, ensuring a seamless user experience. I am quick to learn and adapt to emerging technologies, enabling me to stay at the forefront of web development trends and deliver innovative solutions that exceed client expectations.",
      displayPageImg: webflowSvg,
    },
  ];

  return (
    <div className="tech-skills-page">
      <div>
        <div className="hero-caption">
          
          <div className="hero-headtextt tsheader">
            <p className="number">00</p>
            <h1 className="Text_XL__ku5Fh">
              Rethinking Customer Connections with Your Brand.
            </h1>
          </div>
        </div>
      </div>
      <div>
        <ul className="tech-card-list">
          {techCardData.map((item, index) => {
            return (
              <li key={index} className="tech-card flexDC">
                <img className="iconSvg" src={item.displayPageImg} alt={item.techstackTitle}/>
                <h2 className="headerh2">{item.techstackTitle}</h2>
                <p className="sP">{item.techText}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TechSkillsPage;
