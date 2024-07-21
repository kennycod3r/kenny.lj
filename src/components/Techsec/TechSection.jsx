import React from "react";
import { useNavigate } from "react-router-dom";
import TextAbout from "../../util/TextAbout";

const TechSection = ({ techCardData }) => {
  const navigate = useNavigate();

  return (
    <section className="tech-section fJc flexDC">
      <div className="tech-section-wrapper">
        <div className="doublegrid">
          <TextAbout />
          <div className="ts-div2 fStart">
            <div className="ts-div2-lists-container">
              <ul className="tslists">
                <li className="tinyp number">DEVELOPMENT</li>
                <li className="tinyp">Cross-Browser/Cross-Device Testing</li>
                <li className="tinyp">Shopify or Webflow Development</li>
                <li className="tinyp">React / Next.js Development</li>
                <li className="tinyp">Automation and Integration</li>
                <li className="tinyp">JavaScript Development</li>
              </ul>

              <ul className="tslists">
                <li className="tinyp number">STRATEGY</li>
                <li className="tinyp">Brand Strategy & Architecture</li>
                <li className="tinyp">Information Architecture</li>
                <li className="tinyp">Post-Launch Strategy</li>
                <li className="tinyp">Analytics Reporting</li>
                <li className="tinyp">Digital Analysis</li>
              </ul>
            </div>
            <div className="ts-div2-lists-container">
              <ul className="tslists">
                <li className="tinyp number">DESIGN</li>
                <li className="tinyp">User Interface, Experience</li>
                <li className="tinyp">Interaction Design</li>
                <li className="tinyp">Creative Direction</li>
                <li className="tinyp">Brand Identity</li>
                <li className="tinyp">Wireframing</li>
              </ul>
              <ul className="tslists">
                <li className="tinyp number">SEO & Performance Optimization</li>
                <li className="tinyp">SEO Copy Optimization</li>
                <li className="tinyp">Content Management</li>
                <li className="tinyp">Quality Assurance</li>
                <li className="tinyp">Content Writing</li>
                <li className="tinyp">Copywriting</li>
              </ul>
            </div>
            <div className="ts-div2-lists-container">
              <ul className="tslists">
                <li className="tinyp number">Branding/3D Design</li>
                <li className="tinyp">Digital Product Design</li>
                <li className="tinyp">Quality Assurance</li>
                <li className="tinyp">Prototyping</li>
              </ul>
              <ul className="tslists">
                <li className="tinyp number">RESEARCH</li>
                <li className="tinyp">Best Practices Review</li>
                <li className="tinyp">Customer Insights</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tech-cut">
          <ul>
            {techCardData.map(
              ({ techstackTitle, techText, displayPageImg }) => (
                <li key={techstackTitle}>
                  <button
                    className="tech-btn"
                    onClick={() =>
                      handleSendTech(techstackTitle, techText, displayPageImg)
                    }
                  >
                    <div>{techstackTitle}</div>
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
        <button
          className="tech-btn linktech"
          onClick={() => navigate("/TechSkills")}
        >
          SKILLS
        </button>
      </div>
    </section>
  );
};

export default TechSection;
