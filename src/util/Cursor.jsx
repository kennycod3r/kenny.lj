import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const Cursor = ({ id }) => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleCursor = (event) => {
      const { clientX, clientY } = event;
      gsap.to(cursorRef.current, {
        x: clientX - 45, // Adjust to center the cursor
        y: clientY - 45,
        delay: 0,
        duration: 1, // Adjust animation duration for smoother movement
        ease: "power4.out", // Use an easing function for smoother animation
      });
    };

    const btn = document.querySelector(`.${id}-button`);
    btn.addEventListener("mousemove", handleCursor);

    return () => {
      btn.removeEventListener("mousemove", handleCursor);
    };
  }, [id]);

  return (
    <div
      className="cursor"
      id={id}
      ref={cursorRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        transform: `translate(0, -50%)`,
      }}
    >
      view
    </div>
  );
};

Cursor.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Cursor;
