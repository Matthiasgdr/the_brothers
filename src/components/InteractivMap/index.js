import React from "react";
import "./style.css";
import UnderMap from "./UnderMap";
import OverMap from "./OverMap";

const InteractivMap = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1077.15 1077.15">
        <UnderMap />
        <OverMap />
      </svg>
    </>
  );
};

InteractivMap.propTypes = {};

export default InteractivMap;
