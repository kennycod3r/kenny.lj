import React from "react";
import "./Sidebar.css";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import CloseSvg from "../../util/CloseSvg";

const Sidebar = ({ openSidebar, handleSidebar }) => {
  const sideBar = document.getElementById("sideBar");
  const location = useLocation();

  if (!sideBar) return null;

  const isActive = (path) => location.pathname === path;

  return createPortal(
    <div className={`main-sidebar ${openSidebar ? "open" : ""}`}>
      <div className="inner-main-sidebar">
        <div className="close-btn-circle-sidebar" onClick={handleSidebar}>
          <CloseSvg isOpen={openSidebar} />
        </div>
        <ul>
          <li className="navigation-sidelink flexSB">
            <Link
              to="/"
              className={`sidebar-link ${isActive("/") ? "active" : ""}`}
              data-text="Home"
              onClick={handleSidebar}
            >
              <div className="fC">
                <h3 className="headerh2">HOME</h3>
                <div className={`dot ${isActive("/") ? "active" : ""}`}></div>
              </div>
            </Link>
            <span className="o2">00-06</span>
          </li>
          <li className="navigation-sidelink flexSB">
            <Link
              to="/CaseStudy"
              className={`sidebar-link ${
                isActive("/Projects") ? "active" : ""
              }`}
              onClick={handleSidebar}
            >
              <div>
                <h3 className="headerh2">PROJECTS</h3>
              </div>
              <div
                className={`dot ${isActive("/Projects") ? "active" : ""}`}
              ></div>
            </Link>
            <span className="o2">02-03</span>
          </li>
          <li className="navigation-sidelink flexSB">
            <Link
              to="/AboutPage"
              className={`sidebar-link ${
                isActive("/AboutPage") ? "active" : ""
              }`}
              onClick={handleSidebar}
            >
              <div>
                <h3 className="headerh2">ABOUT ME</h3>
              </div>
              <div
                className={`dot ${isActive("/AboutUs") ? "active" : ""}`}
              ></div>
            </Link>
            <span className="o2">03-04</span>
          </li>

          <li className="navigation-sidelink flexSB">
            <Link
              to="/ContactPage"
              className={`sidebar-link ${
                isActive("/ContactPage") ? "active" : ""
              }`}
              onClick={handleSidebar}
            >
              <div>
                <h3 className="headerh2">CONTACT</h3>
              </div>
              <div
                className={`dot ${isActive("/ContactPage") ? "active" : ""}`}
              ></div>
            </Link>
            <span className="o2">06-09</span>
          </li>
        </ul>
        <div className="semi-circle">
          <div className="job-title">RESUME</div>
          <div className="job-title">
            <a href="https://www.linkedin.com/in/kehinde-oguntola-270903198/">
              LINKEDIN
            </a>
          </div>
          <div className="job-title">ABOUT</div>
        </div>
      </div>
    </div>,
    sideBar
  );
};

export default Sidebar;
