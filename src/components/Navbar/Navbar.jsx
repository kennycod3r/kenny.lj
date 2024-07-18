import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import HamburgerMenu from "../Hamburger/HamburgerMenu";

const Navbar = ({ handleSidebar, openSidebar }) => {
  const navLinks = ["About", "Projects", "Contact"];

  return (
    <nav className="static-nav">
      <div className="static-nav-inner">
        <div className="nav-links-container">
          <Link to="/">
            <div className="logo-text fcb">
              <div className="spin-logodiv">
                <span className="spinlogo">©</span>
              </div>
              <div className="logo-main fcb">KNNY</div>
            </div>
          </Link>
        </div>
        <div className="nav-links-container nlc-with-menu">
          <div className="nav-items-container showmobile">
            <ul className="showmobile">
              {navLinks.map((link) => (
                <li key={link}>
                  <Link to={`/${link.toLowerCase()}`}>
                    <div className="nav-link" data-text={link}>
                      {link.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="fixed-ham animated-btn">
            <HamburgerMenu
              handleSidebar={handleSidebar}
              openSidebar={openSidebar}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);

