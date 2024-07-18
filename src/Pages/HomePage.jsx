import React, { useCallback, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/hero/Hero.jsx";
import Main from "../components/Main/Main.jsx";
import ProjectDisplay from "../components/ProjectSection/ProjectDisplay.jsx";
import DisplayPage from "../components/displaypage/DisplayPage.jsx";
import ReactImgSvg from "../assets/react.svg";
import javascriptimgSvg from "../assets/javascriptImg.svg";
import scssimgSvg from "../assets/scssImg.svg";
import figmaSvg from "../assets/figma.svg";
import "./Pages.css";
import TechSection from "../components/Techsec/TechSection.jsx";

const HomePage = () => {
  const [openDisplay, setOpenDisplay] = useState(false);
  const [displayPageData, setDisplayPageData] = useState({
    displayPageDataImg: "",
    displayPageTitle: "",
    displayPageText: "",
    displayPageDataImages: [],
  });

  const navigate = useNavigate();

  const handleOpenDisplay = useCallback(() => {
    setOpenDisplay((prevState) => !prevState);
  }, []);

  const handleSendTech = useCallback(
    (title, techText, displayPageImg, projectImages) => {
      setDisplayPageData({
        displayPageDataImg: displayPageImg,
        displayPageTitle: title,
        displayPageText: techText,
        displayPageDataImages: projectImages,
      });
      handleOpenDisplay();
    },
    [handleOpenDisplay]
  );

  const techCardData = useMemo(
    () => [
      {
        techstackTitle: "REACT",
        techText:
          "As a highly skilled React frontend developer, I excel in creating dynamic and responsive user interfaces with a strong focus on performance and user experience. With a deep understanding of React's ecosystem, including hooks, state management, and component lifecycle, I efficiently translate complex designs into clean, maintainable code. My expertise in modern frontend technologies, combined with a keen eye for detail and a passion for innovation, enables me to deliver seamless and engaging web applications that consistently exceed client expectations.",
        displayPageImg: ReactImgSvg,
      },
      {
        techstackTitle: "JAVASCRIPT",
        techText:
          "As a proficient JavaScript developer, I bring extensive experience in building robust and scalable web applications. My deep understanding of JavaScript's core principles, coupled with expertise in modern frameworks and libraries, allows me to write clean, efficient, and maintainable code. I excel in problem-solving and debugging, ensuring optimal performance and seamless functionality. My passion for continuous learning and staying updated with the latest industry trends empowers me to deliver innovative solutions that drive business success and enhance user experience.",
        displayPageImg: javascriptimgSvg,
      },
      {
        techstackTitle: "SCSS/SC/GSAP",
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
    ],
    []
  );

  return (
    <div className="flexPage">
      <Hero />
      <Main />
      <ProjectDisplay
        handleGetImage={(image, title, projectImages) =>
          setDisplayPageData({
            displayPageDataImg: image,
            displayPageTitle: title,
            displayPageDataImages: projectImages,
          })
        }
        handleOpenDisplay={handleOpenDisplay}
      />
      <DisplayPage
        openDisplay={openDisplay}
        displayPageData={displayPageData}
        handleOpenDisplay={handleOpenDisplay}
      />
      <TechSection techCardData={techCardData} />
    </div>
  );
};

export default HomePage;

