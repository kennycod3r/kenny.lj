import React from "react";
import TextAbout from "../../util/TextAbout";
import "../../Pages/Pages.css";

const TechSection = () => {
  return (
    <section className="tech-section fJc flexDC">
      <div className="tech-section-wrapper">
        <div className="doublegrid">
          <div className="mh40">
            <TextAbout />
          </div>
          <div>
            <div className="specialize tac">
              <h3>
                My specialties are — Front-End Development with React.js,
                Motion/Animation, and CMS-driven websites.
              </h3>
              <p className="headerp">
                However, I'm open to taking on these roles as well:
              </p>
            </div>

            <div className="ts-div2">
              <div className="ts-div2-lists-container">
                <ul className="tslists">
                  <li className="tinyp tinypHeader">DEVELOPMENT</li>
                  <li className="tinyp">Cross-Browser/Cross-Device Testing</li>
                  <li className="tinyp">Shopify or Webflow Development</li>
                  <li className="tinyp">React / Next.js Development</li>
                  <li className="tinyp">Automation and Integration</li>
                  <li className="tinyp">JavaScript Development</li>
                </ul>

                <ul className="tslists">
                  <li className="tinyp tinypHeader">STRATEGY</li>
                  <li className="tinyp">Brand Strategy & Architecture</li>
                  <li className="tinyp">Information Architecture</li>
                  <li className="tinyp">Post-Launch Strategy</li>
                  <li className="tinyp">Analytics Reporting</li>
                  <li className="tinyp">Digital Analysis</li>
                </ul>
                <ul className="tslists">
                  <li className="tinyp tinypHeader">DESIGN</li>
                  <li className="tinyp">User Interface, Experience</li>
                  <li className="tinyp">Interaction Design</li>
                  <li className="tinyp">Creative Direction</li>
                  <li className="tinyp">Brand Identity</li>
                  <li className="tinyp">Wireframing</li>
                </ul>
              </div>
              <div className="ts-div2-lists-container">
                <ul className="tslists">
                  <li className="tinyp tinypHeader">
                    SEO & Performance Optimization
                  </li>
                  <li className="tinyp">SEO Copy Optimization</li>
                  <li className="tinyp">Content Management</li>
                  <li className="tinyp">Quality Assurance</li>
                  <li className="tinyp">Content Writing</li>
                  <li className="tinyp">Copywriting</li>
                </ul>
                <ul className="tslists">
                  <li className="tinyp tinypHeader">Branding/3D Design</li>
                  <li className="tinyp">Digital Product Design</li>
                  <li className="tinyp">Quality Assurance</li>
                  <li className="tinyp">Prototyping</li>
                </ul>
                <ul className="tslists">
                  <li className="tinyp tinypHeader">RESEARCH</li>
                  <li className="tinyp">Best Practices Review</li>
                  <li className="tinyp">Customer Insights</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
