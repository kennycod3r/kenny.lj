import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import ArrowLink from "../../util/ArrowLink";
import TextAnimation from "../HeaderText/TextAnimation";

const Main = () => {
  return (
    <main className="fC">
      <div className="doublegrid">
        <div className="maingrid1">
          <div className="fC-wid ">
            <TextAnimation text="What" />
            <TextAnimation text="i" />
            <TextAnimation text="Do" />
          </div>

          <div className="mfs">
            <ul>
              <li className="smallestp headerp">SEO Services</li>
              <li className="smallestp headerp">Motion & Animations</li>
              <li className="smallestp headerp">Web Articles</li>
            </ul>
          </div>
        </div>
        <div className="main-grid-2">
          <article className="smallp article">
            <div>
              <div className="fStart">
                <h3 className="headerp name name2 header--three">
                  Interactive Developer.
                </h3>
                <span className="o2">01</span>
              </div>
              <p className="smallestp headerp">
                I create engaging and purposeful web experiences. As a frontend
                developer skilled in React and essential frontend
                technologies, I excel in API integration and work seamlessly
                with APIs to enhance functionality. My services encompass
                customer research, trend analysis, and competitor review to
                guide strategic decisions. From product ideation and brand
                positioning to detailed web engineering and development, I
                ensure seamless integration of complex functionalities, optimal
                performance, and the latest technologies, empowering businesses
                with a competitive edge in the digital landscape.
              </p>
            </div>
            <div className="mobileBorder">
              <h3 className="headerp name name2 header--three">
                Interactive Designer.
              </h3>
              <p className="smallestp headerp">
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
          <div className="mfs main-f-btn footer-btn">
            <Link
              className="grey-text underline aboutme-link number fC"
              to="/AboutPage"
            >
              <ArrowLink black={true} />
              Explore More — ABOUT ME
            </Link>
            <Link to="/ContactPage">
              <button className="more-button small-btn">
                <p>Contact</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
