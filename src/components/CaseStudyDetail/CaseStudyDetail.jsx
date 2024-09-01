import React from "react";
import { useParams } from "react-router-dom";
import "./CaseStudydis.css";
import heroImg1 from "../../images/projecthero.webp";
import frame1 from "../../images/Frame1.webp";
import frame2 from "../../images/Frame2.webp";
import frame3 from "../../images/Frame3.webp";
import frame4 from "../../images/Frame4.webp";

import sf1 from "../../images/projecthero2.webp";
import sf2 from "../../images/sfp.webp";
import sf3 from "../../images/sfp2.webp";
import sf4 from "../../images/sfp3.webp";

import osp from "../../images/osp.webp";
import othersimg from "../../images/others.webp";
import CardAnimation from "../HeaderText/CardCom";

const CaseStudyDetail = () => {
  const { caseStudyId } = useParams(); // Updated parameter name

  const caseStudies = {
    1: {
      title: "Skincare E-commerce Project",
      description: "A demo skincare web app",
      para1: `One of the significant challenges was to design and develop a user-friendly,
      visually appealing website that allowed users to shop and
      access information quickly and easily. The project required creating a seamless digital shopping experience
      that was both intuitive and visually compelling.`,
      para2: `To overcome these challenges, I employed extensive research into React Router, useParams, and useContext
      to manage data flow efficiently. I focused on creating a robust state management system that minimized re-renders and enhanced user experience. 
      I also implemented lazy loading and optimized image rendering techniques to improve load times, especially on mobile devices.
      The result was a highly optimized and responsive e-commerce platform that significantly boosted user engagement and sales conversion rates.`,
      img1: heroImg1,
      img2: frame1,
      img3: frame2,
      img4: frame3,
      img5: frame4,
      bgColor:"#eeddc",
    },
    2: {
      title: "Sneakers E-commerce Project",
      description: "A demo sneakers web app",
      para1: `The challenge in this project was to create a responsive grid rendering system that 
      could dynamically adjust product displays across various devices. Additionally, I had to design 
      a system that streamlined the shopping process by allowing users to add items to their cart directly from the main page.`,
      para2: `I tackled this by implementing a custom grid layout using CSS Grid and Flexbox for a more 
      dynamic and fluid design. I also optimized the rendering process by using memoization and React's 
      useCallback to prevent unnecessary re-renders. Moreover, I integrated Redux to manage the application state, 
      ensuring that the cart updates were handled smoothly and efficiently. This resulted in a faster, 
      more user-friendly shopping experience that contributed to a notable increase in conversion rates.`,
      img1: sf1,
      img3: sf2,
      img4: sf3,
      img5: sf4,
      bgColor:"ffff",
    },
    3: {
      title: "Oshinowo Studios",
      description: "An Architectural Website",
      para1: `The primary challenge was to redesign the website for a top architectural firm with a 
      focus on aesthetics and functionality. The website needed to reflect the firm's high-end design philosophy 
      while ensuring that potential clients could easily access information and contact the firm.`,
      para2: `I approached this by first conducting a thorough UX/UI audit to identify pain points in the existing design. 
      Then, I employed modern design principles, including a minimalist layout and high-quality imagery, to create a visually 
      stunning website. The contact form was optimized using form validation techniques and AJAX for seamless data submission, 
      enhancing user experience. Additionally, I implemented responsive design techniques to ensure the website performed well 
      on all devices, which led to increased client inquiries.`,
      img1: osp,
      img3: osp,
    },
    4: {
      title: "Other Simple Web Apps",
      description: "A collection of various demo web apps",
      para1: `These projects involved creating simple, functional web applications that focused on clean design and ease of use.`,
      para2: `I applied my knowledge of React and CSS to build these applications, optimizing for performance by reducing bundle size, 
      implementing code splitting, and ensuring accessibility standards were met. Each application was built with scalability in mind, 
      allowing for future enhancements and integrations.`,
      img1: othersimg,
    },
  };

  const caseStudy = caseStudies[caseStudyId] || {};

  return (
    <div className="project-detail-sec">
      <section className="pd-intro pd-margin">
        <h1 className="pd-text-xl" aria-label="skincare">
          {caseStudy.title || `Case Study ${caseStudyId}`}
        </h1>
        <div className="pd-intro-grid">
          <div className="pd-dash">
            <div className="pd-dash-inner"></div>
          </div>

          <div className="fC">
            <div className="pd-text-xs sP">007</div>
          </div>
          <div className="pd-tags-wrap">
            <div className="pd-tag-wrap">
              <div className="pd-text-xs sP">Research</div>
            </div>
            <div className="pd-tag-wrap">
              <div className="pd-text-xs sP">Strategy</div>
            </div>
            <div className="pd-tag-wrap">
              <div className="pd-text-xs sP">development</div>
            </div>
            
          </div>
          <div className="pd-year-wrap">
            <div className="pd-text-xs">2021</div>
          </div>
        </div>
      </section>

      <div className="pd-img-con">
        <img src={caseStudy.img1} alt="Project image" className="pd-img" />
      </div>

      <section className="fC">
        <div className="doublegrid">
          <div className="maingrid1">
            <div className="containerAnimate main-animate-txt fJc">
              <div className="fStart">
                <h1 className="header--two">{caseStudy.description}</h1>
              </div>
            </div>
            <div className="mfs">
              <ul>
              
                <li className="sP">Design</li>
                <li className="sP">Development</li>
                <li className="sP">Functionality</li>
              </ul>
            </div>
          </div>
          <div className="main-grid-2">
            <article className="sP article">
              <div>
                <div className="fStart">
                  <h3 className="sP name name2 header--three">Primary Challenge.</h3>

                </div>
                <p className="sP">{caseStudy.para1}</p>
              </div>
              <div className="mobileBorder">
                <h3 className="sP name name2 header--three">Solution</h3>
                <p className="sP">{caseStudy.para2}</p>
              </div>
            </article>
            <div className="mfs main-f-btn footer-btn">
              <div className="grey-text underline aboutme-div number fC">
                Explore More — View Project
              </div>
              <div>
                <button className="more-button small-btn">
                  <p className="bP">View Project Live</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {caseStudy.img2 && (
        <div className="pd-img-con">
          <img src={caseStudy.img2} alt="Project detail" className="pd-img" />
        </div>
      )}
      {caseStudy.img3 && (
        <div className="pd-img-con">
          <img src={caseStudy.img3} alt="Project detail" className="pd-img" />
        </div>
      )}
      {caseStudy.img4 && (
        <div className="pd-img-con">
          <img src={caseStudy.img4} alt="Project detail" className="pd-img" />
        </div>
      )}
      {caseStudy.img5 && (
        <div className="pd-img-con">
          <img src={caseStudy.img5} alt="Project detail" className="pd-img" />
        </div>
      )}

      <p className="sP">
        {caseStudy.description ||
          `Details for case study ${caseStudyId} will go here.`}
      </p>
    </div>
  );
};

export default CaseStudyDetail;
