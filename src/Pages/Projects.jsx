import React, { useState, useCallback } from "react";
import ProjectDisplay from "../components/ProjectSection/ProjectDisplay";
import DisplayPage from "../components/displaypage/DisplayPage";
import projectImg1 from "../images/shoefang1.webp";
import Screenshot from "../images/Screenshot.webp";
import Screenshot2 from "../images/projectss2.webp";
import Screenshot3 from "../images/projectss3.webp";
import pshot0 from "../images/pshot0.webp";
import pshot1 from "../images/pshot1.webp";
import pshot2 from "../images/pshot2.webp";
import pshot4 from "../images/pshot4.webp";

const Projects = () => {
  const pProjectImages = [
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
    {
      projectImages: [pshot4],
      image: pshot4,
      title: "CUSTOMISE PORSCHE",
    },
  ];
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

  const handleGetImage = useCallback((image, title, projectImages) => {
    setDisplayPageData({
      displayPageDataImg: image,
      displayPageTitle: title,
      displayPageDataImages: projectImages,
    });
  }, []);

  return (
    <div className="ProjectDisplaypage">
      <ProjectDisplay
        grid3={true}
        hProjectImages={pProjectImages}
        handleGetImage={handleGetImage}
        handleOpenDisplay={handleOpenDisplay}
      />
      <div>
        <h1 className="headerh2 fC">View all my projects </h1>
        <div className="fStart"><a href="https://github.com/kennycod3r?tab=repositories" target="_blank"><h1 className="orangeColor underline">Github</h1></a>
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>github [#ffffff]</title> <desc>Created with Sketch.</desc>{" "}
            <defs> </defs>{" "}
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              {" "}
              <g
                id="Dribbble-Light-Preview"
                transform="translate(-140.000000, -7559.000000)"
                fill="#ffffff"
              >
                {" "}
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  {" "}
                  <path
                    d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                    id="github-[#ffffff]"
                  >
                    {" "}
                  </path>{" "}
                </g>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg></div>
      </div>
      <DisplayPage
        openDisplay={openDisplay}
        displayPageData={displayPageData}
        handleOpenDisplay={handleOpenDisplay}
      />
    </div>
  );
};

export default Projects;
