import React from "react";
import ServiceCard from "../../util/ServiceCard";
import { Link } from "react-router-dom";
import "./Services.css";
import Ipad from "../../assets/ipad.svg";
import googleIcon from "../../assets/google2.svg";
import dropIcon from "../../assets/drop.svg";
import spannerIcon from "../../assets/spanner.svg";
import boxIcon from "../../assets/box3d.svg";
import websiteImg from "../../images/website2.png";
import websiteImg3 from "../../images/website3.png";

const serviceDivData = [
  {
    title: "Development, SEO",
    servicesIcon: websiteImg,
    tinyIcon1: spannerIcon,
    tinyIcon3: googleIcon,
    serviceLists2: [
      "Technical SEO",
      "On-Page Optimization",
      "SEO Audits & Analysis"
    ],
    serviceLists: [
      "Establish brand awareness",
      "Increase web traffic",
      "Seamless customer experience"
    ],
    imgtext1: "Google search engine optimization",
    imgtext2: "Rank higher on Google searches and increase website traffic from search engines.",
    servicesText: "Beyond creating visually captivating websites, I specialize in enhancing your online presence to boost your visibility in search rankings. With my expertise, your brand can effectively stand out in the digital landscape."
  },
  {
    title: "Design/Branding",
    servicesIcon: websiteImg3,
    tinyIcon1: boxIcon,
    tinyIcon3: dropIcon,
    serviceLists2: [
      "CMS Integration",
      "Motion & Animations",
      "3D Development"
    ],
    serviceLists: [
      "Responsive Design",
      "Wireframing",
      "UX Writing"
    ],
    imgtext1: "Crafting Unique Digital Identities",
    imgtext2: "I tailor your Brand identity to your audience, With a focus on distinctive visuals and writing",
    servicesText: "From concept to implementation, I deliver complete websites. My strong design sense and development skills enable me to create outstanding projects."
  }
];

const Services = () => {
  return (
    <div className="whitebtn-div fJc">
      <h1 className="header--two fC">
        <div className="fC">
          <img src={Ipad} alt="service icon" className="svgipad showmobile" />
        </div>
        Services I Provide. <span className="o2">04</span>
      </h1>
      <div className="services-section">
        <div className="service-sec-grid">
          {serviceDivData.map((service, index) => (
            <ServiceCard
              key={index}
              Ipad={Ipad}
              tinyIcon1={service.tinyIcon1}
              tinyIcon2={service.tinyIcon2}
              tinyIcon3={service.tinyIcon3}
              title={service.title}
              imgtext1={service.imgtext1}
              imgtext2={service.imgtext2}
              servicesText={service.servicesText}
              serviceLists={service.serviceLists}
              serviceLists2={service.serviceLists2}
              servicesIcon={service.servicesIcon}
            />
          ))}
        </div>
        <div className="more-btn-div fJc">
          <Link to="/ContactPage">
            <button className="more-button">
              <p className="content-txt">Contact Me</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;

