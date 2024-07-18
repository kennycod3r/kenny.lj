import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <div className="aboutme-pages">
      <div className="about-me-section">
        <h2 className="headerh2 tal">About Me</h2>
        <div className="about-text-area">
          <h2 className="about-me-header header--three whiteColor">
            Helping Brands Thrive in the Digital world{" "}
            <span className="orangedot">...</span>
          </h2>

          <p className="body--text about-me-header">I can help with</p>
          <div className="grid3">
            {Array(5).fill().map((_, index) => (
              <div className={`grid-item ${index === 3 ? 'item-img' : ''}`} key={index}>
                {index === 3 ? (
                  <span className="o2">05</span>
                ) : (
                  <>
                    <div>
                      <span className="o2">05</span>
                    </div>
                    <p className="about-me-p">
                      I help companies from all over the world with tailor-made
                      solutions. With each project, I push my work to new horizons,
                      always putting quality first.
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <p className="body--text">Keep Exploring?</p>
      </div>
    </div>
  );
}
