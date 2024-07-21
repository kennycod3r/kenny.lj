import React from "react";
import TinyDiv from "./tinyDiv/TinyDiv";

const ServiceCard = ({
  title,
  servicesText,
  serviceLists,
  serviceLists2,
  servicesIcon,
  tinyIcon1,
  tinyIcon2,
  tinyIcon3,
  imgtext1,
  imgtext2,
}) => {
  return (
    <div className="service-div flexSB">
      <div className="service-card">
        <div className="service-card-btn pad-m">
          <h2 className="headerh2">{title}</h2>
        </div>

        <div className="service-card-wrapper">
          <div>
            <div
              className="phonediv website-visual fJc"
              style={{ backgroundImage: `url(${servicesIcon})` }}
            >
              <div className="overlay-tinydiv">
                <TinyDiv
                  tinyText={true}
                  imageUrl={tinyIcon3}
                  imgtext={imgtext2}
                />
              </div>
            </div>
            <ul className="serviceList flexSB">
              {serviceLists.map((service, index) => (
                <li key={index} className="smallestp headerp">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="main-grid-2">
            <div className="tiny-div-2">
              <div>
                <TinyDiv imageUrl={tinyIcon1} imgtext={imgtext1} />
              </div>
              <ul className="tiny-div-2-ul pad-m">
                {serviceLists2.map((item, index) => {
                  return (
                    <li key={index} className="headerp">
                      <p className="headerp">{item}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="sctext pad-m">
              <p className="smallestp headerp">{servicesText}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
