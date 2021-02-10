import React, { useRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Hero from "./components/Hero";
import Home from "./components/Home";
import Game from "./components/Game";
import InteractivMap from "./components/InteractivMap";
import "./App.css";

const App = () => {
  const body = useRef();

  return (
    <Router>
      <div style={{ position: "relative" }} ref={body}>
        <Hero />
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <Link to="/map">Map</Link>
            <Link to="/game">Game</Link>
          </nav>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/game">
            <div className="game_wrapper">
              <Game />
            </div>
          </Route>
          <Route path="/map">
            <InteractivMap body={body} />
          </Route>
        </div>
      </div>
    </Router>
  );
};

export default App;
