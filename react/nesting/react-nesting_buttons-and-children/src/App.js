import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>But I am also clickable!</Button>
      <Button>And what about me?</Button>
      <Button>What are you all talking about - I am the only one?!</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
