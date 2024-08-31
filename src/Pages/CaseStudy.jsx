import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";
import HeroImg1 from "../images/projecthero.webp";
import HeroImg2 from "../images/projecthero2.webp";
import HeroImg3 from "../images/pshot1.webp";
import HeroImg4 from "../images/pshot3.webp";

const CaseStudy = () => {
  return (
    <section className="case-study">
      <div className="fC-text pad1">
        <h1 className="header--two">
          Projects/Case Studies.<span className="o2">02</span>
        </h1>
      </div>
      

      <div className="containercs-grid">
        <h1 className="header--two cs-cg1">
          Case Studies.<span className="o2">02</span>
        </h1>
        <div className="containercs">
          <Link to="/case-study/1" className="hover-card is--left">
            <div className="hover-card__inner">
              <div className="hover-card__bg">
                <img src={HeroImg1} alt="Project 1" className="cover-img" />
              </div>
              <div className="hover-card__info">
                <h4 className="hover-card__title">E-commerce Project</h4>
                <p className="hover-card__p">skincare e-commerce project</p>
              </div>
            </div>
          </Link>
          <Link to="/case-study/2" className="hover-card is--right">
            <div className="hover-card__inner">
              <div className="hover-card__bg">
                <img src={HeroImg2} alt="Project 2" className="cover-img" />
              </div>
              <div className="hover-card__info">
                <h4 className="hover-card__title">E-commerce Project</h4>
                <p className="hover-card__p">sneekers e-commerce project</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="containercs">
          <Link to="/case-study/3" className="hover-card is--left">
            <div className="hover-card__inner">
              <div className="hover-card__bg">
                <img src={HeroImg3} alt="Project 1" className="cover-img" />
              </div>
              <div className="hover-card__info">
                <h4 className="hover-card__title">Project 1</h4>
                <p className="hover-card__p">Description of Project 1</p>
              </div>
            </div>
          </Link>
          <Link to="/case-study/4" className="hover-card is--right">
            <div className="hover-card__inner">
              <div className="hover-card__bg">
                <img src={HeroImg4} alt="Project 2" className="cover-img" />
              </div>
              <div className="hover-card__info">
                <h4 className="hover-card__title">Project 2</h4>
                <p className="hover-card__p">Description of Project 2</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
