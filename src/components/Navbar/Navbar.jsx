import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "../Hamburger/HamburgerMenu";

const Navbar = ({ handleSidebar, openSidebar }) => {
  return (
    <nav className="static-nav ">
      <div className="static-nav-inner flexSB">
        <div className="nav-links-container ">
          <Link to="/">
            <div className="logo-text fC">
              <div className="spin-logodiv  fJc">
                <span className="spinlogo fJc orangeColor">©</span>
              </div>
              <div className="logo-main fC">KNNY</div>
            </div>
          </Link>
        </div>
        <div className="nav-links-container nlc-with-menu flexSB">
          <div className="nav-items-container showmobile">
            <ul className="showmobile nav-items-inner">
              <li id="navabout">
                <Link to="/AboutPage">
                  <div className="nav-link " data-text="About">
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/CaseStudy">
                  <div className="nav-link " data-text="case studies">
                    Case Studies
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/ContactPage">
                  <div className="nav-link  " data-text="Contact">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="fixed-ham animated-btn">
            <div className="fixed-ham-inner">
              <div className="fill-btn"></div>
              <div className="hamburger-content">
                <HamburgerMenu
                  handleSidebar={handleSidebar}
                  openSidebar={openSidebar}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
