import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "../Hamburger/HamburgerMenu";

const Navbar = ({ handleSidebar, openSidebar }) => {
  return (
    <nav className="static-nav fJc">
      <div className="static-nav-inner flexSB">
        <div className="nav-links-container fJc">
          <Link to="/">
            <div className="logo-text fcb">
              <div className="spin-logodiv  fJc">
                <span className="spinlogo fJc">©</span>
              </div>
              <div className="logo-main fcb">KNNY</div>
            </div>
          </Link>
        </div>
        <div className="nav-links-container nlc-with-menu flexSB">
          <div className="nav-items-container showmobile">
            <ul className="showmobile">
              <li id="navabout">
                <Link to="/AboutPage">
                  <div className="nav-link fJc" data-text="About">
                    About
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/Projects">
                  <div className="nav-link  fJc" data-text="Projects">
                    Projects
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/ContactPage">
                  <div className="nav-link  fJc" data-text="Contact">
                    Contact
                  </div>
                </Link>
              </li>
            </ul>
          </div>
          <div className="fixed-ham animated-btn">
            <HamburgerMenu handleSidebar={handleSidebar} openSidebar={openSidebar} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
