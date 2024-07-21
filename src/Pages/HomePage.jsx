import React, { useState, useCallback, useMemo } from "react";
import Hero from "../components/hero/Hero.jsx";
import Main from "../components/Main/Main.jsx";
import ProjectDisplay from "../components/ProjectSection/ProjectDisplay.jsx";
import DisplayPage from "../components/displaypage/DisplayPage.jsx";
import ReactImgSvg from "../assets/react.svg";
import javascriptimgSvg from "../assets/javascriptImg.svg";
import scssimgSvg from "../assets/scssImg.svg";
import figmaSvg from "../assets/figma.svg";
import Services from "../components/MyService/Services.jsx";
import "./Pages.css";
import projectImg1 from "../images/shoefang1.webp";
import Screenshot from "../images/Screenshot.webp";
import Screenshot2 from "../images/projectss2.webp";
import Screenshot3 from "../images/projectss3.webp";
import pshot0 from "../images/pshot0.webp";
import pshot1 from "../images/pshot1.webp";
import pshot2 from "../images/pshot2.webp";
import TechSection from "../components/Techsec/TechSection.jsx";

const HomePage = () => {
  const [openDisplay, setOpenDisplay] = useState(false);
  const [displayPageData, setDisplayPageData] = useState({
    displayPageDataImg: "",
    displayPageTitle: "",
    displayPageText: "",
    displayPageDataImages: [],
  });

  const handleOpenDisplay = useCallback(() => {
    setOpenDisplay((prevState) => !prevState);
  }, []);

  const techCardData = useMemo(() => [
    {
      techstackTitle: "REACT",
      techText:
        "As a highly skilled React frontend developer, I excel in creating dynamic and responsive user interfaces with a strong focus on performance and user experience...",
      displayPageImg: ReactImgSvg,
    },
    {
      techstackTitle: "JAVASCRIPT",
      techText:
        "As a proficient JavaScript developer, I bring extensive experience in building robust and scalable web applications...",
      displayPageImg: javascriptimgSvg,
    },
    {
      techstackTitle: "SCSS/SC/GSAP",
      techText:
        "As an adept frontend developer, I specialize in crafting visually appealing and responsive designs using SCSS, CSS, Styled Components, and Bootstrap...",
      displayPageImg: scssimgSvg,
    },
    {
      techstackTitle: "FIGMA",
      techText:
        "With my expertise in Figma, I excel in translating design concepts into functional, responsive interfaces with precision...",
      displayPageImg: figmaSvg,
    },
  ], []);
  const hProjectImages = [
    {
      projectImages: [pshot0, Screenshot2, Screenshot3],
      image: pshot0,
      title: "SHOEFANG",
    },
    {
      projectImages: [Screenshot],
      image: pshot2,
      title: "MOTHER",
    },
    {
      projectImages: [projectImg1],
      image: pshot1,
      title: "SHOEfANG3",
    },
  ];

  return (
    <div className="flexPage">
      <Hero />
      <Main />
      <ProjectDisplay
        hProjectImages={hProjectImages}
        handleGetImage={(image, title, projectImages) =>
          setDisplayPageData({
            displayPageDataImg: image,
            displayPageTitle: title,
            displayPageDataImages: projectImages,
          })
        }
        handleOpenDisplay={handleOpenDisplay}
      />
      <Services />
      <TechSection techCardData={techCardData} />
      <DisplayPage
        openDisplay={openDisplay}
        displayPageData={displayPageData}
        handleOpenDisplay={handleOpenDisplay}
      />
    </div>
  );
};

export default HomePage;
