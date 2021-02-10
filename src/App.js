import React, { useState, useEffect } from "react";
import Game from "./components/Game";
import Map from "./components/InteractivMap";
import Informations from "./components/Informations";
import "./App.css";

const App = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mapHover, setMapHover] = useState("foret");

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
    <div>
      <div className="hero_container">
        <div
          className="logo"
          style={{ transform: `translateY(${scrollY / 3}px)` }}
        ></div>
        <div className="trees"></div>
      </div>
      <div className="container">
        <div className="map_container">
          <div className="map_wrapper">
            <Map setMapHover={setMapHover} />
          </div>
          <div className="info_wrapper">
            <Informations mapHover={mapHover} />
          </div>
        </div>
        <div className="game_wrapper">
          <Game />
        </div>
      </div>
    </div>
  );
};

export default App;
