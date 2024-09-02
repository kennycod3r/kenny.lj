import React from "react";
import "./../components/MyService/Services.css";

const ServiceCard = ({ title, servicesText }) => {
  return (
    <div className="s-text-grid mobileborde">
      <article className=" mobileBorder sP article">
        <div>
          <div className="fStart">
            <h3 className="sP name name1 mP">{title}.</h3>
          </div>
          <p className="sP">{servicesText}</p>
        </div>
      </article>
    </div>
  );
};

export default React.memo(ServiceCard);
