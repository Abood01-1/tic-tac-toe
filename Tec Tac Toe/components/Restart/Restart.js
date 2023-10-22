import React from "react";
import "./Restart.css";
function Restart({ xPlaying, RESTART, draw }) {
  const style = {
    textAlign: "center",
    position: "absolute",
    left: "50%",
    top: "30%",
    color: xPlaying ? "rgb(44, 135, 255)" : "rgb(255,70, 37)",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style}>
      {draw.length > 1 ? (
        <h1 style={{ color: "#333" }}>DRAW</h1>
      ) : (
        <h1>{xPlaying ? "O WIN" : "X WIN"}</h1>
      )}
      <button onClick={RESTART} class='ui-btn'>
        <span>Restart</span>
      </button>
    </div>
  );
}

export default Restart;
