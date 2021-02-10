import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const setScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", setScroll);
    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return (
    <div className="hero_container">
      <div
        className="logo"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrollY / 3 - 150}px)`,
        }}
      ></div>
      <div className="trees trees_1"></div>
      <div
        className="trees trees_2"
        style={{ transform: `translateY(${-(scrollY / 10)}px)` }}
      ></div>
      <div
        className="trees trees_3"
        style={{ transform: `translateY(${-(scrollY / 8)}px)` }}
      ></div>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
