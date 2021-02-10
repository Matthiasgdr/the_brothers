import React, { useState } from "react";
import Unity from "react-unity-webgl";
import UnityContent from "../../utils/unityContent";

import "./style.css";

const Game = React.memo(() => {
  const [loading, setLoading] = useState(0);

  UnityContent.on("progress", (progression) => {
    setLoading(progression * 100);
  });

  return (
    <div className="game">
      {loading < 100 && (
        <div className="progress_container">
          <div className="progress_bar_wrapper">
            <div style={{ width: `${loading}%` }} className="progress_bar" />
          </div>
          <div>{Math.floor(loading)}%</div>
        </div>
      )}
      <Unity unityContent={UnityContent} />
    </div>
  );
});

export default Game;
