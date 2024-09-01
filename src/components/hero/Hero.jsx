import React from 'react';
import HeroSection from './HeroSection';
import "../../index.css";

const Hero = () => (
  <section>
    <HeroSection />
  </section>
);

export default React.memo(Hero);
