import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  // Counter needs a state with a inital value
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Colored Number</h1>

      {/* Pass current count to the ColoredNumber component as the value prop */}
      <ColoredNumber count={count} />

      <ColoredNumber value={0} />

      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          // buttons need to update the state accordingly
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => setCount(count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
