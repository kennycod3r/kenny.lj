import React from "react";
import "./TinyDiv.css";

const TinyDiv = ({ imageUrl, imgtext, tinyText }) => {
  return (
    <div className="author-box">
      <div className="author-box-inner">
        <div className="author-image">
          <img className="overlay lazy" src={imageUrl} alt="icon" />
        </div>
        <div className="author-content">
          {tinyText ? (
            <span className="tinytext">{imgtext}</span>
          ) : (
            <span className="bigtext">{imgtext}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TinyDiv;
