import React, { useEffect, useCallback } from "react";
import gsap from "gsap";

const TextAbout = () => {
  const runAnimation = useCallback(() => {
    const tl = gsap.timeline();
    tl.to("#animatetext1", {
      yPercent: -100,
      delay: 0.4,
      duration: 0.5,
      ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    })
      .to(
        "#animatetext2",
        {
          yPercent: -100,
          duration: 0.6,
          ease: "power4.out",
        },
        "-=0.4"
      )
      .to(
        "#animatetext3",
        {
          yPercent: -100,
          duration: 0.7,
          ease: "power4.out",
        },
        "-=0.4"
      );
  }, []);

  useEffect(() => {
    runAnimation();
  }, [runAnimation]);

  return (
    <div className="containerAnimate conAb">
      <div className="containerAnimate-div fC">
        <h1 id="animatetext1" className="headerAB">Developer.</h1>
        
      </div>
      <div className="containerAnimate-div fC">
        <h1 id="animatetext2" className="headerAB">Designer.</h1>
      </div>
      <div className="containerAnimate-div fC">
        <h1 id="animatetext3" className="headerAB">Creator.</h1>
      </div>
    </div>
  );
};

export default TextAbout;
