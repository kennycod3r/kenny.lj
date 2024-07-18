import React, { useState } from "react";
import "./Footer.css";
const BackToTop = React.lazy(() => import("./BackToTop"));

export default function Footer() {
  let currenttime = new Date().getFullYear();
  currenttime = currenttime.toLocaleString();

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <BackToTop />
      </React.Suspense>

      <footer className="Homefooter">
        <div className="Homefooter-wrapper">
          <div className="f-title">
            <h2>INFORMATION</h2>
          </div>

          <div className="footer-container">
            <div className="footer--text footer-col">
              <div>
                <h1 className="job-title fhs">
                  Get in touch <br />
                  LET'S WORK — TOGETHER!
                </h1>
                <div className="more-btn-div footer-btn">
                  <button className="more-button">
                    <p>Contact</p>
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
                  <a href="tel:+23412930622" className="headerp">
                    +234 1 293 0622
                  </a>
                </li>
                <li className="small-text headerp pointer">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:oguntolakenny6@gmail.com"
                  >
                    oguntolakenny6@gmail.com
                  </a>
                </li>
                <li className="small-text headerp pointer">
                  <a href="https://github.com/your-github" className="headerp">
                    GitHub
                  </a>
                </li>
                <li className="small-text headerp pointer">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/company/oshinowo-studio/"
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
                    href="https://www.instagram.com/oshinowo.studio/"
                    className="headerp"
                  >
                    Instagram
                  </a>
                </li>
                <li className="small-text headerp pointer">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/your-twitter"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
              <div className="fc-recource">
                <div>
                  <p>RESOURCES</p>
                </div>
                <ul className=" flexSb ">
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
