import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Hero from "./components/Hero";
import Game from "./components/Game";
import Map from "./components/InteractivMap";
import Informations from "./components/Informations";
import "./App.css";

const App = () => {
  const [mapClick, setMapClick] = useState("");
  const [mapHover, setMapHover] = useState("");
  const body = useRef();

  return (
    <Router>
      <div style={{ position: "relative" }} ref={body}>
        <Hero />
        <div className="container">
          <Switch>
            <Route path="/game">
              <div className="game_wrapper">
                <Game />
              </div>
            </Route>
            <Route path="/map">
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
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
