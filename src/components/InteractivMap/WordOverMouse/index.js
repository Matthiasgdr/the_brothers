import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

const WordOverMouse = ({ mapHover, body, position }) => {
  const name = {
    foret: "PineGrove Forest",
    pinegrove: "PineGrove",
    pineswood: "PinesWood",
    montagne: "Midrock Mountain",
    dinner: "PinesWood Dinner",
    police: "PinesWood Sheriff Station",
    route: "PineGrove Road",
    lac: "Pineslake",
    casse: "Casse de PinesWood",
  };
  return mapHover && body.current
    ? ReactDOM.createPortal(
        <div
          className="word_container"
          style={{ top: position.y, left: position.x }}
        >
          <div className="word">{name[mapHover]}</div>
        </div>,
        body.current
      )
    : null;
};

WordOverMouse.propTypes = {};

export default WordOverMouse;
