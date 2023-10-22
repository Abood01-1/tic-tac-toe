import React, { useState } from "react";
import "./TTT.css";
import TTTboxs from "./TTTboxs";
import Restart from "../Restart/Restart";

function TTT({ setScore, score, setChangeColor }) {
  const [boxs, setBoxs] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [draw, setDraw] = useState("");

  const WINNING_CASES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  function handleBox(ind) {
    const updateBoxs = boxs.map((ele, index) => {
      if (ind === index) {
        return xPlaying ? "X" : "O";
      } else {
        return ele;
      }
    });
    setChangeColor(xPlaying);

    const winner = CheckWinningCases(updateBoxs);
    if (winner) {
      if (winner === "X") {
        let { xScore } = score;
        xScore += 1;
        setScore({ ...score, xScore });
        setGameOver(true);
      } else if (winner === "O") {
        let { oScore } = score;
        oScore += 1;
        setScore({ ...score, oScore });
        setGameOver(true);
      }
    } else {
      let checkArr = checkDraw(updateBoxs);
      if (checkArr.length === 0) {
        setGameOver(true);
        setDraw("Draw");
      }
    }

    setBoxs(updateBoxs);
    setXPlaying(!xPlaying);
  }

  function checkDraw(updateBoxs) {
    let nulValues = updateBoxs.filter((ele) => {
      return ele === null;
    });
    return nulValues;
  }

  function RESTART() {
    setBoxs(Array(9).fill(null));
    setGameOver(false);
  }

  function CheckWinningCases(boxs) {
    for (let i = 0; i < WINNING_CASES.length; i++) {
      const [x, y, z] = WINNING_CASES[i];
      if (boxs[x] && boxs[x] === boxs[y] && boxs[y] === boxs[z]) {
        setGameOver(true);
        return boxs[x];
      }
    }
  }

  return (
    <div className='container'>
      {gameOver ? (
        <Restart draw={draw} RESTART={RESTART} xPlaying={xPlaying} />
      ) : (
        boxs.map((ele, ind) => {
          return (
            <TTTboxs
              key={ind}
              ind={ind}
              onClick={() => handleBox(ind)}
              value={ele}
            />
          );
        })
      )}
    </div>
  );
}

export default TTT;
