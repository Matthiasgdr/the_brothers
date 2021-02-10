import React from "react";
import PropTypes from "prop-types";
import texts from "./texts.json";

const Informations = ({ mapHover }) => {
  console.log(texts);
  return (
    <div>
      <div className="title">{texts[mapHover]}</div>
    </div>
  );
};

Informations.propTypes = {};

export default Informations;
