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
      <div>
        <div aria-hidden="true" className="fC-wid2">
          <span className="sP name name2 mP capitalise">
            {letters.map((letter, index) => (
              <span
                key={index}
                className="relative inline-flex overflow-y-clip"
              >
                <span className="will-change-transform">{letter}</span>
              </span>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardAnimation;