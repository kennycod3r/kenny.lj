import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardAnimation = ({ text}) => {
  const letters = Array.isArray(text) ? text : text.split("");

  useEffect(() => {
    gsap.fromTo(
      ".card-animation-container .will-change-transform",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".card-animation-container",
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="card-animation-container">
     
        <div aria-hidden="true">
          <h3 className="sP name name1 mP">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="relative inline-flex overflow-y-clip"
              >
                <span key={index} className="will-change-transform">{letter}</span>
              </span>
            ))}
          </h3>
        </div>
      
    </div>
  );
};

export default CardAnimation;