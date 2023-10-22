import React, { useEffect, useState } from "react";
import "./Results.css";
function Results({ score, changeColor }) {
  let { xScore, oScore } = score;
  return (
    <div className={`results ${changeColor}`}>
      <div className='x'>{`X - ${xScore}`}</div>
      <div className='o'>{`O - ${oScore}`}</div>
    </div>
  );
}

export default Results;
