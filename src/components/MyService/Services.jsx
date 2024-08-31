import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "../../util/ServiceCard";
import "./Services.css";
import CardAnimation from "../HeaderText/CardCom";

gsap.registerPlugin(ScrollTrigger);

const serviceDivData = [
  {
    title: "Development, SEO",
    servicesText:
      "Beyond creating visually captivating websites, I specialize in enhancing your online presence to boost your visibility in search rankings. With my expertise, your brand can effectively stand out in the digital landscape.",
  },
  {
    title: "Design/Branding",
    servicesText:
      "From concept to implementation, I deliver complete websites. My strong design sense and development skills enable me to create outstanding projects.",
  },
];

const Services = () => {
  useEffect(() => {
    gsap.utils.toArray(".Animation_moveUp__VYhva").forEach((element) => {
      gsap.fromTo(
        element,
        { y: "120%" },
        {
          y: "0%",
          duration: 1.5,
          ease: "cubic-bezier(.075,.82,.165,1)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="whitebtn-div fC">
      
      <h1 className="header--two bigH">
        <span className="Animation_moveUp__VYhva">Turning ideas </span>
        <span className="Animation_moveUp__VYhva">into digital </span>
        <span className="Animation_moveUp__VYhva">
          experiences.. <span className="o2">04</span>
        </span>
      </h1>
      <div className="m-small">
      <div className="flex-st">

      <CardAnimation text={"services"}/>
      <CardAnimation text={"i"}/>
      <CardAnimation text={"provide"}/>
      </div>
       
        <div>
          <p className="m-small300 headerp">
            In today's competitive landscape, being adequate is no longer
            enough. We pursue holistic excellence in every facet of our work.
            Our solutions exceed expectations, unlocking opportunities our
            clients never knew were possible for their brand. Our approach is
            grounded in strong concepts, guided by strategic thinking, and
            brought to life by creative minds who see the big picture. We excel
            in brand creation, website design, and delivering outstanding
            digital experiences.
          </p>
        </div>
        <div>
          {serviceDivData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              servicesText={service.servicesText}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
