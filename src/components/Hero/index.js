import React, { useState, useEffect } from "react";
import "./style.css";
import logo from "./hero_images/logo.png";

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
      <img
        className="logo"
        src={logo}
        alt="The Brothers"
        style={{
          transform: `translate(-50%, -50%) translateY(${scrollY / 2 - 150}px)`,
        }}
      />
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
