import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import gsap from "gsap";
import { useEffect } from "react";
import ArrowLink from "../../util/ArrowLink";

const Main = () => {
  useEffect(() => {
    gsap.to("#header2", {
      yPercent: -100,
      delay: 0.7,
      duration: 0.8,
      ease: "power4.out",
      stagger: {
        amount: 0.5,
      },
    });
  }, []);

  return (
    <main>
      <div className="doublegrid">
        <div className="maingrid1">
          <div className="containerAnimate">
            <div className="containerAnimate-div">
              <h1 id="header2">
                What I Do?<span className="o2">03</span><div class="arrow-right"></div>
              </h1>
            </div>
          </div>

          <div className="mfs">
            <ul>
              <li className="smallestp headerp">Seo Services </li>
              <li className="smallestp headerp">Motion & Animations</li>
              <li className="smallestp headerp">Web Articles</li>
            </ul>
          </div>
        </div>
        <div className="main-grid-2">
          <article className="smallp article">
            <div>
              <h3 className="headerp name">Interactive Developer.</h3>
              <p className="smallestp headerp">
                I create engaging and purposeful web experiences. As a frontend
                developer versed in React, TypeScript, and all necessary skills,
                I offer comprehensive services that encompass customer research,
                trend analysis, and competitor review to inform strategic
                decisions. From product ideation,brand positioning to detailed
                web-engineering and development. My development expertise
                ensures seamless integration of complex functionalities, optimal
                performance, and cutting-edge technologies, providing businesses
                with a competitive edge in the digital landscape.
              </p>
            </div>
            <div>
              <h3 className="headerp name">Interactive Designer.</h3>
              <p className="smallestp headerp">
                I specialize in helping brands stand out in the digital world by
                creating engaging and purposeful web experiences. My design
                approach prioritizes intuitive user interfaces, seamless
                navigation, and aesthetically pleasing visuals. With a keen eye
                for detail and a deep understanding of UX/UI principles, I
                ensure that every design element enhances user engagement and
                satisfaction Through meticulous design processes.
              </p>
            </div>
          </article>

          <div className="mfs">
            <Link className="grey-text aboutme-link number fC" to="/AboutUs">
              <ArrowLink black={true} />
              Explore More —ABOUT ME
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
