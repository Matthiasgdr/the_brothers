import React, { useState } from "react";
import "./style.css";
import WordOverMouse from "./WordOverMouse";
import UnderMap from "./UnderMap";
import OverMap from "./OverMap";

const InteractivMap = ({ setMapClick, setMapHover, mapHover, body }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const mouseMove = (e) => {
    setPosition({ x: e.pageX, y: e.pageY });
  };

  return (
    <>
      <WordOverMouse mapHover={mapHover} body={body} position={position} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1077.15 1077.15"
        onMouseMove={(e) => mouseMove(e)}
      >
        <UnderMap />
        <OverMap setMapClick={setMapClick} setMapHover={setMapHover} />
      </svg>
    </>
  );
};

InteractivMap.propTypes = {};

export default InteractivMap;
