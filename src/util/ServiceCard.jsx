import React from "react";
import "./../components/MyService/Services.css";

const ServiceCard = ({ title, servicesText }) => {
  return (
    <div className="s-text-grid mobileborde">
      <article className=" mobileBorder smallp article">
        <div>
          <div className="fStart">
            <h3 className="headerp name name1 header--three">{title}.</h3>
          </div>
          <p className="smallestp headerp">{servicesText}</p>
        </div>
      </article>
    </div>
  );
};

export default React.memo(ServiceCard);
