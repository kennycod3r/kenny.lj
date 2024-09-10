import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import ArrowLink from "../../util/ArrowLink";
import TextAnimation from "../HeaderText/TextAnimation";

const Main = () => {
  return (
    <main className="fC gPadBig">
      <div className="doublegrid">
        <div className="maingrid1">
          <div className="fC-wid ">
            <TextAnimation text="What" />
            <TextAnimation text="i" />
            <TextAnimation text="Do" />
          </div>

          <div className="mfs">
            <ul>
              <li className=" sP">SEO Services</li>
              <li className=" sP">Motion & Animations</li>
              <li className=" sP">Web Articles</li>
            </ul>
          </div>
        </div>
        <div className="main-grid-2">
          <article className="sP article">
            <div className="desktopborder">
              <div className="fStart">
                <h3 className="sP name name2 mP">
                  Interactive Developer.
                </h3>
                <span className="o2">01</span>
              </div>
              <p className="sP mB2">
                I create engaging and purposeful web experiences. As a frontend
                developer skilled in React and essential frontend technologies,
                I excel in API integration and work seamlessly with APIs to
                enhance functionality.
              </p>
              <p className="sP">
                My services encompass customer research, trend analysis, and
                competitor review to guide strategic decisions. From product
                ideation and brand positioning to detailed web engineering and
                development, I ensure seamless integration of complex
                functionalities, optimal performance, and the latest
                technologies, empowering businesses with a competitive edge in
                the digital landscape.
              </p>
            </div>
            <div className="mobileBorder ">
              <h3 className="sP name name2 mP">
                Interactive Designer.
              </h3>
              <p className="sP">
                I specialize in helping brands stand out in the digital world by
                creating engaging and purposeful web experiences. My design
                approach prioritizes intuitive user interfaces, seamless
                navigation, and aesthetically pleasing visuals. With a keen eye
                for detail and a deep understanding of UX/UI principles, I
                ensure that every design element enhances user engagement and
                satisfaction through meticulous design processes.
              </p>
            </div>
          </article>
          <div className="mfs main-f-btn bT4">
            <Link
              className="grey-text underline aboutme-link number fC"
              to="/AboutPage"
            >
              <ArrowLink black={true} />
              Explore More — ABOUT ME
            </Link>
            <Link to="/ContactPage">
              <button className="more-button small-btn">
                <p className="bP">Contact</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
