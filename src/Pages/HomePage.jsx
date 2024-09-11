import React, { useState, useCallback, useMemo } from 'react';
import Hero from '../components/hero/Hero';
import Main from '../components/Main/Main';
import ProjectDisplay from '../components/ProjectSection/ProjectDisplay';
import DisplayPage from '../components/displaypage/DisplayPage';
import Services from '../components/MyService/Services';
import TechSection from '../components/Techsec/TechSection';
import sf1 from '../images/sfp.webp';
import sf2 from '../images/sfp2.webp';
import sf3 from '../images/sfp3.webp';
import sf4 from '../images/sf4.webp';
import os1 from '../images/pshot1.webp';
import os2 from '../images/osp.webp';
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
    displayPageLink: '',
    displayPageDataImages: [],
  });

  const handleOpenDisplay = useCallback(() => {
    setOpenDisplay((prevState) => !prevState);
  }, []);



  const hProjectImages = [
    {
      projectImages: [pshot0, sf1, sf2, sf3, sf4],
      image: pshot0,
      title: 'SHOEFANG',
      projectLink: "https://shoe-fang-v-indol.vercel.app/",
      projectTags: ['strategy E-commerce Website', 'design', 'development'],
    },
    {
      projectImages: [vsp1, vsp2],
      image: pshot2,
      title: 'VESPERTINE',
      projectLink: "https://vercel.com/kennycod3rs-projects",
      projectTags: ['Automated Restaurant', 'design', 'development'],
    },
    {
      projectImages: [os1, os2],
      image: pshot1,
      title: 'OSHINOWO STUDIO (REDESIGN)',
      projectLink: "https://oshinowo-studio-ten.vercel.app/",
      projectTags: ['Architecture-Firm', 'design', 'development'],
    },
  ];

  return (
    <div className="flexPage">
      <Hero />
      <Main />
      <ProjectDisplay
        hProjectImages={hProjectImages}
        handleGetImage={(image, title, projectImages, projLink) =>
          setDisplayPageData({
            displayPageDataImg: image,
            displayPageTitle: title,
            displayPageDataImages: projectImages,
            displayPageLink: projLink,
          })
        }
        handleOpenDisplay={handleOpenDisplay}
      />
      <Services />
      <TechSection/>
      <DisplayPage
        openDisplay={openDisplay}
        displayPageData={displayPageData}
        handleOpenDisplay={handleOpenDisplay}
      />
    </div>
  );
};

export default HomePage;
