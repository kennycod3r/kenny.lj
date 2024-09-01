import React from "react";
import "../../Pages/Pages.css";
import { Link } from "react-router-dom";
import CardAnimation from "../HeaderText/CardCom";

const TechSection = () => {
  return (
    <section className="tech-section fC flexDC">
      <div className="tech-section-wrapper">
        <div className="doublegrid">
          <div className="mh40 flexsercon2">
            <div>
              <div className="flex-text-an">
                {" "}
                <h1 className="header--two">How Can i</h1>
                
                <h1 className="header--two">Assist</h1>
                <h1 className="header--two">You</h1>
              </div>
            </div>
            <Link to="/ContactPage" className="block">
              <button className="more-button small-btn">
                <p className="bP">Contact Me</p>
              </button>
            </Link>
          </div>
          <>
            <div className="ts-div2">
              <div className="tslists">
                <CardAnimation text={"DEVELOPMENT"} />
                <h3 className="sP showmobile">DEVELOPMENT</h3>
                <ul>
                  <li className="sP">
                    Cross-Browser/Cross-Device Testing
                  </li>
                  <li className="sP">Shopify or Webflow Development</li>
                  <li className="sP">React / Next.js Development</li>
                  <li className="sP">Automation and Integration</li>
                </ul>
              </div>

              <div className="tslists">
                <CardAnimation text={"STRATEGY"} />
                <h3 className="sP showmobile">STRATEGY</h3>
                <ul>
                  <li className="sP">Brand Strategy & Architecture</li>
                  <li className="sP">Information Architecture</li>
                  <li className="sP">Post-Launch Strategy</li>
                  <li className="sP">Analytics Reporting</li>
                  <li className="sP">Digital Analysis</li>
                </ul>
              </div>
              <div className="tslists">
                <CardAnimation text={"DESIGN"} />
                <h3 className="sP showmobile">DESIGN</h3>
                <ul>
                  <li className="sP">User Interface, Experience</li>
                  <li className="sP">Interaction Design</li>
                  <li className="sP">Creative Direction</li>
                  <li className="sP">Brand Identity</li>
                  <li className="sP">Wireframing</li>
                </ul>
              </div>

              <div className="tslists">
                <CardAnimation text={["S", "E", "O"]} />
                <h3 className="sP showmobile">
                  SEO & Performance Optimization
                </h3>
                <ul>
                  <li className="sP">SEO Optimization</li>
                  <li className="sP">Content Management</li>
                  <li className="sP">Quality Assurance</li>
                  <li className="sP">Content Writing</li>
                  <li className="sP">Copywriting</li>
                </ul>
              </div>
              <div className="tslists">
                <CardAnimation text={"Branding/3D-Design"} />
                <h3 className="sP showmobile">Branding/3D Design</h3>
                <ul>
                  <li className="sP">Digital Product Design</li>
                  <li className="sP">Quality Assurance</li>
                  <li className="sP">Prototyping</li>
                </ul>
              </div>
              <div className="tslists">
                <CardAnimation text={"RESEARCH"} />
                <h3 className="sP showmobile">RESEARCH</h3>
                <ul>
                  <li className="sP">Best Practices Review</li>
                  <li className="sP">Customer Insights</li>
                </ul>
              </div>
            </div>
          </>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
