import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TextAnimation.css"; // Ensure this file is correctly imported

gsap.registerPlugin(ScrollTrigger);

const TextAnimation = ({ text }) => {
  // Ensure that text is an array
  const letters = Array.isArray(text) ? text : text.split("");

  useEffect(() => {
    gsap.fromTo(
      ".text-animation-container .will-change-transform",
      { y: 50, opacity: 0 }, // Start position and opacity
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".text-animation-container",
          start: "top 80%", // Trigger the animation when the top of the container is 80% from the viewport top
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  const renderLetters = () => {
    return letters.map((letter, index) => (
      <span key={index} className="relative inline-flex overflow-y-clip">
        <span className="will-change-transform">{letter}</span>
      </span>
    ));
  };

  return (
    <div className="text-animation-container">
      <h1 className="header--two">
        <span aria-hidden="true">
          <span className="inline-block">{renderLetters()}</span>
        </span>
      </h1>
    </div>
  );
};

export default TextAnimation;
