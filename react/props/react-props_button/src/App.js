import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="green" text="Submit" disabled={false} />
      <Button color="blue" text="Disabled" disabled={true} />
      <Button color="red" text="!!! Danger !!!" disabled={false} />
      <Button color="purple" text="Have fun!" disabled={false} />
    </div>
  );
}

function Button(props) {
  const { color, text, disabled } = props;

  return (
    <button
      style={{
        color: color,
        backgroundColor: disabled ? "darkgray" : "lightgray",
      }}
      disabled={disabled}
    >
      <p>{text}</p>
    </button>
  );
}
