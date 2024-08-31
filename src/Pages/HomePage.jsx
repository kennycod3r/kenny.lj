import React, { useState, useCallback, useMemo } from 'react';
import Hero from '../components/hero/Hero';
import Main from '../components/Main/Main';
import ProjectDisplay from '../components/ProjectSection/ProjectDisplay';
import DisplayPage from '../components/displaypage/DisplayPage';
import TechSection from '../components/Techsec/TechSection';
import Services from '../components/MyService/Services';
import ReactImgSvg from '../assets/react.svg';
import javascriptImgSvg from '../assets/javascriptImg.svg';
import scssImgSvg from '../assets/scssImg.svg';
import figmaSvg from '../assets/figma.svg';
import sf1 from '../images/sf1.webp';
import sf2 from '../images/sf2.webp';
import sf3 from '../images/sf3.webp';
import sf4 from '../images/sf4.webp';
import os1 from '../images/os1.webp';
import os2 from '../images/os2.webp';
import vsp1 from '../images/vsp1.webp';
import vsp2 from '../images/vsp2.webp';
import pshot0 from '../images/pshot0.webp';
import pshot1 from '../images/pshot1.webp';
import pshot2 from '../images/pshot2.webp';
import './Pages.css';

const HomePage = () => {
  const [openDisplay, setOpenDisplay] = useState(false);
  const [displayPageData, setDisplayPageData] = useState({
    displayPageDataImg: '',
    displayPageTitle: '',
    displayPageText: '',
    displayPageDataImages: [],
  });

  const handleOpenDisplay = useCallback(() => {
    setOpenDisplay((prevState) => !prevState);
  }, []);

  const techCardData = useMemo(() => [
    {
      techstackTitle: 'REACT',
      techText: 'As a highly skilled React frontend developer, I excel in creating dynamic and responsive user interfaces with a strong focus on performance and user experience...',
      displayPageImg: ReactImgSvg,
    },
    {
      techstackTitle: 'JAVASCRIPT',
      techText: 'As a proficient JavaScript developer, I bring extensive experience in building robust and scalable web applications...',
      displayPageImg: javascriptImgSvg,
    },
    {
      techstackTitle: 'SCSS/SC/GSAP',
      techText: 'As an adept frontend developer, I specialize in crafting visually appealing and responsive designs using SCSS, CSS, Styled Components, and Bootstrap...',
      displayPageImg: scssImgSvg,
    },
    {
      techstackTitle: 'FIGMA',
      techText: 'With my expertise in Figma, I excel in translating design concepts into functional, responsive interfaces with precision...',
      displayPageImg: figmaSvg,
    },
  ], []);

  const hProjectImages = [
    {
      projectImages: [pshot0, sf1, sf2, sf3, sf4],
      image: pshot0,
      title: 'SHOEFANG',
      projectTags: ['Basic E-commerce Website', 'design', 'development'],
    },
    {
      projectImages: [vsp1, vsp2],
      image: pshot2,
      title: 'VESPERTINE',
      projectTags: ['Automated Restaurant', 'design', 'development'],
    },
    {
      projectImages: [os1, os2],
      image: pshot1,
      title: 'OSHINOWO STUDIO (REDESIGN)',
      projectTags: ['Architecture-Firm', 'design', 'development'],
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
