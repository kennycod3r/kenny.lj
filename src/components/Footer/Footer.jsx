import React from "react";
import "./Footer.css";
import BackToTop from "./BackToTop";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <BackToTop />

      <footer className="Homefooter">
        <div className="Homefooter-wrapper">
          <div className="containerAnimate-div fStart">
            <h3>
              INFORMATION. <span className="o2">06</span>
            </h3>
          </div>

          <div className="footer-container">
            <div className="footer--text footer-col">
              <div>
                <h1 className="job-title fhs">
                  Get in touch <br />
                  LET'S WORK — TOGETHER!
                </h1>
                <div className="more-btn-div footer-btn">
                  <button
                    className="more-button"
                    onClick={() => window.location.href = "mailto:oguntolakenny6@gmail.com"}
                  >
                    <p>Get in touch</p>
                  </button>
                </div>
              </div>
              <div className="small-footertext">
                <li className="job-title">
                  Embracing the power of digital, I love working with brands
                  that feel the same. Let's connect.
                </li>
              </div>
            </div>
            <div className="footer-col">
              <p>CONTACT</p>
              <ul className="aligned-paragraphs footer-ap">
                <li className="small-text headerp pointer">
                  <a href="tel:+2348138191796" className="headerp underline">
                    +234 813 8191796
                  </a>
                </li>
                <li className="small-text headerp pointer">
                  <a
                    target="_blank"
                    className="headerp underline"
                    rel="noopener noreferrer"
                    href="mailto:oguntolakenny6@gmail.com"
                  >
                    oguntolakenny6@gmail.com
                  </a>
                </li>
                <li className="small-text headerp pointer">
                  <a
                    target="_blank"
                    className="headerp underline"
                    rel="noopener noreferrer"
                    href="https://github.com/kennycod3r?tab=repositories"
                  >
                    GitHub
                  </a>
                </li>
                <li className="small-text headerp pointer">
                  <a
                    target="_blank"
                    className="headerp underline"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/kehinde-oguntola-270903198/"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <p>SOCIALS</p>
              <ul className="aligned-paragraphs footer-ap">
                <li className="small-text headerp pointer">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/kenny.lj/"
                    className="headerp underline"
                  >
                    Instagram
                  </a>
                </li>
                <li className="small-text headerp pointer">
                  <a
                    target="_blank"
                    className="headerp underline"
                    rel="noopener noreferrer"
                    href="https://x.com/kenny_lj"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
              <div className="fc-resource">
                <div>
                  <p>RESOURCES</p>
                </div>
                <ul className="flexSb">
                  <li className="job-title">REACTJS</li>
                  <li className="job-title">GSAP</li>
                  <li className="job-title">FIGMA</li>
                  <li className="job-title">VITE</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
