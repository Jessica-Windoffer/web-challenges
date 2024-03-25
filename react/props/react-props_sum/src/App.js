import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={5} valueB={15} />
      <Sum valueA={6} valueB={9} />
      <Sum valueA={3} valueB={7} />
      <Sum valueA={1} valueB={4} />
    </div>
  );
}

function Sum(props) {
  const { valueA, valueB } = props;
  return (
    <div>
      {valueA} + {valueB} = {valueA + valueB}
    </div>
  );
}
