import React, { useEffect, useState } from "react";
import Results from "./components/Results/Results";
import TTT from "./components/TTT/TTT";

export default function App() {
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [changeColor, setChangeColor] = useState(true);
  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  return (
    <div>
      <Results changeColor={changeColor} score={score} />
      <TTT setChangeColor={setChangeColor} score={score} setScore={setScore} />
    </div>
  );
}
