import React from "react";
import PropTypes from "prop-types";
import texts from "./texts.json";
import "./styles.css";
import lake from "./images/lake.jpg";
import dinners from "./images/dinners.jpg";
import police from "./images/police.jpg";

const Informations = ({ setMapClick, mapClick }) => {
  const image = {
    lake: lake,
    dinner: dinners,
    police: police,
  };

  return (
    mapClick && (
      <div className="info_wrapper">
        <div className="close" onClick={() => setMapClick("")}>
          X
        </div>
        <h2 className="title">{texts[mapClick] && texts[mapClick].title}</h2>
        <div className="description_wrapper">
          {texts[mapClick] && texts[mapClick].image && (
            <div className="img_wrapper">
              <img
                className="image"
                src={`${texts[mapClick] && image[texts[mapClick].image]}`}
                alt={texts[mapClick] && texts[mapClick].image}
              />
            </div>
          )}
          <div className="description">
            {texts[mapClick] && texts[mapClick].description}
          </div>
        </div>
      </div>
    )
  );
};

Informations.propTypes = {
  mapClick: PropTypes.string.isRequired,
};

export default Informations;
