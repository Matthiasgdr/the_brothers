import React, { useState } from "react";
import PropTypes from "prop-types";
import Informations from "./Informations";
import Map from "./Map";
import "./style.css";

const InteractiveMap = ({ body }) => {
  const [mapClick, setMapClick] = useState("");
  const [mapHover, setMapHover] = useState("");
  return (
    <div className="map_container">
      <div
        className="map_wrapper"
        style={{
          transform: mapClick ? "translateX(-10vw)" : "translateX(0)",
        }}
      >
        <Map
          setMapClick={setMapClick}
          setMapHover={setMapHover}
          mapHover={mapHover}
          body={body}
        />
      </div>
      <Informations setMapClick={setMapClick} mapClick={mapClick} />
    </div>
  );
};

InteractiveMap.propTypes = {};

export default InteractiveMap;
