import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const BackToTop = ({ scrollYThreshold = 700 }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    setIsVisible(window.scrollY > scrollYThreshold);
  }, [scrollYThreshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, [toggleVisibility]);

  return (
    <div className="back-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="btn-reg back-to-top-button">
          <span>back to top</span> <span>↑</span>
        </button>
      )}
    </div>
  );
};

BackToTop.propTypes = {
  scrollYThreshold: PropTypes.number
};

export default BackToTop;
