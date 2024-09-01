import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row ">
            <div className="col col1 showmobile">
              <div className="logo-text fcb">
                <div className="logo-main fcb">
                  <span className="orangeColor">©</span>KNNY
                </div>
              </div>
            </div>
            <div className="col">
              <ul>
                <li>
                  <div className="footer-item footer-item-title sP">
                    Sitemap
                  </div>
                </li>
                <li className="rel-link">
                  <a className="footer-item sP" href="/">
                    Home
                  </a>
                </li>

                <li className="rel-link">
                  <Link className="footer-item  sP" to="/AboutPage">
                    About Me
                  </Link>
                </li>
                <li className="rel-link">
                  <Link to="/CaseStudy" className="footer-item sP  ">
                    Case Studies
                  </Link>
                </li>
                <li className="rel-link">
                  <a className="footer-item sP" href="/">
                    Project
                  </a>
                </li>
                <li className="rel-link">
                  <Link to="/ContactPage" className="footer-item sP">
                    Contact
                  </Link>
                </li>
                <li>
                  <div className="footer-item sP">
                    Availability: <span className="orangeColor"></span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <a
                    className="footer-item footer-item-title sP"
                    href="https://avvr.nl/actueel"
                  >
                    socials
                  </a>
                </li>
                <li>
                  <a
                    className="footer-item sP"
                    href="mailto:oguntolakenny6@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mail
                  </a>
                </li>
                <li>
                  <a
                    className="footer-item sP"
                    href="https://github.com/kennycod3r?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className="footer-item sP"
                    href="https://avvr.nl/actueel/bijeenkomsten"
                  >
                    Meetings
                  </a>
                </li>
                <li>
                  <div className="footer-item footer-item-empty"></div>
                </li>
                <li>
                  <div className="footer-item footer-item-title sP">
                    Expertises
                  </div>
                </li>
                <li>
                  <div className="footer-item sP">React.js</div>
                </li>
                <li>
                  <div className="footer-item sP">Javascript</div>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <div className="footer-item footer-item-icon">
                    <div className="icon outline">{/* SVG icon here */}</div>
                    <span className="footer-item footer-item-title sP">
                      Recources (Tech)
                    </span>
                  </div>
                </li>
                <li>
                  <div className="footer-item footer-item-icon">
                    <div className="icon"></div>
                    <span className="sP">React.js</span>
                  </div>
                </li>
                <li>
                  <div className="footer-item footer-item-icon">
                    <div className="icon"></div>
                    <span className="sP">Greenstock</span>
                  </div>
                </li>
                <li>
                  <div className="footer-item footer-item-icon">
                    <div className="icon outline">{/* SVG icon here */}</div>
                    <span className="sP">scss/css</span>
                  </div>
                </li>
                <li>
                  <div className="footer-item footer-item-icon">
                    <div className="icon"></div>
                    <span className="sP ">ReactRouter</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col">
              <ul>
                <li>
                  <a
                    className="footer-item sP footer-item-icon footer-item-link-icon"
                    href="https://x.com/kenny_lj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>

                <li>
                  <a
                    className="footer-item sP footer-item-icon footer-item-link-icon"
                    href="https://www.linkedin.com/in/kehinde-oguntola-270903198/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <div className="icon filled">{/* SVG icon here */}</div>
                  </a>
                </li>
                <li>
                  <a
                    className="footer-item footer-item-icon footer-item-link-icon"
                    href="https://www.instagram.com/kenny.lj/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="icon filled"></div>
                    <span className="sP">Instagram</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <nav className="nav-secondary">
          <div className="credits">
            <div className="credits-item" target="_blank">
              <span className="nav-secondary-link">Bykenny</span>
            </div>
            <div className="credits-item">
              <span className="nav-secondary-link">© 2024 portfoliio</span>
            </div>
          </div>
          <ul className="credits-item-list">
            <li className="nav-secondary-link">© 2024 oguntolakenny</li>
            <li className="nav-secondary-link">All rights reserved.</li>

            <li>
              <div
                className="nav-secondary-link nav-secondary-language nl"
                data-toggle="modal-language"
              >
                <div className="flag nl"></div>
                <span>🇬🇧 en</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
