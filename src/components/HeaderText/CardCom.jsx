import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardAnimation = ({ text, className }) => {
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
      <div className="card-content text-center text-heading-1 font-semibold uppercase text-accent-400">
        <div aria-hidden="true" className="leading-tighter">
          <span className="inline-block headerCA">
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