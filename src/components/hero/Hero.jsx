import React from "react";
import HeroSection from "./HeroSection";

const Hero = () => {
  return (
    <section className="overflow-Hide">
      <HeroSection />
    </section>
  );
};

export default React.memo(Hero);
