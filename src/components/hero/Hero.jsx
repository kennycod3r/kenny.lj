import React from 'react';
import HeroSection from './HeroSection';
import './Hero.css';

const Hero = () => (
  <section>
    <HeroSection />
  </section>
);

export default React.memo(Hero);
