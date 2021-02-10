import React from "react";
import PropTypes from "prop-types";
import texts from "./texts.json";

const Informations = ({ mapHover }) => {
  return (
    <div>
      <div className="title">{texts[mapHover].title}</div>
      <div className="description">{texts[mapHover].description}</div>
    </div>
  );
};

Informations.propTypes = {
  mapHover: PropTypes.string.isRequired,
};

export default Informations;
