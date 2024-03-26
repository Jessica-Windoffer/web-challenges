import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  const handleClick = (event) => {
    const clickedAnimal = event.target.textContent;
    setCode((previousStateOfCode) => previousStateOfCode + clickedAnimal);
  };

  const handleReset = () => {
    setCode("");
  };

  return (
    <div className="container">
      <span>{code}</span>
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
