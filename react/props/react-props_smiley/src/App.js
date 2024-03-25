import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
      <Smiley isHappy={true} />
      <Smiley isHappy={false} />
    </div>
  );
}

function Smiley(props) {
  // if the incoming parameter is happy, then (?) render ":-)",
  // otherwise (:) render the given ":-(".
  return <div>{props.isHappy === true ? "😊" : "🙁"}</div>;
}
