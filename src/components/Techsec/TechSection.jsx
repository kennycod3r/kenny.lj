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
                <p className="headerp">Contact Me</p>
              </button>
            </Link>
          </div>
          <>
            <div className="ts-div2">
              <div className="tslists">
                <CardAnimation text={"DEVELOPMENT"} />
                <h3 className="headerp showmobile">DEVELOPMENT</h3>
                <ul>
                  <li className="headerp">
                    Cross-Browser/Cross-Device Testing
                  </li>
                  <li className="headerp">Shopify or Webflow Development</li>
                  <li className="headerp">React / Next.js Development</li>
                  <li className="headerp">Automation and Integration</li>
                </ul>
              </div>

              <div className="tslists">
                <CardAnimation text={"STRATEGY"} />
                <h3 className="headerp showmobile">STRATEGY</h3>
                <ul>
                  <li className="headerp">Brand Strategy & Architecture</li>
                  <li className="headerp">Information Architecture</li>
                  <li className="headerp">Post-Launch Strategy</li>
                  <li className="headerp">Analytics Reporting</li>
                  <li className="headerp">Digital Analysis</li>
                </ul>
              </div>
              <div className="tslists">
                <CardAnimation text={"DESIGN"} />
                <h3 className="headerp showmobile">DESIGN</h3>
                <ul>
                  <li className="headerp">User Interface, Experience</li>
                  <li className="headerp">Interaction Design</li>
                  <li className="headerp">Creative Direction</li>
                  <li className="headerp">Brand Identity</li>
                  <li className="headerp">Wireframing</li>
                </ul>
              </div>

              <div className="tslists">
                <CardAnimation text={["S", "E", "O"]} />
                <h3 className="headerp showmobile">
                  SEO & Performance Optimization
                </h3>
                <ul>
                  <li className="headerp">SEO Optimization</li>
                  <li className="headerp">Content Management</li>
                  <li className="headerp">Quality Assurance</li>
                  <li className="headerp">Content Writing</li>
                  <li className="headerp">Copywriting</li>
                </ul>
              </div>
              <div className="tslists">
                <CardAnimation text={"Branding/3D-Design"} />
                <h3 className="headerp showmobile">Branding/3D Design</h3>
                <ul>
                  <li className="headerp">Digital Product Design</li>
                  <li className="headerp">Quality Assurance</li>
                  <li className="headerp">Prototyping</li>
                </ul>
              </div>
              <div className="tslists">
                <CardAnimation text={"RESEARCH"} />
                <h3 className="headerp showmobile">RESEARCH</h3>
                <ul>
                  <li className="headerp">Best Practices Review</li>
                  <li className="headerp">Customer Insights</li>
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
